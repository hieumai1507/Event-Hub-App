import TabLayout from "@/app/(tabs)/_layout";
import { SplashScreen } from "@/screens";
import { addAuth, authSelector } from "@/stores/reducers/authReducer";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthLayout from "./AuthLayout";

const AppRouter = () => {
  const [isShowSplash, setIsShowSplash] = useState(true);
  const { getItem } = useAsyncStorage("auth");
  const auth = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    checkLogin();
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);
  const checkLogin = async () => {
    const res = await getItem();
    console.log(res);
    res && dispatch(addAuth(JSON.parse(res)));
  };

  return (
    <>
      {isShowSplash ? (
        <SplashScreen />
      ) : auth.accessToken ? (
        <TabLayout />
      ) : (
        <AuthLayout />
      )}
    </>
  );
};

export default AppRouter;
