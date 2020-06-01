import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
});

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the HOME screen
      </Text>
      <View style={{ width: "200px", }}>
        <Button onPress={() => navigation.navigate('Profile')} title="profile" />
      </View>
    </View>
  )
}

export default HomeScreen

