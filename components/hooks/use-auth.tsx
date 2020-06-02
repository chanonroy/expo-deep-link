import React, { createContext, useReducer, useMemo, useContext } from "react"
import AsyncStorage from '@react-native-community/async-storage';

interface AuthState {
  isLoading: boolean
  userToken: null | string
}

const defaultAuthState: AuthState = {
  isLoading: true,
  userToken: null
}

interface AuthContextType {
  dispatch: any;
  authState: AuthState;
  signIn: ({ token }: { token: string }) => Promise<void>;
  signOut: () => Promise<void>;
}

const reducer = (prevState: any, action: any) => {
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
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        ...prevState,
        userToken: null,
      };
  }
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(reducer, defaultAuthState);

  const authActions = useMemo(
    () => ({
      signIn: async ({ token }: { token: string }) => {
        // Set the user token
        await AsyncStorage.setItem('userToken', token);
       
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: async () => {
        // Remove user token
        await AsyncStorage.removeItem('userToken');
       
        dispatch({ type: 'SIGN_OUT' })
      },
    }),
    []
  );

  return (
    <AuthContext.Provider value={{ authState, dispatch, ...authActions }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth
