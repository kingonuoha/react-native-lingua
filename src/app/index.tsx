import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-lingua-background items-center justify-center px-6">
      <Text className="h1 font-poppins-bold text-lingua-primary text-center">
        Welcome to Lingua
      </Text>
      <Text className="body-md font-poppins text-lingua-text-secondary mt-3 text-center max-w-md">
        Learn languages with playful lessons, friendly reminders, and a clear
        design system.
      </Text>
    </View>
  );
}
