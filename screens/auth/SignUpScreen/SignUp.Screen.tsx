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
import { Lock, Profile, Sms } from "iconsax-react-native";
import React, { useState } from "react";
import SocialLogin from "../components/SocialLogin";
const initValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpScreen = () => {
  const [values, setValues] = useState(initValue);
  const handleChangValue = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  };
  const [isRemember, setIsRemember] = useState(true);
  const navigation = useNavigation();

  return (
    <ContainerComponent isScroll isImageBackground back>
      {/* Sign in input Section */}
      <SectionComponent>
        <TextComponent title text={COMMON.SIGNUP} />
        <SpaceComponent height={21} width={21} />
        <InputComponent
          value={values.username}
          onChange={(value) => handleChangValue("username", value)}
          placeholder="Full Name"
          allowClear
          affix={<Profile size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.email}
          onChange={(value) => handleChangValue("email", value)}
          placeholder="Email"
          allowClear
          affix={<Sms size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.password}
          onChange={(val) => handleChangValue("password", val)}
          placeholder="Password"
          allowClear
          isPassword
          affix={<Lock size={22} color={appColors.gray} />}
        />
        <InputComponent
          value={values.confirmPassword}
          onChange={(val) => handleChangValue("confirmPassword", val)}
          placeholder="Confirm Password"
          allowClear
          isPassword
          affix={<Lock size={22} color={appColors.gray} />}
        />
        {/* Remember me & Forgot Password */}
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
          <TextComponent text={COMMON.HAVEANACCOUNT} />
          <ButtonComponent
            text={COMMON.SIGNIN}
            type="link"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </RowComponents>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default SignUpScreen;
