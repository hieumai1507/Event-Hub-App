import { View, Text } from "react-native";
import React, { useState } from "react";
import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "@/components";
import { ArrowRight, Sms } from "iconsax-react-native";
import { appColors } from "@/constants/appColors";

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState("");
  return (
    <ContainerComponent back isImageBackground>
      <SectionComponent>
        <TextComponent text="Reset Password" title />
        <TextComponent text="Please enter  your email address to request a password reset" />
        <SpaceComponent height={26} />
        <InputComponent
          value={email}
          onChange={(val) => setEmail(val)}
          affix={<Sms size={22} color={appColors.gray} />}
          placeholder="abc@gmail.com"
        />
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
          text="SEND"
          type="primary"
          icon={<ArrowRight size={22} color={appColors.white} />}
          iconFlex="right"
        />
      </SectionComponent>
    </ContainerComponent>
  );
};

export default ForgotPasswordScreen;
