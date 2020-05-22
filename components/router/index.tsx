import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from "react-native"
import { Linking } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens';
import About from '../screens/about';

const Stack = createStackNavigator();

const prefix = Linking.makeUrl('/');

function AppRouter() {
  const linking = {
    prefixes: [prefix],
    config: {
      Home: '/',
      About: '/about',
    },
  };
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ title: 'Overview' }} component={Home} />
        <Stack.Screen name="About" options={{ title: 'Overview' }} component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
