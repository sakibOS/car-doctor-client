import { createUserWithEmailAndPassword, FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";


export const AuthContext=createContext();
const googleProvider=new GoogleAuthProvider();
const gitHubAuthProvider=new GithubAuthProvider();
const facebookAuthProvider=new FacebookAuthProvider();
const AuthProviders = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    //createUser=>
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    };
    //signIn=>
        const signIn=(email,password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth,email,password)
        }
        //google LogIn-->
    const googleLogIn=()=>{
        return signInWithPopup(auth,googleProvider);
    };
    //github LogIn-->
    const githubLogIn=()=>{
        return signInWithPopup(auth,gitHubAuthProvider);
    };
    //facebook logIn-->
    const facebookLogIn=()=>{
        return signInWithPopup(auth,facebookAuthProvider)
    };
    
        //logOut-->
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    };
        useEffect(()=>{
            const unSubscribe=onAuthStateChanged(auth,currentUser=>{
                setUser(currentUser);
                setLoading(false);
            })
            return unSubscribe;
        },[])
    const authInfo={user, loading, createUser, signIn, googleLogIn, githubLogIn, facebookLogIn, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;