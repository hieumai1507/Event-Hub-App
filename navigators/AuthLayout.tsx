import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "@/app/(routes)/auth/OnBoarding";
import Login from "@/app/(routes)/auth/Login";
import SignUp from "@/app/(routes)/auth/SignUp";
import Verification from "@/app/(routes)/auth/Verification";
import ForgotPassword from "@/app/(routes)/auth/ForgotPassword";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Stack = createNativeStackNavigator();
const AuthLayout = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  useEffect(() => {
    checkoutExisting();
  }, []);
  const checkoutExisting = async () => {
    const res = await AsyncStorage.getItem("auth");
    res && setIsExistingUser(true);
  };
  console.log(isExistingUser);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {!isExistingUser && (
        <Stack.Screen name="OnBoarding" component={OnBoarding} />
      )}
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Verification" component={Verification} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthLayout;
