import { Link } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

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
      <Link href="/onboarding" asChild>
        <TouchableOpacity className="mt-8 bg-lingua-primary py-3 px-6 rounded-lg">
          <Text className="text-white font-poppins-bold text-base">Open Onboarding</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
