import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'expo';
import * as React from 'react';
import { Text } from "react-native";
import 'react-native-gesture-handler';
import useAuth from '../hooks/use-auth';
import HomeScreen from '../screens';
import ProfileScreen from '../screens/profile';
import SignInScreen from '../screens/sign-in';

const Stack = createStackNavigator();

const prefix = Linking.makeUrl('/');

const AppRouter = () => {
  const { authState, restoreToken } = useAuth()

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      restoreToken();
    };

    bootstrapAsync();
  }, []);

  // For Deep Linking
  const linking = {
    prefixes: [prefix],
    config: {
      Home: '',
      Profile: 'profile',
      SignIn: 'sign-in',
    },
  };

  const { isLoading } = authState

  if (isLoading) return null

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        {authState.userToken ?
            <>
              <Stack.Screen name="Home" options={{ title: 'Home' }} component={HomeScreen} />
              <Stack.Screen name="Profile" options={{ title: 'Profile' }} component={ProfileScreen} />
              
            </>
          :
            <>
              <Stack.Screen name="SignIn" options={{ title: 'Sign In' }} component={SignInScreen} />
            </>
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRouter;
