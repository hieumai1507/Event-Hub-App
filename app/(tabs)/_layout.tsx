import React from "react";

import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./explore";
import Events from "./Events/index";
import { MENU } from "@/constants/textConstant";
import Map from "./Map/index";
import Profile from "./Profile/index";
import { Platform } from "react-native";
import { appColors } from "@/constants/appColors";
const Tab = createBottomTabNavigator();

export default function TabLayout() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#5669ff",
        tabBarInactiveTintColor: "#d5d7dc",
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 88 : 68,
          justifyContent: "center",
          backgroundColor: appColors.white,
        },

        tabBarIconStyle: {
          marginTop: 8,
        },
      })}
    >
      <Tab.Screen
        name={MENU.EXPLORE}
        component={Explore}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="explore" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={MENU.EVENTS}
        component={Events}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="calendar-month" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={MENU.MAP}
        component={Map}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="map-marker-alt" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={MENU.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
