import React from "react"
import { Text, StyleSheet, View } from "react-native"
import Navigation from "../shared/navigation";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
});

const About = () => {
  return (
    <View>
      <Navigation />
      <Text style={styles.header}>
        This is the ABOUT screen
      </Text>
    </View>
  )
}

export default About
