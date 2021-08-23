import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const Stack = createStackNavigator();

const AboutNavigator = () => (
  <Stack.Navigator
    initialRouteName="About"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTitleAlign: "center",
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="About"
      component={About}
      options={{
        title: "About GameZone",
      }}
    />
  </Stack.Navigator>
);

export default AboutNavigator;