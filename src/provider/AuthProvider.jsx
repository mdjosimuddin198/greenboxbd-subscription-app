import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext();
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

  const authData = {
    creatAccount,
    loginUser,
    logedInuser,
    setLogedInUser,
    logOutUser,
    updateUser,
    setLoading,
    loading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
