import React from "react";
import { StyleSheet, View } from "react-native";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";

/**
 * Implementation using react-router
 */
const AppRouter = () => {
    console.log(routes);
    return (
      <Router>
        <View style={styles.container}>
          <Switch>
            {routes.map((route) => {
              return (
                <Route exact={route.exact} path={route.path} component={route.component} />
              )
            })}
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
