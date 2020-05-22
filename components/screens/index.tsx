import React from "react"
import { View, Text, StyleSheet } from "react-native"
import Navigation from "../shared/navigation";


const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20
  },
});

const Home = () => {
  return (
    <View>
      <Navigation />
      <Text style={styles.header}>
        This is the home screen
      </Text>
    </View>
  )
}

export default Home
