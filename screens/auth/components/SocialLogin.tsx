import Facebook from "@/assets/svg/FacebookConvert";
import Google from "@/assets/svg/GoogleConvert";
import {
  ButtonComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "@/components";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { COMMON } from "@/constants/textConstant";
import React from "react";

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
      <SpaceComponent height={16} />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text={COMMON.GOOGLE}
        textFont={fonts.Lt}
        iconFlex="left"
        icon={<Google />}
      />
      <ButtonComponent
        type="primary"
        color={appColors.white}
        textColor={appColors.text}
        text={COMMON.FACEBOOK}
        iconFlex="left"
        textFont={fonts.Lt}
        icon={<Facebook />}
      />
    </SectionComponent>
  );
};

export default SocialLogin;
