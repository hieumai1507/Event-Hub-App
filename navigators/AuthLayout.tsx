import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "@/app/(routes)/auth/OnBoarding";
import Login from "@/app/(routes)/auth/Login";
import SignUp from "@/app/(routes)/auth/SignUp";
import Verification from "@/app/(routes)/auth/Verification";
import ForgotPassword from "@/app/(routes)/auth/ForgotPassword";
const Stack = createNativeStackNavigator();
const AuthLayout = () => {
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
};

export default AuthLayout;
