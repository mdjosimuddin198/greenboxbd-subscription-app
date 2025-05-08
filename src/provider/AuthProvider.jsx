import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [logedInuser, setLogedInUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const creatAccount = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setLogedInUser(user);
    });
    return () => unsubscribe();
  }, []);

  // logout

  const logOutUser = () => {
    return signOut(auth);
  };

  // update user
  const updateUser = (userData) => {
    updateProfile(auth.currentUser, userData);
  };

  const handlegoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const authData = {
    creatAccount,
    loginUser,
    logedInuser,
    setLogedInUser,
    logOutUser,
    updateUser,
    handlegoogle,
    setLoading,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
