import { firebase, fireAuth } from "../firebase";

function useFireAuth() {
  const provider = new firebase.auth.GoogleAuthProvider();

  const signIn = () => fireAuth.signInWithRedirect(provider);

  const getAuthResult = () => fireAuth.getRedirectResult();

  const onAuthChange = (callback: (a: typeof fireAuth.currentUser) => void) =>
    fireAuth.onAuthStateChanged(callback);

  const getCurrentUser = () => fireAuth.currentUser;

  const signOut = () => fireAuth.signOut();

  return { signIn, getAuthResult, onAuthChange, getCurrentUser, signOut };
}

export { useFireAuth };
