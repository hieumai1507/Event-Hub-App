import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import "../global.css";
import { SplashScreen } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import TabLayout from "./(tabs)/_layout";
import Login from "./(routes)/auth/Login";
import OnBoarding from "./(routes)/auth/OnBoarding";
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [isShowSplash, setIsShowSplash] = useState(true);

  const [accessToken, setAccessToken] = useState("");
  const { getItem, setItem } = useAsyncStorage("assetToken");
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  // useEffect(() => {
  //   checkLogin();
  // }, []);
  // const checkLogin = async () => {
  //   const token = await getItem();
  //   console.log(token);
  //   token && setAccessToken(token);
  // };

  function AuthLayout() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    );
  }

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      {isShowSplash ? (
        <SplashScreen />
      ) : accessToken ? (
        <TabLayout />
      ) : (
        <AuthLayout />
      )}
    </>
  );
}
