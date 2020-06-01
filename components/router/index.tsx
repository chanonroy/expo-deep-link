import 'react-native-gesture-handler';
import * as React from 'react';
import { Text } from "react-native"
import { Linking } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens';
import ProfileScreen from '../screens/profile';
import SignInScreen from '../screens/sign-in';
import SignUpScreen from '../screens/sign-up';

const Stack = createStackNavigator();

const prefix = Linking.makeUrl('/');

function AppRouter() {
  const linking = {
    prefixes: [prefix],
    config: {
      Home: '',
      Profile: 'profile',
      SignIn: 'sign-in',
      SignUp: 'sign-up'
    },
  };

  const isSignedIn = false

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        {isSignedIn ?
            <>
              <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
              <Stack.Screen name="Profile" options={{ title: 'Profile' }} component={ProfileScreen} />
              
            </>
          :
            <>
              <Stack.Screen name="SignIn" options={{ title: 'Sign In' }} component={SignInScreen} />
              <Stack.Screen name="SignUp" options={{ title: 'Sign Up' }} component={SignUpScreen} />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
