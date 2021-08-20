import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function App() {
  const [people, setPeople] = useState([
    { name: "hayden", id: "1" },
    { name: "yoshi", id: "2" },
    { name: "mario", id: "3" },
    { name: "luigi", id: "4" },
    { name: "peach", id: "5" },
    { name: "toad", id: "6" },
    { name: "bowser", id: "7" },
  ]);

  return (
    <View style={styles.container}>
      {/* FlatList are scrollable by default */}
      <FlatList
        data={people}
        keyExtractor={(item) => item.id} // If the elements don't have a "key" property but some other property that can act like a key, we can tell FlatList to use that property instead of using keyExtractor prop
        numColumns={2} // Number of columns to split the list up into
        renderItem={({item}) => {
          // Need to destructure to get the "item" property, which is the actual element in the array we assign to the "data" prop
          // FlatList automatically looks for the "key" property in each of the array element so we don't have to set them manually
          return <Text style={styles.item}>{item.name}</Text>
        }}
      />

      {/* FlatList renders an element when it should be visible on the screen, whereas ScrollView always renders everything even when out of the screen, which may be inefficient and not suitable for long arrays */}
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24
  },
});
