import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Sandbox() {
  return (
    <View style={styles.container}>
      {/* All children of a flex component (View in this case) will automatically become flex items */}
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>two</Text>
      <Text style={styles.boxThree}>three</Text>
      <Text style={styles.boxFour}>four</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1, // Add flex to the top-level wrapping View will make it stretch to fill the whole height of the screen. Child components inside a flex component will also take up the whole screen height
    flexDirection: "row", // flexDirection decides the main axis and the cross axis
    justifyContent: "space-evenly", // justifyContent positions the children along the main axis
    alignItems: "center", // alignItems positions the children along the cross axis
    paddingTop: 40,
    backgroundColor: "#ddd",
  },
  boxOne: {
    flex: 1, // Setting flex for a child component will decide the ratio of space it will take up compared to those ratios of other children
    backgroundColor: "violet",
    padding: 10,
  },
  boxTwo: {
    flex: 2, // Takes twice as much space
    backgroundColor: "gold",
    padding: 20,
  },
  boxThree: {
    flex: 1,
    backgroundColor: "coral",
    padding: 30,
  },
  boxFour: {
    flex: 3, // Takes three times as much space
    backgroundColor: "skyblue",
    padding: 40,
  },
});
