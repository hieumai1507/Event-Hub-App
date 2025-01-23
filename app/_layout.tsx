import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import * as Font from "expo-font";
import "../global.css";
import { SplashScreen } from "@/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import TabLayout from "./(tabs)/_layout";
import Login from "./(routes)/auth/Login";
import OnBoarding from "./(routes)/auth/OnBoarding";
import SignUp from "./(routes)/auth/SignUp";
import Verification from "./(routes)/auth/Verification";
import ForgotPassword from "./(routes)/auth/ForgotPassword";
const Stack = createNativeStackNavigator();

export default function RootLayout() {
  const [loaded, error] = Font.useFonts({
    AirbnbCereal_W_Bd: require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    AirbnbCereal_W_Bk: require("../assets/fonts/AirbnbCereal_W_Bk.otf"),
    AirbnbCereal_W_Blk: require("../assets/fonts/AirbnbCereal_W_Blk.otf"),
    AirbnbCereal_W_Lt: require("../assets/fonts/AirbnbCereal_W_Lt.otf"),
    AirbnbCereal_W_Md: require("../assets/fonts/AirbnbCereal_W_Md.otf"),
    AirbnbCereal_W_XBd: require("../assets/fonts/AirbnbCereal_W_XBd.otf"),
  });
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
  useEffect(() => {
    if (loaded || error) {
      <SplashScreen />;
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  function AuthLayout() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
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
