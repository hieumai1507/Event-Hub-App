import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponents,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "@/components";
import { COMMON } from "@/constants/textConstant";
import { globalStyles } from "@/styles/global";
import { Lock, Sms } from "iconsax-react-native";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import SocialLogin from "../components/SocialLogin";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);
  return (
    <ContainerComponent isScroll isImageBackground>
      {/* Logo Section */}
      <SectionComponent
        styles={[
          {
            justifyContent: "center",
            alignItems: "center",
            marginTop: 75,
          },
        ]}
      >
        <Image
          source={require("@/assets/images/logo-text.png")}
          style={{
            width: 162,
            height: 114,
          }}
        />
      </SectionComponent>
      {/* Sign in input Section */}
      <SectionComponent>
        <TextComponent title text={COMMON.SIGNIN} />
        <SpaceComponent height={21} width={21} />
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
        {/* Remember me & Forgot Password */}
        <RowComponents justify="space-between">
          <RowComponents
            styles={{
              gap: 9,
            }}
            onPress={() => setIsRemember(!isRemember)}
          >
            <Switch
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)}
            />
            <TextComponent text={COMMON.REMEBERME} />
          </RowComponents>
          <ButtonComponent
            text={COMMON.FORGOTPASS}
            onPress={() => {}}
            type="text"
          />
        </RowComponents>
      </SectionComponent>
      <SpaceComponent height={16} />
      {/* SIGN IN Button */}
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" />
      </SectionComponent>
      {/* Social Login */}
      <SocialLogin />
      {/* navigate Sign up */}
      <SectionComponent>
        <RowComponents justify="center">
          <TextComponent text="Don't have an account" />
          <ButtonComponent text={COMMON.SIGNUP} type="link" />
        </RowComponents>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
