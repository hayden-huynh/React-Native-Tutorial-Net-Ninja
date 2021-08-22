import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  // There are many types of Navigator. Stack Navigator is one of them
  // The Navigator component wraps all screens that are within it
  // Set a child component as a screen using the Screen property of the Navigator
  <Stack.Navigator initialRouteName="Home">
    {/* Each Screen must have at least two props: name & component */}
    {/* name is the screen identifier and also the screen title */}
    {/* component is the React component to be rendered as a screen */}
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
);

export const AppNavigator = () => (
  // NavigationContainer should wrap all components below the top root App component
  <NavigationContainer>
    <HomeNavigator />
  </NavigationContainer>
);
