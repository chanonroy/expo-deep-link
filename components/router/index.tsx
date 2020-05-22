import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "../screens";
import About from "../screens/about";
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history"

const history = createBrowserHistory();

/**
 * Implementation using react-router-native
 */
const AppRouter = () => {
    return (
      <Router history={history}>
        <View style={styles.container}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </View>
      </Router>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
});

export default AppRouter;
