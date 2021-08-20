import React from "react";
import { fireAuth } from "@/firebase";
import { useFireAuth } from "./useFireAuth";

function useAuth() {
  const { signIn, getAuthResult, onAuthChange, getCurrentUser, signOut } =
    useFireAuth();

  const getSignInResult = async () => {
    return await getAuthResult()
      .then((result) => ({
        success: true,
        message: "Sign In success.",
        data: {
          credential: result.credential,
          user: result.user,
          userInfo: result.additionalUserInfo,
        },
        error: null,
      }))
      .catch((err) => ({
        success: false,
        message: "Sign In failed!",
        data: null,
        error: {
          code: err.code,
          message: err.message,
          credential: err.credential,
          email: err.email,
        },
      }));
  };

  const authStateListener = (
    callback: (a: typeof fireAuth.currentUser) => void
  ) => {
    return onAuthChange(callback);
  };

  return {
    signIn,
    getCurrentUser,
    signOut,
    // custom hooks
    getSignInResult,
    authStateListener,
  };
}

function useAuthSubscriber(callback?: () => void) {
  const { authStateListener, getCurrentUser } = useAuth();

  const [user, setUser] = React.useState(() => getCurrentUser());

  React.useEffect(() => {
    const unsubscribe = authStateListener((u) => setUser(u));
    callback && callback();
    return () => unsubscribe();
  }, [authStateListener, callback]);

  return user;
}

export { useAuth, useAuthSubscriber };
