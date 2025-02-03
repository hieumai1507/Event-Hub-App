import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSelector, removeAuth } from "@/stores/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ExploreScreen = () => {
  const dispatch = useDispatch();
  const auth = useSelector(authSelector);
  return (
    <View className="item-center justify-center flex-1">
      <Text>ExploreScreen</Text>
      <Button
        title="Sign Out"
        onPress={async () => {
          await AsyncStorage.setItem("auth", auth.email);
          dispatch(removeAuth({}));
        }}
      ></Button>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
