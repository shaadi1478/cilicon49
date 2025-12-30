import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile
} from "firebase/auth";
import { auth } from "../../firebase";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Register
  const register = async (name, email, password) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(result.user, {
      displayName: name,
    });
    setUser({ ...result.user, displayName: name });
  };

  // Login
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Google Login ✅ FIXED
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // Logout
  const logout = () => signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    register,
    login,
    googleLogin,
    logout,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
