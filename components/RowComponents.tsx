import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from "react-native";
import React, { ReactNode } from "react";
import { globalStyles } from "@/styles/global";
interface Props {
  justify?:
    | "center"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | undefined;
  styles?: StyleProp<ViewStyle>;
  children?: ReactNode;
  onPress?: () => void;
}
const RowComponents = (props: Props) => {
  const { justify, styles, children, onPress } = props;
  const localStyle = [globalStyles.row, styles, { justifyContent: justify }];
  return onPress ? (
    <TouchableOpacity activeOpacity={0.9} style={localStyle} onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={localStyle}>{children}</View>
  );
};

export default RowComponents;
