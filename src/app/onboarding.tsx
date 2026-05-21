import { Stack } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/images";

export default function Onboarding() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View className="flex-1 px-6 pt-6">
        <View className="flex-row items-center space-x-3 justify-center">
          <Image source={images.mascotLogo} className="w-9 h-9" />
          <Text className="text-lg font-poppins-bold text-lingua-primary">
            muolingo
          </Text>
        </View>

        <View className="flex-1 justify-center">
          <Text className="h1 font-poppins-bold text-lingua-text-primary text-center">
            Your AI language
            <Text className="text-lingua-primary"> teacher.</Text>
          </Text>

          <Text className="body-md font-poppins text-lingua-text-secondary mt-3 text-center max-w-md self-center">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>

          <Image
            source={images.mascotWelcome}
            className="w-80 h-80 self-center mt-4"
            resizeMode="contain"
          />
        </View>

        <View className="pb-6">
          <TouchableOpacity className="mx-4 bg-lingua-primary rounded-2xl py-4 items-center">
            <Text className="font-poppins-bold text-white">Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
