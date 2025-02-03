import AppRouter from "@/navigators/AppRouter";
import { SplashScreen } from "@/screens";
import store from "@/stores/store";
import * as Font from "expo-font";
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import "react-native-reanimated";
import { Provider } from "react-redux";
import "../global.css";

export default function RootLayout() {
  const [loaded, error] = Font.useFonts({
    AirbnbCereal_W_Bd: require("../assets/fonts/AirbnbCereal_W_Bd.otf"),
    AirbnbCereal_W_Bk: require("../assets/fonts/AirbnbCereal_W_Bk.otf"),
    AirbnbCereal_W_Blk: require("../assets/fonts/AirbnbCereal_W_Blk.otf"),
    AirbnbCereal_W_Lt: require("../assets/fonts/AirbnbCereal_W_Lt.otf"),
    AirbnbCereal_W_Md: require("../assets/fonts/AirbnbCereal_W_Md.otf"),
    AirbnbCereal_W_XBd: require("../assets/fonts/AirbnbCereal_W_XBd.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      <SplashScreen />;
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}
