import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";

const Home = () => <Text style={styles.header}>Home</Text>;

const About = () => <Text style={styles.header}>About</Text>;

/**
 * Implementation using react-router-native
 */
const One = () => {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>HOME</Text>
            </Link>
            <Link to="/about" underlayColor="#f0f4f7" style={styles.navItem}>
              <Text>ABOUT</Text>
            </Link>
          </View>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </View>
      </NativeRouter>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    textAlign: "center",
    fontSize: 20
  },
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
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default One;
