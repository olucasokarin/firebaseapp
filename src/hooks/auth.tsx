import React, {
  useEffect,
  createContext,
  useCallback,
  useState,
  useContext,
} from 'react';

import auth from '@react-native-firebase/auth'


interface User {
  uid: string;
  // displayName: string;
  email: string;
}



interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  initializing: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signUp(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth mus be used within an AuthProvider');

  return context;
}

const AuthProvider: React.FC = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState({} as User);

  function onAuthStateChanged(user: any){
    setUser(user);
    if (initializing) setInitializing(false)
  }


  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  // if(initializing) return null;

  const signIn = useCallback(async ({ email, password }) => {
    console.log('oi');


    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log('succsses'))
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
  }, []);

  const signUp = useCallback(async ({ email, password }) => {
    console.log('oi');


    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => console.log('succsses'))
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
  }, []);

  const signOut = useCallback(async () => {
    auth()
    .signOut()
    .then(() => console.log('success'));

  }, []);

  return (
    <AuthContext.Provider value={{ user, initializing, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
