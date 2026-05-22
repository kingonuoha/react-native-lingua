import { useClerk, useSignIn, useSignUp } from "@clerk/expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function OAuthCallback() {
  const router = useRouter();
  const params = useLocalSearchParams<{ rotating_token_nonce?: string }>();
  const { signIn, isLoaded: signInLoaded } = useSignIn();
  const { signUp } = useSignUp();
  const { setActive } = useClerk();

  useEffect(() => {
    if (!signInLoaded) return;

    const nonce = params.rotating_token_nonce;
    if (!nonce) {
      router.replace("/");
      return;
    }

    async function completeOAuth() {
      try {
        if (!signIn) {
          router.replace("/sign-up");
          return;
        }

        await signIn.reload({ rotatingTokenNonce: nonce });

        const { status, firstFactorVerification } = signIn;

        if (status === "complete") {
          await setActive({ session: signIn.createdSessionId });
          router.replace("/");
        } else if (firstFactorVerification?.status === "transferable") {
          await signUp.create({ transfer: true });
          if (signUp.createdSessionId) {
            await setActive({ session: signUp.createdSessionId });
          }
          router.replace("/");
        } else {
          router.replace("/sign-up");
        }
      } catch {
        router.replace("/sign-up");
      }
    }

    completeOAuth();
  }, [signInLoaded, params.rotating_token_nonce]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#208AEF" />
      <Text className="mt-4 text-gray-600">Completing sign-in...</Text>
    </View>
  );
}
