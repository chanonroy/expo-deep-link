import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { AuthContext } from '../hooks/useAuthContext';

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
});

const SignInScreen = () => {
  const navigation = useNavigation();

  const { signIn } = React.useContext(AuthContext);

  const handleLogin = async () => {
    // 1. fetch from graphql

    // 2. signIn action to set token
    await signIn({ token: 'dummy-token' })
  }

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the SignIn screen
      </Text>
      <View style={{ width: "200px", marginBottom: 10 }}>
        <Button onPress={() => handleLogin()} title="Simulate Sign In" />
      </View>
    </View>
  )
}

export default SignInScreen
