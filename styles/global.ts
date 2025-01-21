import { appColors } from "@/constants/appColors";
import fonts from "@/constants/fonts";
import { StyleSheet } from "react-native";
export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.white,
  },
  text: {
    fontFamily: fonts.Lt,
    fontSize: 14,
    color: appColors.text,
  },
  button: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: appColors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
    minHeight: 56,
    flexDirection: "row",
  },
});
