import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { useNavigation } from '@react-navigation/native';

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

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the SignIn screen
      </Text>
      <View style={{ width: "200px", marginBottom: 10 }}>
        <Button onPress={() => navigation.navigate('SignIn')} title="Go to Sign In" />
      </View>
      <View style={{ width: "200px", }}>
        <Button onPress={() => navigation.navigate('SignUp')} title="Go to Sign Up" />
      </View>
    </View>
  )
}

export default SignInScreen
