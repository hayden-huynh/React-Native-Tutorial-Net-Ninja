import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./homeStack";
import AboutNavigator from "./aboutStack";

const RootDrawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <RootDrawer.Navigator
    initialRouteName="HomeStack"
    screenOptions={{
      // When a Stack Navigator is nested inside a Drawer Navigator, the header of the Drawer will be shown on top of that of the Stack. The reason is that parent Navigator is rendered on top of child Navigator
      // To show only the header of the Stack, we need to hide the header of the Drawer using headerShown
      headerShown: false,
    }}
  >
    <RootDrawer.Screen name="HomeStack" component={HomeNavigator} />
    <RootDrawer.Screen name="AboutStack" component={AboutNavigator} />
  </RootDrawer.Navigator>
);

// Because now the Drawer is the top root navigator, it will be the one wrapped inside the NavigationContainer
// Only the root Navigator needs to be wrapped inside NavigationContainer and then put into a root component like App.js
const AppNavigator = () => (
  <NavigationContainer>
    <DrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
