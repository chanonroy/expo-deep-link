import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Link } from "react-router-dom"

const styles = StyleSheet.create({
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 40,
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
      <View style={styles.navItem}>
        <Link to="/" >
          <Text>HOME</Text>
        </Link>
      </View>
      <View style={styles.navItem}>
        <Link to="/about">
          <Text>ABOUT</Text>
        </Link>
      </View>
    </View>
  )
}

export default Navigation
