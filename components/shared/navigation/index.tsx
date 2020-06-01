import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
    color: "red"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  }
});

const Navigation = ({ navigation }: any) => {
  return (
    <View style={styles.nav}>
      <Button onPress={() => navigation.navigate('Home')} title="home" />
      <Button onPress={() => navigation.navigate('About')} title="about" />
    </View>
  )
}

export default Navigation
