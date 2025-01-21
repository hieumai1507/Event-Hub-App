import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ButtonComponent, InputComponent } from "@/components";
import { COMMON } from "@/constants/textConstant";
import { globalStyles } from "@/styles/global";
import { Lock, Sms } from "iconsax-react-native";
import { appColors } from "@/constants/appColors";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View
      style={[
        globalStyles.container,
        { justifyContent: "center", alignItems: "center", padding: 20 },
      ]}
    >
      <InputComponent
        value={email}
        onChange={(val) => setEmail(val)}
        placeholder="Email"
        allowClear
        affix={<Sms size={22} color={appColors.gray} />}
      />
      <InputComponent
        value={password}
        onChange={(val) => setPassword(val)}
        placeholder="Password"
        allowClear
        isPassword
        affix={<Lock size={22} color={appColors.gray} />}
      />
    </View>
  );
};

export default LoginScreen;
