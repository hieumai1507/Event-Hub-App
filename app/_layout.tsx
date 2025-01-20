import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { SplashScreen } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./(routes)/auth/Login";
const Stack = createNativeStackNavigator();
// Prevent the splash screen from auto-hiding before asset loading is complete.

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });
  function AuthLayout() {
    return (
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </ThemeProvider>
    );
  }

  return isShowSplash ? <SplashScreen /> : <AuthLayout />;
}
