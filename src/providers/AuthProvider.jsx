import { createContext, useEffect, useState } from 'react';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signUpUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logoutUser = () => {
        setLoading(true);
        return signOut(auth);
    }
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateUser = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            const userEmail = currentUser?.email || user?.email;
            const loggedInUser = { email: userEmail };
            setUser(currentUser);
            setLoading(false);
            if (currentUser) {
                axios.post(`${import.meta.env.VITE_SERVER}/auth/jwt`, loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .error(err => {
                        console.error(err);
                        toast.error(err.message);
                    })
            } else {
                axios.post(`${import.meta.env.VITE_SERVER}/logout`, loggedInUser, { withCredentials: true })
                    .then(res => {
                        console.log(res.data);
                    })
                    .error(err => {
                        console.error(err);
                        toast.error(err.message);
                    })
            }
        });
        return () => {
            return unsubscribe()
        };
    }, [user?.email]);

    const authInfo = {
        user,
        signUpUser,
        loginUser,
        logoutUser,
        googleSignIn,
        loading,
        updateUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
