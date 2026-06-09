import { useClerk, useSignIn, useSignUp } from "@clerk/expo";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function OAuthCallback() {
  const router = useRouter();
  const params = useLocalSearchParams<{ rotating_token_nonce?: string }>();
  const { signIn } = useSignIn() as any;
  const { signUp } = useSignUp();
  const { setActive } = useClerk();

  useEffect(() => {
    if (!signIn) return;

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

        await (signIn as any).reload({ rotatingTokenNonce: nonce });

        const { status, firstFactorVerification } = signIn as any;

        if (status === "complete") {
          await setActive({ session: (signIn as any).createdSessionId });
          router.replace("/");
        } else if (firstFactorVerification?.status === "transferable") {
          if (!signUp) {
            router.replace("/sign-up");
            return;
          }
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
  }, [params.rotating_token_nonce, router, signIn, signUp, setActive]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#208AEF" />
      <Text className="mt-4 text-gray-600">Completing sign-in...</Text>
    </View>
  );
}
