import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnboardingScreen from "./screens/onb";
import Loading from "./screens/loading";
import WelcomeScreeen from "./screens/WelcomeScreen";
import TabNavigator from "./TabNavigator";
import Home from "./Btabs_screens/home";
import Category from "./Btabs_screens/category";
import Favourites from "./Btabs_screens/favourites";
import AgricultureBooks from "./subCategoryScreens/agricultureBooks";
import CsBooks from "./subCategoryScreens/csBooks";
import Ab1 from "./DetailBooks/ab1";
import Cs1 from "./DetailBooks/cs1";
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Onb" component={OnboardingScreen} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreeen} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Favourites" component={Favourites} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="AgricultureBooks" component={AgricultureBooks} />
        <Stack.Screen name="CsBooks" component={CsBooks} />
        <Stack.Screen name="Ab1" component={Ab1} />
        <Stack.Screen name="Cs1" component={Cs1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
