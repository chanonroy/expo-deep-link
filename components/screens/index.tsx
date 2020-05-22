import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
});

const Home = ({ navigation }: any) => {
  return (
    <View>
      <Text style={styles.header}>
        This is the HOME screen
      </Text>
      <Button onPress={() => navigation.push('About')} title="about" />
    </View>
  )
}

export default Home

