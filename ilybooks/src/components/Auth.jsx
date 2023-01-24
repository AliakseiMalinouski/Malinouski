import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase-config";
import {signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword} from 'firebase/auth';
import { removeUser } from "../Redux/userSlice";
import { useDispatch } from "react-redux";


export const Auth = () => {

    let dispatch = useDispatch();

    const [regEmail, setRegEmail] = useState("");
    const [regPass, setRegPass] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [user, setUser] = useState(null);
    const [isActive, setIsActive] = useState(true);
    const [isActiveLogin, setIsActiveLogin] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser?.email);
        })
    }, []);

    const emailRegHandle = (EO) => {
        validationRegestrationProcess(EO.target.value, regPass, EO.target.name);
        setRegEmail(EO.target.value);
    }

    const emailPassHandle = (EO) => {
        validationRegestrationProcess(EO.target.value, regEmail, EO.target.name);
        setRegPass(EO.target.value);
    }

    const loginEmailHandle = (EO) => {
        validationLoginProcess(EO.target.value, loginPass, EO.target.name);
        setLoginEmail(EO.target.value);
    }

    const loginPassHandle = (EO) => {
        validationLoginProcess(EO.target.value, loginEmail, EO.target.name);
        setLoginPass(EO.target.value);
    }

    const createNewUser = async() => {
        try {
            await createUserWithEmailAndPassword(auth, regEmail, regPass);
        }
        catch {
            alert("Error with regestration user, please, try again");
        }
    }

    const signInUser = async () => {
        try {
            await signInWithEmailAndPassword(auth, loginEmail, loginPass);
        }
        catch {
            alert("Error with regestration user, please, try again");
        }
    }

    const signOutUser = () => {
        signOut(auth);
        dispatch(removeUser());
    }

    const validationRegestrationProcess = (emailValue, passwordValue) => {
        if(!emailValue.length || ! passwordValue.length) {
            setIsActive(true);
        }
        else {
            setIsActive(false);
        }
    }

    const validationLoginProcess = (emailValue, passwordValue) => {
        if(!emailValue.length || ! passwordValue.length) {
            setIsActiveLogin(true);
        }
        else {
            setIsActiveLogin(false);
        }
    }

    return (
        <div className="Auth">
            <div className="Regestration">
                <input type='text' name="emailRegestration" placeholder='email' value={regEmail} onChange={emailRegHandle}/>
                <input type='text' name="passwordRegestration" placeholder="password" value={regPass} onChange={emailPassHandle}/>
                <button type="button" disabled={isActive} onClick={createNewUser}>Create user</button>
            </div>  

            <div className="Login">
                <input type='text' name="emailLogin" placeholder='email' value={loginEmail} onChange={loginEmailHandle}/>
                <input type='text' name="passwordLogin" placeholder="password" value={loginPass} onChange={loginPassHandle}/>
                <button type="button" disabled={isActiveLogin} onClick={signInUser}>Sign in</button>
            </div>

            {
                user 
                ?
                <div className="SignOut">
                    <button type="button" onClick={signOutUser}>Sign out</button>
            </div>
                :
                null
            }

            <div className="Logged">
                {user}
            </div>
        </div>
    )
}