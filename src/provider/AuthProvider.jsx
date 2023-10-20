
import { createContext } from "react";
import app from "../config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app)


    const emailPasswordSignIn = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const handleUpdateProfile = (name, profileURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profileURL
        })
    }
    


    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubsCribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log("state change");
            setUser(currentUser);
            setLoading(false);
        });
        return (() => {
            return unsubsCribe();
        })
    },[])




    const AuthInfo = {
        emailPasswordSignIn,
        googleSignIn,
        emailPasswordLogIn,
        user,
        logOut,
        loading,
        handleUpdateProfile

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;