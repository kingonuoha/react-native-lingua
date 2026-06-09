import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getLanguageByCode } from "@/../data/languages";
import { useLanguageStore } from "@/../store/languageStore";

export default function Index() {
  const router = useRouter();
  const selectedLanguageCode = useLanguageStore(
    (state) => state.selectedLanguage
  );
  const selectedLanguage = selectedLanguageCode
    ? getLanguageByCode(selectedLanguageCode)
    : null;

  const handleClearStorage = async () => {
    await AsyncStorage.removeItem("language-store");
    useLanguageStore.getState().clearSelectedLanguage();
    router.replace("/languages");
  };

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
        {selectedLanguage && (
          <View className="mt-6 flex-row items-center gap-3 bg-lingua-accent/10 px-5 py-3 rounded-2xl">
            <Image
              source={{ uri: selectedLanguage.flagUrl }}
              className="w-8 h-8 rounded-full"
            />
            <View>
              <Text className="font-poppins-bold text-lingua-text-primary text-base">
                {selectedLanguage.name}
              </Text>
              <Text className="font-poppins text-lingua-text-secondary text-sm">
                {selectedLanguage.nativeName}
              </Text>
            </View>
          </View>
        )}
        <Link href="/onboarding" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Open Onboarding</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/home" asChild>
          <TouchableOpacity style={StyleSheet.flatten([styles.primaryButton, { backgroundColor: "#0ea5e9" }])}>
            <Text style={styles.primaryButtonText}>Open App</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/languages" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Select Language</Text>
          </TouchableOpacity>
        </Link>
        <TouchableOpacity
          onPress={handleClearStorage}
          style={styles.dangerButton}
        >
          <Text style={styles.dangerButtonText}>Clear Storage (Testing)</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    marginTop: 32,
    backgroundColor: "#6c4ef5",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  primaryButtonText: {
    color: "#ffffff",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
  dangerButton: {
    marginTop: 32,
    borderWidth: 2,
    borderColor: "#ef4444",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  dangerButtonText: {
    color: "#ef4444",
    fontFamily: "Poppins-Bold",
    fontSize: 16,
  },
});
