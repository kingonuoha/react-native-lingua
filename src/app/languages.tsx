import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet } from "react-native";
import { useRouter, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { usePostHog } from "posthog-react-native";
import { languages } from "@/../data/languages";
import { images } from "@/../constants/images";
import { useLanguageStore } from "@/../store/languageStore";
import LanguageCard from "@/components/LanguageCard";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/../constants/colors";

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const posthog = usePostHog();
  const storeLanguage = useLanguageStore((state) => state.selectedLanguage);
  const setSelectedLanguage = useLanguageStore(
    (state) => state.setSelectedLanguage
  );
  const [localSelected, setLocalSelected] = useState(
    storeLanguage ?? languages[0].code
  );
  const [searchQuery, setSearchQuery] = useState("");

  const handleConfirm = () => {
    posthog.capture("language_confirmed", {
      language_code: localSelected,
      previous_language: storeLanguage ?? null,
    });
    setSelectedLanguage(localSelected);
    router.replace("/");
  };

  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }} edges={['top', 'left', 'right']}>
      <Stack.Screen options={{ title: "Choose a language", headerShadowVisible: false }} />
      <View className="flex-1">
        {/* Search Bar */}
        <View className="px-6 mb-6 mt-4">
          <View className="flex-row items-center bg-white border-2 border-lingua rounded-full px-4 py-3">
            <Feather name="search" size={20} color={colors.muted} />
            <TextInput
              placeholder="Search languages"
              style={styles.searchInput}
              placeholderTextColor={colors.muted}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* 1. Language List */}
        <View className="flex-1 px-6">
          <FlatList
            data={filteredLanguages}
            keyExtractor={(item) => item.code}
            ListHeaderComponent={() => (
              <Text className="text-lg font-poppins-bold mb-4">All Languages</Text>
            )}
            renderItem={({ item }) => (
              <LanguageCard
                language={item}
                isSelected={localSelected === item.code}
                onPress={() => setLocalSelected(item.code)}
              />
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
          />
        </View>

        {/* 2. Confirm Button (Normal Flow) */}
        <View className="px-6 py-2">
          <TouchableOpacity
            onPress={handleConfirm}
            style={styles.confirmButton}
          >
            <Text style={styles.confirmButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>

        {/* 3. Earth Image (Normal Flow, crops top/bottom only, full width) */}
        <View className="w-full h-[180px] overflow-hidden">
          <Image
            source={images.earth}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    color: "#0d132b",
  },
  confirmButton: {
    backgroundColor: "#6c4ef5",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    borderBottomWidth: 4,
    borderBottomColor: "#5b3bf6",
  },
  confirmButtonText: {
    fontFamily: "Poppins-Bold",
    color: "#ffffff",
    fontSize: 18,
  },
});
