import { Stack } from "expo-router";
import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(nobottombar)/accountinfo" options={{ headerShown: true, headerTitle: "Account Info", headerBackTitle:"Go Back" }} />
      </Stack>
    </GestureHandlerRootView>
  );
} 