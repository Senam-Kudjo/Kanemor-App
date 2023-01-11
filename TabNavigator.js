import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Btabs_screens/home";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import Category from "./Btabs_screens/category";
import Favourites from "./Btabs_screens/favourites";
const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: false,
        tabBarActiveTintColor: "white",
        tabBarActiveBackgroundColor: "grey",
        tabBarStyle: {
          backgroundColor: "black",
          top: 0,
          height: 55,
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="home" color="white" size={27} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcons name="list" color="white" size={27} />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favourites"
        component={Favourites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <EntypoIcon name="heart" color="red" size={30} />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    flexDirection: "column",
    alignSelf: "center",
  },
});
