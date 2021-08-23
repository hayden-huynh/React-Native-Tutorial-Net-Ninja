import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createStackNavigator();

const AboutNavigator = () => (
  <Stack.Navigator
    initialRouteName="About"
    screenOptions={{
      header: (props) => (
        <Header 
          navigation={props.navigation} 
          title="About GameZone" 
        />
      ),
    }}
  >
    <Stack.Screen name="About" component={About} />
  </Stack.Navigator>
);

export default AboutNavigator;
