import { Stack } from "expo-router";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { WallpaperProvider } from "@/context/WallPaperContext";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <WallpaperProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(nobottombar)/accountinfo" options={{ headerShown: true, headerTitle: "Account Info", headerBackTitle:"Go Back" }} />
        </Stack>
      </WallpaperProvider>
    </GestureHandlerRootView>
  );
} 