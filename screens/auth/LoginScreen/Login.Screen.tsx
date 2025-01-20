import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {
  return (
    <View>
      <Text>LoginScreen</Text>
      <Button
        title="Login"
        // onPress={async () =>
        //   await AsyncStorage.setItem("assetToken", "getAccessToken")
        // }
      />
    </View>
  );
};

export default LoginScreen;
