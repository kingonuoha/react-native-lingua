import { useSignUp, useSignIn } from "@clerk/expo";
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
import Ionicons from "react-native-vector-icons/Ionicons";
import { images } from "../../constants/images";
import FormError from "../components/FormError";
import VerificationModal from "../components/VerificationModal";

export default function SignUp() {
  const router = useRouter();
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpError, setSignUpError] = useState<string | null>(null);
  const [signUpSuggestions, setSignUpSuggestions] = useState<string[] | null>(
    null,
  );
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [oauthLoading, setOauthLoading] = useState(false);

  async function handleGoogleOAuth() {
    setSignUpError(null);
    setSignUpSuggestions(null);
    setOauthLoading(true);
    try {
      if (!signIn) {
        setSignUpError("Sign-in not initialized yet. Please wait.");
        return;
      }

      const redirectUrl = makeRedirectUri({ path: "oauth-callback" });
      console.log("[OAuth] redirectUrl:", redirectUrl);

      await signIn.create({ strategy: "oauth_google", redirectUrl });

      const authUrl =
        signIn.firstFactorVerification?.externalVerificationRedirectURL;
      console.log("[OAuth] authUrl:", authUrl?.toString());

      if (!authUrl) {
        setSignUpError(
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
      console.warn("[OAuth] Exception:", friendly, err);
      setSignUpError(friendly);
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
                Create your account
              </Text>

              <Text className="body-md font-poppins text-lingua-text-secondary mt-3 text-center max-w-md self-center">
                Sign up with email or continue with social providers.
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
                    className="border border-gray-200 rounded-xl px-4 py-3"
                  />
                </View>

                <View className="mb-3">
                  <Text className="text-sm font-poppins text-lingua-text-secondary mb-1">
                    Password
                  </Text>
                  <View className="relative">
                    <TextInput
                      value={password}
                      onChangeText={setPassword}
                      secureTextEntry={!showPassword}
                      className="border border-gray-200 rounded-xl px-4 py-3 pr-12"
                    />
                    <TouchableOpacity
                      className="absolute right-3 top-3"
                      onPress={() => setShowPassword((s) => !s)}
                    >
                      <Ionicons
                        name={showPassword ? "eye-off" : "eye"}
                        size={20}
                        color="#374151"
                      />
                    </TouchableOpacity>
                  </View>
                  <FormError
                    message={signUpError}
                    suggestions={signUpSuggestions}
                  />
                </View>

                <TouchableOpacity
                  className="bg-lingua-primary rounded-2xl py-4 items-center mt-2"
                  onPress={async () => {
                    setSignUpError(null);
                    setSignUpSuggestions(null);
                    try {
                      const res: any = await signUp.password({
                        emailAddress: email,
                        password,
                      });

                      if (res?.error) {
                        const err = res.error as any;
                        const msg =
                          err?.errors?.[0]?.longMessage ||
                          err?.message ||
                          "Failed to create account.";
                        const z = err?.errors?.[0]?.meta?.zxcvbn?.suggestions;
                        const suggestions = Array.isArray(z)
                          ? z.map((s: any) => s?.message || String(s))
                          : null;
                        setSignUpError(msg);
                        setSignUpSuggestions(suggestions);
                        return;
                      }

                      await signUp.verifications.sendEmailCode();
                      setModalVisible(true);
                    } catch (err: any) {
                      const friendly =
                        err?.errors?.[0]?.longMessage ||
                        err?.message ||
                        "Sign up failed. Please try again.";
                      const z = err?.errors?.[0]?.meta?.zxcvbn?.suggestions;
                      const suggestions = Array.isArray(z)
                        ? z.map((s: any) => s?.message || String(s))
                        : null;
                      setSignUpError(friendly);
                      setSignUpSuggestions(suggestions);
                      console.warn("Sign up error:", friendly);
                    }
                  }}
                >
                  <Text className="font-poppins-bold text-white">
                    Create account
                  </Text>
                </TouchableOpacity>

                <View className="flex-row items-center my-2">
                  <View className="flex-1 h-px bg-gray-200" />
                  <Text className="px-3 text-sm text-gray-400">
                    or continue with
                  </Text>
                  <View className="flex-1 h-px bg-gray-200" />
                </View>

                <View className="flex-row space-x-3">
                  <TouchableOpacity
                    className="flex-1 border border-gray-200 rounded-xl py-3 items-center flex-row justify-center space-x-3"
                    disabled={oauthLoading}
                    style={oauthLoading ? { opacity: 0.6 } : undefined}
                    onPress={handleGoogleOAuth}
                  >
                    {oauthLoading ? (
                      <ActivityIndicator size="small" color="#111827" />
                    ) : (
                      <FontAwesome name="google" size={18} color="#111827" />
                    )}
                    <Text>Continue with Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-1 border border-gray-200 rounded-xl py-3 items-center flex-row justify-center space-x-3">
                    <FontAwesome name="apple" size={18} color="#111827" />
                    <Text>Continue with Apple</Text>
                  </TouchableOpacity>
                </View>

                <View className="flex-row justify-center mt-4">
                  <Text className="text-sm text-lingua-text-secondary">
                    Already have an account?{" "}
                  </Text>
                  <Link href="/sign-in" asChild>
                    <TouchableOpacity>
                      <Text className="text-sm text-lingua-primary font-poppins-bold">
                        Sign in
                      </Text>
                    </TouchableOpacity>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {signUpError ? (
        <Text className="text-sm text-red-600 px-4 mt-2">{signUpError}</Text>
      ) : null}

      <VerificationModal
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        onVerify={async (code) => {
          try {
            await signUp.verifications.verifyEmailCode({ code });

            if (signUp.status === "complete") {
              await signUp.finalize({
                navigate: ({ session, decorateUrl }: any) => {
                  if (session?.currentTask) {
                    console.log(session?.currentTask);
                    return {
                      success: false,
                      message: "Session task pending.",
                    } as any;
                  }

                  const url = decorateUrl("/");
                  if (url.startsWith("http")) {
                    window.location.href = url;
                  } else {
                    router.push(url as any);
                  }
                },
              });

              return true;
            } else {
              const msg = "Sign-up attempt not complete.";
              setSignUpError(msg);
              return { success: false, message: msg };
            }
          } catch (err: any) {
            const friendly =
              err?.errors?.[0]?.longMessage ||
              err?.message ||
              "Verification failed.";
            setSignUpError(friendly);
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
