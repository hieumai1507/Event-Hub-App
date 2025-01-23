import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { globalStyles } from "@/styles/global";
import { useNavigation } from "expo-router";
import { ArrowLeft } from "iconsax-react-native";
import React, { ReactNode } from "react";
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import RowComponents from "./RowComponents";
import TextComponent from "./TextComponent";
interface Props {
  isImageBackground?: boolean;
  isScroll?: boolean;
  title?: string;
  children: ReactNode;
  back?: boolean;
}
const ContainerComponent = (props: Props) => {
  const { children, isScroll, isImageBackground, title, back } = props;
  const navigation: any = useNavigation();
  const headerComponent = () => {
    return (
      <View style={{ flex: 1, paddingTop: 3 }}>
        {(title || back) && (
          <RowComponents
            styles={{
              paddingHorizontal: 16,
              paddingVertical: 10,
              minWidth: 40,
              minHeight: 48,
            }}
          >
            {back && (
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  marginRight: 12,
                }}
              >
                <ArrowLeft size={24} color={appColors.text} />
              </TouchableOpacity>
            )}
            {title && <TextComponent text={title} font={fonts.Md} />}
          </RowComponents>
        )}

        {returnContainer}
      </View>
    );
  };
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
      <SafeAreaView className="flex-1">{headerComponent()}</SafeAreaView>
    </ImageBackground>
  ) : (
    <SafeAreaView style={[globalStyles.container, { flex: 1 }]}>
      <View>{headerComponent()}</View>
    </SafeAreaView>
  );
};

export default ContainerComponent;
