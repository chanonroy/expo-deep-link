import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Navigation from "../shared/navigation";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
});

const Home = () => {
  return (
    <View>
      <Navigation />
      <Text style={styles.header}>
        This is the HOME screen
      </Text>
    </View>
  )
}

export default Home
