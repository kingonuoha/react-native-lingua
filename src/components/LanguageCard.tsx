import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import type { Language } from "@/../types/learning";
import { Feather } from "@expo/vector-icons";
import { colors } from "@/../constants/colors";

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
      style={[
        styles.container,
        isSelected ? styles.selectedContainer : styles.defaultContainer,
      ]}
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
        <Feather name="chevron-right" size={20} color={colors.muted} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginBottom: 12,
    borderRadius: 16,
    borderWidth: 2,
  },
  selectedContainer: {
    borderColor: "#6c4ef5",
    backgroundColor: "#f4f4ff",
  },
  defaultContainer: {
    borderColor: "transparent",
    backgroundColor: "#ffffff",
    shadowColor: "rgba(13, 19, 43, 0.08)",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 8,
  },
});
