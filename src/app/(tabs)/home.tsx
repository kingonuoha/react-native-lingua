import { useUser } from "@clerk/expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useMemo } from "react";
import { usePostHog } from "posthog-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "@/../constants/images";
import { getLanguageByCode } from "@/../data/languages";
import { lessons } from "@/../data/lessons";
import { getUnitById, getUnitsByLanguage } from "@/../data/units";
import { useLanguageStore } from "@/../store/languageStore";

export default function HomeScreen() {
  const { user } = useUser();
  const posthog = usePostHog();
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguage,
  );
  const selectedLanguage = selectedLanguageCode
    ? getLanguageByCode(selectedLanguageCode)
    : null;

  const languageUnits = useMemo(
    () => (selectedLanguage ? getUnitsByLanguage(selectedLanguage.code) : []),
    [selectedLanguage],
  );

  const lessonOrder = useMemo(
    () => languageUnits.flatMap((unit) => unit.lessonIds),
    [languageUnits],
  );

  const languageLessons = useMemo(
    () =>
      lessonOrder
        .map((lessonId) => lessons.find((lesson) => lesson.id === lessonId))
        .filter((lesson): lesson is (typeof lessons)[number] =>
          Boolean(lesson),
        ),
    [lessonOrder],
  );

  const currentLesson = languageLessons[0];

  function hasProfileImage(u: unknown): u is { profileImageUrl?: string } {
    return u != null && typeof u === "object" && "profileImageUrl" in u;
  }

  const greeting = user?.firstName ? `Hola, ${user.firstName}! 👋` : "Hola! 👋";
  const avatarUrl = user
    ? (user.imageUrl ?? (hasProfileImage(user) ? user.profileImageUrl : undefined))
    : undefined;
  const dailyXpTarget = 20;
  const dailyXp = Math.min(currentLesson?.xpReward ?? 15, dailyXpTarget);
  const dailyXpProgress = Math.round((dailyXp / dailyXpTarget) * 100);
  const currentUnit = currentLesson ? getUnitById(currentLesson.unitId) : null;

  const planItems = [
    {
      id: "lesson",
      title: "Lesson",
      subtitle: "At the café",
      icon: "book-open-variant",
      color: "#6366F1",
      completed: true,
    },
    {
      id: "ai",
      title: "AI Conversation",
      subtitle: "Talk about your day",
      icon: "headphones",
      color: "#4F46E5",
      completed: false,
    },
    {
      id: "words",
      title: "New words",
      subtitle: "10 words",
      icon: "chat",
      color: "#F97316",
      completed: false,
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 32 }}
        className="flex-1 px-6 pt-6"
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            {selectedLanguage ? (
              <Image
                source={{ uri: selectedLanguage.flagUrl }}
                className="h-10 w-10 rounded-full"
              />
            ) : (
              <View className="h-10 w-10 rounded-full bg-lingua-surface items-center justify-center">
                <MaterialCommunityIcons
                  name="earth"
                  size={18}
                  color="#6c4ef5"
                />
              </View>
            )}
            <Text className="text-lg font-poppins-bold text-lingua-text-primary">
              {greeting}
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            <View className="flex-row items-center gap-1 rounded-2xl bg-[#FEF3C7] px-3 py-2">
              <MaterialCommunityIcons name="fire" size={18} color="#F97316" />
              <Text className="font-poppins-bold text-lingua-text-primary">
                12
              </Text>
            </View>
            <TouchableOpacity className="rounded-2xl bg-lingua-surface p-3">
              <MaterialCommunityIcons
                name="bell-outline"
                size={20}
                color="#374151"
              />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5 rounded-[32px] bg-[#FEF3C7] px-5 py-5 shadow-sm">
          <View className="flex-row items-center justify-between gap-4">
            <View className="flex-1 pr-3">
              <Text className="text-sm font-poppins-semibold text-[#92400E]">
                Daily goal
              </Text>
              <Text className="mt-3 text-3xl font-poppins-bold text-lingua-text-primary">
                {dailyXp}
                <Text className="text-xl font-poppins text-lingua-text-secondary">
                  {" "}
                  / {dailyXpTarget} XP
                </Text>
              </Text>
            </View>
            <Image
              source={images.treasure}
              className="h-20 w-20"
              resizeMode="contain"
            />
          </View>
          <View className="mt-5 h-3 overflow-hidden rounded-full bg-orange-200">
            <View
              className="h-full rounded-full bg-orange-500"
              style={{ width: `${dailyXpProgress}%` }}
            />
          </View>
        </View>

        <View className="mt-5 overflow-hidden rounded-[32px] bg-[#4338CA] px-5 py-6 shadow-sm">
          <Image
            source={images.palace}
            className="absolute right-0 top-0 h-36 w-36"
            resizeMode="contain"
          />
          <View className="relative">
            <Text className="text-sm font-poppins-semibold text-white/80">
              Continue learning
            </Text>
            <Text className="mt-3 text-3xl font-poppins-bold text-white">
              {selectedLanguage ? selectedLanguage.name : "Spanish"}
            </Text>
            <Text className="mt-2 text-sm font-poppins text-white/80">
              {currentUnit ? `A1 · ${currentUnit.title}` : "A1 · Unit 1"}
            </Text>

            <TouchableOpacity
              className="mt-6 rounded-2xl bg-white px-5 py-3"
              onPress={() =>
                posthog.capture("continue_learning_pressed", {
                  language: selectedLanguageCode,
                  lesson_id: currentLesson?.id,
                  unit_id: currentLesson?.unitId,
                })
              }
            >
              <Text className="font-poppins-semibold text-[#4338CA]">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View className="mt-5 flex-row items-center justify-between">
          <Text className="text-lg font-poppins-bold text-lingua-text-primary">
            Today’s plan
          </Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text className="text-sm font-poppins-semibold text-lingua-primary">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 space-y-3">
          {planItems.map((item) => (
            <View
              key={item.id}
              className="flex-row items-center justify-between rounded-3xl bg-white px-4 py-4 shadow-sm"
            >
              <View className="flex-row items-center gap-3">
                <View
                  className="h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <MaterialCommunityIcons
                    name={item.icon as any}
                    size={20}
                    color={item.color}
                  />
                </View>
                <View>
                  <Text className="font-poppins-semibold text-lingua-text-primary">
                    {item.title}
                  </Text>
                  <Text className="mt-1 text-sm font-poppins text-lingua-text-secondary">
                    {item.subtitle}
                  </Text>
                </View>
              </View>
              <View
                className="h-6 w-6 items-center justify-center rounded-full"
                style={{
                  backgroundColor: item.completed ? "#4338CA" : "#E5E7EB",
                }}
              >
                {item.completed ? (
                  <MaterialCommunityIcons name="check" size={14} color="#fff" />
                ) : null}
              </View>
            </View>
          ))}
        </View>

        <View className="mt-5 rounded-[32px] bg-[#ECFDF5] px-5 py-5 shadow-sm flex-row items-center justify-between">
          <View className="flex-1 pr-3">
            <Text className="text-xs font-poppins-semibold uppercase tracking-[0.2em] text-lingua-primary">
              Next up
            </Text>
            <Text className="mt-3 text-lg font-poppins-bold text-lingua-text-primary">
              AI Video Call
            </Text>
            <Text className="mt-1 text-sm font-poppins text-lingua-text-secondary">
              Practice speaking
            </Text>
          </View>

          <View className="flex-row items-center gap-3">
            {avatarUrl ? (
              <Image
                source={{ uri: avatarUrl }}
                className="h-14 w-14 rounded-2xl"
              />
            ) : (
              <View className="h-14 w-14 items-center justify-center rounded-2xl bg-lingua-primary">
                <Text className="font-poppins-bold text-white">
                  {user?.firstName?.[0]?.toUpperCase() ?? "U"}
                </Text>
              </View>
            )}
            <TouchableOpacity
              className="h-14 w-14 items-center justify-center rounded-2xl bg-lingua-primary"
              onPress={() =>
                posthog.capture("ai_video_call_started", {
                  language: selectedLanguageCode,
                })
              }
            >
              <MaterialCommunityIcons name="video" size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
