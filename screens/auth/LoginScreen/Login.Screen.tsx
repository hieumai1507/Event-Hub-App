import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponents,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "@/components";
import { appColors } from "@/constants/appColors";
import { COMMON } from "@/constants/textConstant";
import { useNavigation } from "expo-router";
import { Lock, Sms } from "iconsax-react-native";
import React, { useState } from "react";
import { Image, Switch } from "react-native";
import SocialLogin from "../components/SocialLogin";
import authenticationAPI from "@/apis/authApi";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);
  const navigation = useNavigation();
  const handleLogin = async () => {
    try {
      const res = await authenticationAPI.HandleAuthentication("/hello");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
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
            onPress={() => navigation.navigate("ForgotPassword")}
            type="text"
          />
        </RowComponents>
      </SectionComponent>
      <SpaceComponent height={16} />
      {/* SIGN IN Button */}
      <SectionComponent>
        <ButtonComponent text="SIGN IN" type="primary" onPress={handleLogin} />
      </SectionComponent>
      {/* Social Login */}
      <SocialLogin />
      {/* navigate Sign up */}
      <SectionComponent>
        <RowComponents justify="center">
          <TextComponent text="Don't have an account" />
          <ButtonComponent
            text={COMMON.SIGNUP}
            type="link"
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </RowComponents>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
