import React from "react";

type AuthContextType = {
  user: boolean;
  signIn: () => void;
};

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
