import { useMemo, useState } from "react";

import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const signIn = () => {
    setUser(!user);
  };

  const contextValue = useMemo(
    () => ({
      signIn: signIn,
      user: user,
    }),
    [user, signIn],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
