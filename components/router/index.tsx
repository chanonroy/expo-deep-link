import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking } from 'expo';
import * as React from 'react';
import { Text } from "react-native";
import 'react-native-gesture-handler';
import HomeScreen from '../screens';
import ProfileScreen from '../screens/profile';
import SignInScreen from '../screens/sign-in';
import { AuthContext } from '../hooks/useAuthContext';

const Stack = createStackNavigator();

const prefix = Linking.makeUrl('/');

interface AuthState {
  isLoading: boolean
  userToken: null | string
}

const defaultAuthState: AuthState = {
  isLoading: true,
  userToken: null
}

function AppRouter() {
  const [authState, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    defaultAuthState
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authActions = React.useMemo(
    () => ({
      signIn: async ({ token }: { token: string }) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        try {
          await AsyncStorage.setItem('userToken', token);
        } catch (e) {
          // Restoring token failed
        }

        dispatch({ type: 'SIGN_IN', token });
      },
      signUp: async (data: any) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          // Restoring token failed
        }

        dispatch({ type: 'SIGN_OUT' })
      },
    }),
    []
  );

  // For Deep Linking
  const linking = {
    prefixes: [prefix],
    config: {
      Home: '',
      Profile: 'profile',
      SignIn: 'sign-in',
    },
  };

  return (
    <AuthContext.Provider value={authActions}>
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
    </AuthContext.Provider>
  );
}

export default AppRouter;
