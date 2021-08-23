import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createStackNavigator();

const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      // Header configurations here now only applies to header of ReviewDetails
      // Custom header follows stylings set in its own stylesheet
      headerStyle: {
        backgroundColor: "#333",
      },
      headerTitleAlign: "center",
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        header: (props) => (
          <Header 
            navigation={props.navigation} 
            title="GameZone" 
          />
        ),
      }}
    />
    <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
  </Stack.Navigator>
);

export default HomeNavigator;
