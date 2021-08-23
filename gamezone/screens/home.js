import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalOpen, setModelOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <StatusBar translucent={true} style="light" backgroundColor="black" />

      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modelContent}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setModelOpen(false)}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
          />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        onPress={() => setModelOpen(true)}
        style={styles.modalToggle}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modelContent: {
    flex: 1,
  }
});
