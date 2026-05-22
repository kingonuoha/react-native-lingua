import { Link, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <View className="flex-1 items-center justify-center px-6">
        <Text className="h1 font-poppins-bold text-lingua-text-primary text-center">
          Welcome to Lingua
        </Text>
        <Text className="body-md font-poppins text-lingua-text-secondary mt-3 text-center max-w-md">
          Learn languages with playful lessons, friendly reminders, and a clear
          design system.
        </Text>
        <Link href="/onboarding" asChild>
          <TouchableOpacity className="mt-8 bg-lingua-primary py-3 px-6 rounded-2xl">
            <Text className="text-white font-poppins-bold text-base">Open Onboarding</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/languages" asChild>
          <TouchableOpacity className="mt-4 bg-lingua-primary py-3 px-6 rounded-2xl">
            <Text className="text-white font-poppins-bold text-base">Select Language</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </SafeAreaView>
  );
}
