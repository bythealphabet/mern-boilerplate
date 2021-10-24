import React, { useState, useEffect, createContext, ReactNode } from "react";
import authFile from "./auth-helper";

const { isAuthenticated, authenticate, signout, updateAuthUser } = authFile;

export const AuthContext = createContext(isAuthenticated);

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(isAuthenticated);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setAuth(isAuthenticated);
  }, [update]);

  {
    let value;
    value = {
      auth,
      signInHandler,
      signOutHandler,
      updateUser,
    };

    return (
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
  }

  ////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  async function updateUser(data) {
    await updateAuthUser(data);

    await setAuth((prev) => {
      console.log("prev", prev);
      prev.user = data;
      return prev;
    });

    await setUpdate((prev) => !prev);

    return;
  }

  async function signInHandler(data) {
    console.log("data", data);
    await authenticate(data);
    await setAuth(data);

    return;
  }

  function signOutHandler() {
    signout();
    setAuth(false);
  }
}

export default AuthProvider;
