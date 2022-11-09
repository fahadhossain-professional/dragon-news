import {
  createUserWithEmailAndPassword,
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut
} from 'firebase/auth';
import {
  createContext, useEffect, useState
} from 'react';
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const loginGoogleProvider = (provider) => {
    return signInWithPopup(auth, provider);
  };

  const signUpEmailPasswordBaseUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInEmailPasswordBaseUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const userSignOut = () => {
    return signOut(auth)
      .then(() => {
      // Sign-out successful.
      // eslint-disable-next-line no-unused-vars
      }).catch((error) => {
      // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const authInfo = {
    user, loginGoogleProvider, signUpEmailPasswordBaseUser, signInEmailPasswordBaseUser, userSignOut
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
