import React from "react"
import { Text, StyleSheet, View, Button } from "react-native"

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
});

const About = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.header}>
        This is the ABOUT screen
      </Text>
      <Button onPress={() => navigation.navigate('Home')} title="home" />
    </View>
  )
}

export default About
