import { View, Text, Image, TouchableOpacity } from "react-native";
import type { Language } from "@/../types/learning";
import { Feather } from "@expo/vector-icons";

interface Props {
  language: Language;
  onPress: () => void;
  isSelected: boolean;
}

export default function LanguageCard({ language, onPress, isSelected }: Props) {
  const formattedLearners = language.learners
    ? `${(language.learners / 1000000).toFixed(1)}M learners`
    : "0 learners";

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center p-4 mb-3 rounded-2xl border-2 ${
        isSelected
          ? "border-lingua-primary bg-[#F4F4FF]"
          : "border-transparent bg-white shadow-sm"
      }`}
    >
      <Image
        source={{ uri: language.flagUrl }}
        className="w-10 h-10 rounded-full"
        resizeMode="cover"
      />
      <View className="ml-4 flex-1">
        <Text className="text-lg font-poppins-bold text-lingua-text-primary">
          {language.name}
        </Text>
        <Text className="text-sm font-poppins text-lingua-text-secondary mt-1">
          {formattedLearners}
        </Text>
      </View>
      {isSelected ? (
        <View className="w-6 h-6 rounded-full bg-lingua-primary items-center justify-center">
          <Feather name="check" size={14} color="white" />
        </View>
      ) : (
        <Feather name="chevron-right" size={20} color="#9CA3AF" />
      )}
    </TouchableOpacity>
  );
}
