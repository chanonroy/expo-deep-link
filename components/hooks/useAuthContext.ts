import React from "react"

interface AuthActions {
  signIn: ({ token }: { token: string }) => Promise<void>;
  signUp: (data: any) => Promise<void>;
  signOut: () => void;
}

export const AuthContext = React.createContext<AuthActions | null>(null);
