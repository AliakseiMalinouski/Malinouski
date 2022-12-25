import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

export const Auth = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
        }   
        catch(error) {
            alert(error.message);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        }   
        catch(error) {
            alert(error.message);
        }
    }

    const logout = async () => {
        signOut(auth);
    }

    const readRegisterEmail = (eo) => {
        setRegisterEmail(eo.target.value);
    }

    const readRegisterPassword = (eo) => {
        setRegisterPassword(eo.target.value);
    }

    const readLoginEmail = (eo) => {
        setLoginEmail(eo.target.value);
    }

    const readLoginPassword = (eo) => {
        setLoginPassword(eo.target.value);
    }

    return <div className='WrapperAuth'>
        <div className='Registr'>
            <h3>Registration</h3>
            <input type='text' placeholder='email' value={registerEmail} onChange={readRegisterEmail} />
            <input type='text' placeholder='password' value={registerPassword} onChange={readRegisterPassword}/>
            <button onClick={register}>Registration</button>
        </div>
        <div className='Login'>
            <h3>Login</h3>
            <input type='text' placeholder='email' value={loginEmail} onChange={readLoginEmail}/>
            <input type='text' placeholder='password' value={loginPassword} onChange={readLoginPassword} />
            <button onClick={login}>Login</button>
        </div>

        <h3>User logged in: {user?.email}</h3>
        <button onClick={logout}>Sign out</button>
    </div>
}