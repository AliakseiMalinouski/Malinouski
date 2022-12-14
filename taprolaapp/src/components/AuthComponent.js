import React from 'react';
import { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';

export const Auth = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
        }
        catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {
        await signOut(auth);
    }

    return (
        <div className='WrapperAuth'>
            <div>
                <h3>Register User</h3>
                <input placeholder='email' onChange={(EO) => { setRegisterEmail(EO.target.value) }}  />
                <input placeholder='password' onChange={(EO) => { setRegisterPassword(EO.target.value) }} />
                <button onClick={register}>Create User</button>
            </div>
            <div>
                <h3>Login</h3>
                <input placeholder='email' onChange={(EO) => { setLoginEmail(EO.target.value) }}  />
                <input placeholder='password' onChange={(EO) => { setLoginPassword(EO.target.value) }} />
                <button onClick={login}>Login</button>
            </div>
            <h4>User Logged in: {user?.email}</h4>
            <button onClick={logout}>Sign out</button>
        </div>
    )
}