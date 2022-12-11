import React from "react";
import { useState } from "react";
import { async } from "regenerator-runtime";
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../firebase-config';

export const Auth = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        }
        catch (error) {
            console.log(error.message);
        }
    }
    
    const login = async () => { }
    
    const logout = async () => { }
    
    console.log(registerEmail)

    return (
        <div className="WrapperAuth">
            <div>
                <h3>Register</h3>
                <input placeholder="email" value={registerEmail} onChange={(EO) => {setRegisterEmail(EO.target.value)}} /><br/>
                <input placeholder="password" value={registerPassword} onChange={(EO) => {setLoginPassword(EO.target.value)}} /><br/>
                <button onClick={register}>Create user</button>
            </div>
            <div>
                <h3>Login</h3>
                <input placeholder="email" value={loginEmail} onChange={(EO) => {setLoginEmail(EO.target.value)}} /><br/>
                <input placeholder="password" value={loginPassword} onChange={(EO) => {setLoginPassword(EO.target.value)}}/><br />
                <button>Login</button>
            </div>
            <h4>User logged in: </h4>
            <button>Sign out</button>
        </div>
    )
}