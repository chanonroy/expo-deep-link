import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/use-auth";

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
});

const HomeScreen = () => {
  const navigation = useNavigation()
  const { signOut } = useAuth()

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the HOME screen
      </Text>
      <View style={{ width: "200px", marginBottom: 10 }}>
        <Button onPress={() => navigation.navigate('Profile')} title="profile" />
      </View>
      <View style={{ width: "200px", }}>
        <Button onPress={() => signOut()} title="Sign Out" />
      </View>
    </View>
  )
}

export default HomeScreen

