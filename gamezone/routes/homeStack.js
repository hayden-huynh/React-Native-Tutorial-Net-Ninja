import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={
      {
        headerStyle: {
          backgroundColor: "#333"
        },
        headerTitleAlign: "center",
        headerTintColor: "white",
      }
    }
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
);

export default HomeNavigator;
