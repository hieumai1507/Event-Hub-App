import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  text: {
    fontFamily: fonts.AirbnbCereal_W_Lt,
    fontSize: 14,
    color: appColors.text,
  },
});
