import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // View is similar to div 
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        {/* Child components do not inherit the styles of their parent */}
        {/* One exception is Text component i.e. child Text components DO inherit styles of their parent Text component */}
        <Text style={styles.boldText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, error. Voluptatum vitae iusto, sed ex tenetur provident voluptate impedit minima! <Text>This part will inherit</Text> </Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, error. Voluptatum vitae iusto, sed ex tenetur provident voluptate impedit minima!</Text>
        <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, error. Voluptatum vitae iusto, sed ex tenetur provident voluptate impedit minima!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: "pink",
    padding: 20,
  },
  boldText: {
    fontWeight: "bold"
  },
  body: {
    backgroundColor: "yellow",
    padding: 20,
    fontWeight: "bold",
  }
});
