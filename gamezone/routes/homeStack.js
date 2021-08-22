import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    // For options that should be applied to all Screens inside this Navigator, use the screenOptions prop of the Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#333",
      },
      headerTintColor: "white",
      headerTitleAlign: "center"
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      // Each Screen component can have a options prop to configure the many things, especially the header bar on that screen
      // Options specified here in specific Screen will override those set in the screenOptions prop of the Navigator
      options={{
        title: "GameZone",
      }}
    />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
