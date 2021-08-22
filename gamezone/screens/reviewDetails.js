import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({navigation}) {
  const pressHandler = () => {
    navigation.goBack(); // pops the current Screen off the Navigation Stack and returns to the immediately previous Screen in the stack
  }

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="Back to Home screen" onPress={pressHandler}/>
    </View>
  );
}
