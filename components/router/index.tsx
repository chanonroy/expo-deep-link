import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import Home from "../screens";
import About from "../screens/about";
import Navigation from "../shared/navigation";

/**
 * Implementation using react-router-native
 */
const AppRouter = () => {
    return (
      <NativeRouter>
        <View style={styles.container}>
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
});

export default AppRouter;
