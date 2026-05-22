import { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from "react-native";
import { useRouter, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { languages } from "@/../data/languages";
import { images } from "@/../constants/images";
import LanguageCard from "@/components/LanguageCard";
import { Feather } from "@expo/vector-icons";

export default function LanguageSelectionScreen() {
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);
  const [searchQuery, setSearchQuery] = useState("");

  const handleConfirm = () => {
    // TODO: Save selected language to Zustand store
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
          <View className="flex-row items-center bg-white border-2 border-[#E5E7EB] rounded-full px-4 py-3">
            <Feather name="search" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Search languages"
              className="flex-1 ml-3 font-poppins text-base text-lingua-text-primary"
              placeholderTextColor="#9CA3AF"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>

        {/* 1. FlatList (bottom layer in z-index) */}
        <View className="flex-1 px-6">
          <FlatList
            data={filteredLanguages}
            keyExtractor={(item) => item.code}
            ListHeaderComponent={() => (
              <Text className="text-lg font-poppins-bold mb-4">Popular</Text>
            )}
            renderItem={({ item }) => (
              <LanguageCard
                language={item}
                isSelected={selectedLanguage === item.code}
                onPress={() => setSelectedLanguage(item.code)}
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
            className="bg-lingua-primary rounded-2xl py-4 items-center border-b-4 border-[#7C3AED]"
          >
            <Text className="font-poppins-bold text-white text-lg">Confirm</Text>
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
