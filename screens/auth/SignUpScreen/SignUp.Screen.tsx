import {
  ButtonComponent,
  ContainerComponent,
  InputComponent,
  RowComponents,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from "@/components";
import { appColors } from "@/constants/appColors";
import { COMMON } from "@/constants/textConstant";
import { useNavigation } from "expo-router";
import { Lock, Profile, Sms } from "iconsax-react-native";
import React, { useEffect, useState } from "react";
import SocialLogin from "../components/SocialLogin";
import { LoadingModal } from "@/modals";
import authenticationAPI from "@/apis/authApi";
import { Validate } from "@/utils/validate";
import { useDispatch } from "react-redux";
import { addAuth } from "@/stores/reducers/authReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { stringify } from "query-string/base";
const initValue = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpScreen = () => {
  const [values, setValues] = useState(initValue);
  const [isRemember, setIsRemember] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    if (values.email || values.password) {
      setErrorMsg("");
    }
  }, [values.email, values.password]);
  const handleChangValue = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  };
  const handleRegister = async () => {
    const { email, password, confirmPassword } = values;
    const emailValidation = Validate.email(email);
    const passwordValidation = Validate.Password(password);
    if (email && password && confirmPassword) {
      if (emailValidation) {
        setErrorMsg("");
        if (passwordValidation) {
          setErrorMsg("");
          if (confirmPassword === password) {
            setErrorMsg("");
            try {
              setIsLoading(true);

              const res = await authenticationAPI.HandleAuthentication(
                "/register",
                {
                  fullName: values.username,
                  email,
                  password,
                },
                "post"
              );

              dispatch(addAuth(res.data));
              await AsyncStorage.setItem("auth", JSON.stringify(res.data));
              setIsLoading(false);
            } catch (error) {
              console.log(error);
              setIsLoading(false);
            }
          } else {
            setErrorMsg("Confirm password is not match");
          }
        } else {
          setErrorMsg("Password must have greater than 6 characters!!");
        }
      } else {
        setErrorMsg("Email is not correct format!!!");
      }
    } else {
      setErrorMsg("Please enter all fields!");
    }
  };

  return (
    <>
      <ContainerComponent isScroll isImageBackground back>
        {/* Sign in input Section */}
        <SectionComponent>
          <TextComponent title text={COMMON.SIGNUP} />
          <SpaceComponent height={21} width={21} />
          <InputComponent
            value={values.username}
            onChange={(value) => handleChangValue("username", value)}
            placeholder="Full Name"
            allowClear
            affix={<Profile size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.email}
            onChange={(value) => handleChangValue("email", value)}
            placeholder="Email"
            allowClear
            affix={<Sms size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.password}
            onChange={(val) => handleChangValue("password", val)}
            placeholder="Password"
            allowClear
            isPassword
            affix={<Lock size={22} color={appColors.gray} />}
          />
          <InputComponent
            value={values.confirmPassword}
            onChange={(val) => handleChangValue("confirmPassword", val)}
            placeholder="Confirm Password"
            allowClear
            isPassword
            affix={<Lock size={22} color={appColors.gray} />}
          />
          {/* Remember me & Forgot Password */}
        </SectionComponent>
        {errorMsg && (
          <SectionComponent>
            <TextComponent text={errorMsg} color={appColors.danger} />
          </SectionComponent>
        )}
        <SpaceComponent height={16} />
        {/* SIGN IN Button */}
        <SectionComponent>
          <ButtonComponent
            text="SIGN UP"
            type="primary"
            onPress={handleRegister}
          />
        </SectionComponent>
        {/* Social Login */}
        <SocialLogin />
        {/* navigate Sign up */}
        <SectionComponent>
          <RowComponents justify="center">
            <TextComponent text={COMMON.HAVEANACCOUNT} />
            <ButtonComponent
              text={COMMON.SIGNIN}
              type="link"
              onPress={() => {
                navigation.navigate("Login");
              }}
            />
          </RowComponents>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>
  );
};

export default SignUpScreen;
