import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
    OAuthProvider,
    RecaptchaVerifier,
    signInWithPhoneNumber,
    signOut as firebaseSignOut,
    onAuthStateChanged,
    updateProfile,
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from './firebaseConfig';

const AuthContext = createContext(null);

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used within AuthProvider');
    return ctx;
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // ── Persist user profile to Firestore ─────────────────────────
    // Uses merge:true so it never overwrites existing data.
    // Wrapped in try/catch — auth always succeeds even if Firestore
    // is offline or not yet enabled in the Firebase console.
    const persistUser = async (user) => {
        if (!user) return;
        try {
            const ref = doc(db, 'users', user.uid);
            await setDoc(ref, {
                uid:      user.uid,
                name:     user.displayName || '',
                email:    user.email       || '',
                phone:    user.phoneNumber || '',
                photoURL: user.photoURL    || '',
                lastSeen: serverTimestamp(),
            }, { merge: true });   // merge:true = only create/update, never overwrite
        } catch (err) {
            // Firestore offline or rules blocking — log silently, don't crash auth
            console.warn('[Elivery] Firestore persistUser skipped:', err.message);
        }
    };

    // ── Google Sign-In ─────────────────────────────────────────────
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        provider.addScope('email');
        provider.addScope('profile');
        const result = await signInWithPopup(auth, provider);
        await persistUser(result.user);
        return result.user;
    };

    // ── Microsoft Sign-In ──────────────────────────────────────────
    const signInWithMicrosoft = async () => {
        const provider = new OAuthProvider('microsoft.com');
        provider.addScope('openid');
        provider.addScope('profile');
        provider.addScope('email');
        const result = await signInWithPopup(auth, provider);
        await persistUser(result.user);
        return result.user;
    };

    // ── Email / Password ───────────────────────────────────────────
    const signUpWithEmail = async (email, password, displayName) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        if (displayName) {
            await updateProfile(result.user, { displayName });
        }
        await persistUser(result.user);
        return result.user;
    };

    const signInWithEmail = async (email, password) => {
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result.user;
    };

    // ── Phone OTP: Step 1 — send OTP ──────────────────────────────
    const setupRecaptcha = (containerId) => {
        if (!window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, containerId, {
                size: 'invisible',
                callback: () => {},
            });
        }
        return window.recaptchaVerifier;
    };

    const sendPhoneOtp = async (phoneNumber, containerId) => {
        const recaptcha = setupRecaptcha(containerId);
        const confirmation = await signInWithPhoneNumber(auth, phoneNumber, recaptcha);
        window.confirmationResult = confirmation;
        return confirmation;
    };

    // ── Phone OTP: Step 2 — verify OTP ────────────────────────────
    const verifyPhoneOtp = async (otp) => {
        if (!window.confirmationResult) throw new Error('No OTP sent yet');
        const result = await window.confirmationResult.confirm(otp);
        await persistUser(result.user);
        return result.user;
    };

    // ── Sign Out ───────────────────────────────────────────────────
    const signOut = async () => {
        await firebaseSignOut(auth);
        window.recaptchaVerifier = null;
        window.confirmationResult = null;
    };

    // ── Auth state listener ────────────────────────────────────────
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsub;
    }, []);

    const value = {
        currentUser,
        loading,
        signInWithGoogle,
        signInWithMicrosoft,
        signUpWithEmail,
        signInWithEmail,
        sendPhoneOtp,
        verifyPhoneOtp,
        signOut,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
