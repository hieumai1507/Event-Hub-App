import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleProp,
  ViewStyle,
  SafeAreaView,
} from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "@/styles/global";
interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
}
const ContainerComponent = (props: Props) => {
  const { children, isScroll, isImageBackground, title } = props;
  const returnContainer = isScroll ? (
    <ScrollView style={[{ flex: 1 }]}>{children}</ScrollView>
  ) : (
    <View style={[{ flex: 1 }]}>{children}</View>
  );
  return isImageBackground ? (
    <ImageBackground
      source={require("../assets/images/splash-img.png")}
      style={{ flex: 1 }}
      imageStyle={{ flex: 1 }}
    >
      <SafeAreaView className="flex-1">{returnContainer}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container, { flex: 1 }]}>
      <View>{returnContainer}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
