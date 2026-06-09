import "../../global.css";

import { useFonts } from "expo-font";
import { Stack, usePathname, useRouter, useGlobalSearchParams } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useRef, useState } from "react";
import { PostHogProvider } from "posthog-react-native";
import { posthog } from "@/config/posthog";

import { ClerkProvider, useAuth } from "@clerk/expo";
import { tokenCache } from "@clerk/expo/token-cache";

import { useLanguageStore } from "@/../store/languageStore";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

function ScreenTracker() {
  const pathname = usePathname();
  const params = useGlobalSearchParams();
  const previousPathname = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      posthog.screen(pathname, {
        previous_screen: previousPathname.current ?? null,
        ...params,
      });
      previousPathname.current = pathname;
    }
  }, [pathname, params]);

  return null;
}

function AuthGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const { isLoaded, isSignedIn } = useAuth();
  const selectedLanguage = useLanguageStore((state) => state.selectedLanguage);
  const [hydrated, setHydrated] = useState(
    useLanguageStore.persist.hasHydrated()
  );

  useEffect(() => {
    // If hydration finished between useState init and this effect mount,
    // onFinishHydration won't fire — so re-check here.
    if (useLanguageStore.persist.hasHydrated()) {
      setHydrated(true);
      return;
    }
    const unsub = useLanguageStore.persist.onFinishHydration(() =>
      setHydrated(true)
    );
    return unsub;
  }, []);

  useEffect(() => {
    if (!isLoaded || !hydrated) return;
    if (!isSignedIn) return;

    if (!selectedLanguage && pathname !== "/languages") {
      router.replace("/languages");
    }
  }, [isLoaded, isSignedIn, selectedLanguage, hydrated, pathname, router]);

  return <Stack screenOptions={{ headerShown: false }} />;
}

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("../../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../../assets/fonts/Poppins-Bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().finally(() => setAppIsReady(true));
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  if (!publishableKey) {
  return <Stack screenOptions={{ headerShown: false }} />;
  }

  return (
    <PostHogProvider
      client={posthog}
      autocapture={{
        captureScreens: false,
        captureTouches: true,
        propsToCapture: ["testID"],
        maxElementsCaptured: 20,
      }}
    >
      <ScreenTracker />
      <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
        <AuthGuard />
      </ClerkProvider>
    </PostHogProvider>
  );
}
