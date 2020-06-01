import React from "react"
import { Text, StyleSheet, View, Button } from "react-native"
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the SignUp screen
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

export default SignUpScreen
