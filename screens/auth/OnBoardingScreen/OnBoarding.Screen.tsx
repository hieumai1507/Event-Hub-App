import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextComponent,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import Swiper from "react-native-swiper";
import "@/styles/global";
import { appInfo } from "@/constants/appInfos";
import { appColors } from "@/constants/appColors";
import { globalStyles } from "@/styles/global";
import { useNavigation } from "expo-router";
const OnBoardingScreen = () => {
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.container]}>
      <Swiper
        activeDotColor={appColors.white}
        loop={false}
        index={index}
        onIndexChanged={(num) => setIndex(num)}
      >
        <Image
          source={require("@/assets/images/onboarding-1.png")}
          className="flex-1 w-full h-full object-cover"
        />
        <Image
          source={require("@/assets/images/onboarding-2.png")}
          className="flex-1 w-full h-full object-cover"
        />
        <Image
          source={require("@/assets/images/onboarding-3.png")}
          className="flex-1 w-full h-full object-cover"
        />
      </Swiper>
      <View className="px-4 py-2 absolute bottom-5 right-5 left-5 flex-row justify-between items-center">
        <TouchableOpacity onPress={() => navigation.replace("Login")}>
          <Text style={[styles.text, { color: appColors.gray2 }]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            index < 2 ? setIndex(index + 1) : navigation.replace("Login")
          }
        >
          <Text style={[styles.text, { color: appColors.white }]}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnBoardingScreen;
const styles = StyleSheet.create({
  text: {
    color: appColors.white,
    fontSize: 16,
    fontWeight: "500",
  },
});
