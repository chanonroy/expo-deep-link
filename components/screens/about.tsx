import React from "react"
import { Text, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20
  },
});

const About = () => <Text style={styles.header}>
  This is the about section
</Text>;

export default About
