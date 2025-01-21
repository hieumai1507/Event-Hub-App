import { View, Text } from "react-native";
import React from "react";
import { ButtonComponent, SectionComponent, TextComponent } from "@/components";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { COMMON } from "@/constants/textConstant";
import { Google } from "iconsax-react-native";

const SocialLogin = () => {
  return (
    <SectionComponent>
      <TextComponent
        text="OR"
        color={appColors.gray4}
        fontSize={16}
        font={fonts.Md}
        styles={{
          textAlign: "center",
        }}
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text={COMMON.GOOGLE}
        icon={<Google size={24} color={appColors.primary} />}
        iconFlex="left"
      />
    </SectionComponent>
  );
};

export default SocialLogin;
