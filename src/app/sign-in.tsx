import { useSignIn } from "@clerk/expo";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri } from "expo-auth-session";
import { Link, Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { images } from "../../constants/images";
import FormError from "../components/FormError";
import VerificationModal from "../components/VerificationModal";

export default function SignIn() {
  const router = useRouter();
  const { signIn } = useSignIn();
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [signInError, setSignInError] = useState<string | null>(null);
  const [signInSuggestions, setSignInSuggestions] = useState<string[] | null>(
    null,
  );
  const [oauthLoading, setOauthLoading] = useState(false);

  async function handleGoogleOAuth() {
    setSignInError(null);
    setSignInSuggestions(null);
    setOauthLoading(true);
    try {
      if (!signIn) {
        setSignInError("Sign-in not initialized yet. Please wait.");
        return;
      }

      const redirectUrl = makeRedirectUri({ path: "oauth-callback" });
      console.log("[OAuth SignIn] redirectUrl:", redirectUrl);

      await signIn.create({ strategy: "oauth_google", redirectUrl });

      const authUrl =
        signIn.firstFactorVerification?.externalVerificationRedirectURL;
      console.log("[OAuth SignIn] authUrl:", authUrl?.toString());

      if (!authUrl) {
        setSignInError(
          "Failed to get Google auth URL. Check Clerk Dashboard for Google OAuth config.",
        );
        return;
      }

      await WebBrowser.openBrowserAsync(authUrl.toString());
    } catch (err: any) {
      const friendly =
        err?.errors?.[0]?.longMessage ||
        err?.message ||
        "OAuth failed.";
      console.warn("[OAuth SignIn] Exception:", friendly, err);
      setSignInError(friendly);
    } finally {
      setOauthLoading(false);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
      <Stack.Screen options={{ headerShown: false }} />

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
        style={localStyles.keyboard}
      >
        <ScrollView
          contentContainerStyle={localStyles.contentContainer}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="interactive"
        >
          <View className="flex-1 px-6 pt-6">
            <View className="flex-row items-center space-x-3 justify-center">
              <Image source={images.mascotLogo} className="w-9 h-9" />
              <Text className="text-lg font-poppins-bold text-lingua-primary">
                muolingo
              </Text>
            </View>

            <View className="flex-1 justify-center">
              <Text className="h1 font-poppins-bold text-lingua-text-primary text-center">
                Welcome back
              </Text>

              <Text className="body-md font-poppins text-lingua-text-secondary mt-3 text-center max-w-md self-center">
                Sign in with your email or continue with a social provider.
              </Text>

              <Image
                source={images.mascotAuth}
                className="w-64 h-48 self-center mt-6"
                resizeMode="contain"
              />

              <View className="mt-6 px-4">
                <View className="mb-3">
                  <Text className="text-sm font-poppins text-lingua-text-secondary mb-1">
                    Email
                  </Text>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="border border-lingua-border rounded-xl px-4 py-3 bg-transparent"
                  />
                  <FormError
                    message={signInError}
                    suggestions={signInSuggestions}
                  />
                </View>

                <TouchableOpacity
                  className="bg-lingua-primary rounded-2xl py-3 items-center mt-2"
                  onPress={async () => {
                    setSignInError(null);
                    setSignInSuggestions(null);
                    try {
                      if (signIn?.create) {
                        const res: any = await signIn.create({
                          identifier: email,
                          strategy: "email_code",
                        });
                        if (res?.error) {
                          const err = res.error as any;
                          const msg =
                            err?.errors?.[0]?.longMessage ||
                            err?.message ||
                            "Failed to start sign-in.";
                          const z = err?.errors?.[0]?.meta?.zxcvbn?.suggestions;
                          const suggestions = Array.isArray(z)
                            ? z.map((s: any) => s?.message || String(s))
                            : null;
                          setSignInError(msg);
                          setSignInSuggestions(suggestions);
                          return;
                        }
                      }
                    } catch (err: any) {
                      const friendly =
                        err?.errors?.[0]?.longMessage ||
                        err?.message ||
                        "Failed to start sign-in.";
                      const z = err?.errors?.[0]?.meta?.zxcvbn?.suggestions;
                      const suggestions = Array.isArray(z)
                        ? z.map((s: any) => s?.message || String(s))
                        : null;
                      setSignInError(friendly);
                      setSignInSuggestions(suggestions);
                      console.warn(
                        "start sign-in email flow failed:",
                        friendly,
                      );
                      return;
                    } finally {
                      setModalVisible(true);
                    }
                  }}
                >
                  <Text className="font-poppins-bold text-white">
                    Send sign-in code
                  </Text>
                </TouchableOpacity>

                <View className="flex-row items-center my-2">
                  <View className="flex-1 h-px bg-gray-200" />
                  <Text className="px-3 text-sm text-gray-400">
                    or continue with
                  </Text>
                  <View className="flex-1 h-px bg-gray-200" />
                </View>

                <View className="flex-row">
                  <TouchableOpacity
                    className="flex-1 border border-lingua-border rounded-xl py-3 items-center flex-row justify-center mr-3"
                    disabled={oauthLoading}
                    style={oauthLoading ? { opacity: 0.6 } : undefined}
                    onPress={handleGoogleOAuth}
                  >
                    {oauthLoading ? (
                      <ActivityIndicator size="small" color="#111827" />
                    ) : (
                      <FontAwesome name="google" size={18} color="#111827" />
                    )}
                    <Text className="ml-2">Continue with Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 border border-lingua-border rounded-xl py-3 items-center flex-row justify-center">
                    <FontAwesome name="apple" size={18} color="#111827" />
                    <Text className="ml-2">Continue with Apple</Text>
                  </TouchableOpacity>
                </View>
                <View className="flex-row justify-center mt-4">
                  <Text className="text-sm text-lingua-text-secondary">
                    New here?{" "}
                  </Text>
                  <Link href="/sign-up" asChild>
                    <TouchableOpacity className="px-1">
                      <Text className="text-sm text-lingua-primary font-poppins-bold">
                        Create account
                      </Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onVerify={async (code) => {
          try {
            const { error } = await signIn.emailCode.verifyCode({ code });

            if (error) {
              const msg =
                error.errors?.[0]?.longMessage ||
                error.message ||
                "Verification failed.";
              setSignInError(msg);
              return { success: false, message: msg };
            }

            if (signIn.status === "complete") {
              await signIn.finalize();
              router.push("/");
              return true;
            }

            return { success: false, message: "Sign-in not complete." };
          } catch (err: any) {
            const friendly =
              err?.errors?.[0]?.longMessage ||
              err?.message ||
              "Verification failed.";
            setSignInError(friendly);
            return { success: false, message: friendly };
          }
        }}
      />
    </SafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  keyboard: { flex: 1 },
  contentContainer: { flexGrow: 1, paddingBottom: 320 },
});
