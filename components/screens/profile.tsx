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

const ProfileScreen = ({ navigation }: any) => {
  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={styles.header}>
        This is the Profile screen
      </Text>
      <View style={{ width: "200px", }}>
        <Button onPress={() => navigation.navigate('Home')} title="home" />
      </View>
    </View>
  )
}

export default ProfileScreen
