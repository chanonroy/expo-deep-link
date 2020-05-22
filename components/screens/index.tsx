import React from "react"
import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20
  },
});

const Home = () => <Text style={styles.header}>
  This is the home screen
</Text>;

export default Home
