import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Link } from "react-router-native"

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

const Navigation = () => {
  return (
    <View style={styles.nav}>
      <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>HOME</Text>
      </Link>
      <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
        <Text>ABOUT</Text>
      </Link>
    </View>
  )
}

export default Navigation
