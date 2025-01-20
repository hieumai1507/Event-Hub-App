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
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { SplashScreen } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./(routes)/auth/Login";
import { View } from "react-native";
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

  return (
    <View>
      <StatusBar style="dark" backgroundColor="transparent" />
      {isShowSplash ? <SplashScreen /> : <AuthLayout />}
    </View>
  );
}
