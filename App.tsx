import React from "react";
import AppRouter from "./components/router";
import { AuthProvider } from "./components/hooks/use-auth";

class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    );
  }
}

export default App;
