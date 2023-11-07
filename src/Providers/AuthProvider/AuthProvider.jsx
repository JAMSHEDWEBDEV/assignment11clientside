import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebaseConfig/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

 const [user,setUser] = useState([]);
 const [loading,setLoading] = useState(true);

//  create user start 
 const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
 }

//  signIn user start 
 const signInUser = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
 }

//  auth state changer observer start 
 
  useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        console.log('auth observer is running ok', currentUser);
        setLoading(false);
      })
      return ()=>{
         unSubscribe();
      }
  },[])

  const logOut = () =>{
    return signOut(auth);
  }




    const authInFo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInFo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;