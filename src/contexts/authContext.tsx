import { createContext } from "react";

export type SignInTypes = {
  email: string;
  password: string;
};

export type SignUpTypes = {
  name: string;
  email: string;
  password: string;
};

type AuthContextTypes = {
  signIn: (data: SignInTypes) => Promise<boolean | void>;
  signUp: (data: SignUpTypes) => Promise<boolean | void>;
  signOut: () => void;
  authUserID: string;
  isLoading: boolean;
};

export const AuthContext = createContext({});
