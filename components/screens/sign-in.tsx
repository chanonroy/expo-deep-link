import React from "react"
import { Text, StyleSheet, View, Button } from "react-native"

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
});

const SignInScreen = ({ navigation }: any) => {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the SignIn screen
      </Text>
      <View style={{ width: "200px", }}>
        <Button onPress={() => console.log('sign in')} title="Sign In" />
      </View>
    </View>
  )
}

export default SignInScreen
