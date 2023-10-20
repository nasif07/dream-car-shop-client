
import { createContext } from "react";
import app from "../config/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const auth = getAuth(app)


    const emailPasswordSignIn = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const emailPasswordLogIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }




    const AuthInfo = {
        emailPasswordSignIn,
        googleSignIn,
        emailPasswordLogIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;