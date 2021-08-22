import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

// Any component that is set as a Screen in the Navigation Stack will automatically receive the "navigation" prop
export default function Home({navigation}) {
  const pressHandler = () => {
    navigation.navigate("ReviewDetails"); // The param must be same as the name prop set to Screen components inside Navigation Stack

    // navigation.push("ReviewDetails"); // push does the same job as navigate except that navigate will go to a Screen if it already exists in the stack, whereare push always adds another new Screen to the top of stack regardless of it existing or not
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="Go to review details" onPress={pressHandler}/>
    </View>
  );
}
