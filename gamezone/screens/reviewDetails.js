import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

// Every Screen component of a Navigation Stack also receives a route prop automatically
export default function ReviewDetails({ navigation, route }) {
  const { title, body, rating } = route.params; // Accessing the params parameter of route will give us the data object passed over from the source Screen

  return (
    <View style={globalStyles.container}>
      <Text>{title}</Text>
      <Text>{body}</Text>
      <Text>{rating}</Text>
    </View>
  );
}
