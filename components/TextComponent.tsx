import { View, Text, StyleProp, TextStyle, Platform } from "react-native";
import React from "react";
import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { globalStyles } from "@/styles/global";
interface Props {
  text: string;
  color?: string;
  fontSize?: number;
  flex?: number;
  font?: string;
  styles?: StyleProp<TextStyle>;
  title?: boolean;
}
const TextComponent = (props: Props) => {
  const { text, color, fontSize, flex, font, styles, title } = props;
  const fontSizeDefault = Platform.OS === "ios" ? 16 : 14;
  return (
    <Text
      style={[
        globalStyles.text,
        {
          color: color ?? appColors.text,
          flex: flex ?? 0,
          fontSize: fontSize ? fontSize : title ? 24 : fontSizeDefault,
          fontFamily: font ? font : fonts.Lt,
        },
        styles,
      ]}
    >
      {text}
    </Text>
  );
};

export default TextComponent;
