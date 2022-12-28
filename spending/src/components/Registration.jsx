import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { NavLink } from 'react-router-dom';

export const Auth = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState("");
    const [have, setHave] = useState(false);
    const [active, setActive] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const regEmailInput = useRef();
    const regPasswordInput = useRef();
    const logEmailInput = useRef();
    const logPasswordInput = useRef();

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
        let value = eo.target.value;
        validationAll(value, regPasswordInput.current.value);
        setRegisterEmail(eo.target.value);
        console.log('parent function  ' +value)
    }

    const readRegisterPassword = (eo) => {
        let value = eo.target.value;
        validationAll(value, regEmailInput.current.value);
        setRegisterPassword(eo.target.value);
    }

    const readLoginEmail = (eo) => {
        let value = eo.target.value;
        validationAll(value, logPasswordInput.current.value);
        setLoginEmail(eo.target.value);
    }

    const readLoginPassword = (eo) => {
        let value = eo.target.value;
        validationAll(value, logEmailInput.current.value);
        setLoginPassword(eo.target.value);
    }

    const validationAll = (valueElement, refElementValue) => {
        if (valueElement === "" || valueElement.length < 3 || refElementValue === "" || refElementValue.length < 3) {
            setActive(true);
        }
        else {
            setActive(false);
        }
    }

    return <div className='WrapperAuth'>
        <div className='WrapOther'>
    
        {
                have
                    ?
                    <div className='Login'>
                        <h3>Login</h3>
                        <input ref={logEmailInput} type='text' placeholder='email' value={loginEmail} onChange={readLoginEmail}/>
                        <input ref={logPasswordInput} type='text' placeholder='password' value={loginPassword} onChange={readLoginPassword} />
                        <p onClick={() => {
                            setHave(false);
                        }} className='ReturnToReg'>Return to registration</p>
                        <button onClick={login} disabled={active ? true : false} style={{opacity: active ? 0.6 : 1, backgroundColor: active ? 'crimson' : '#53a8ff'}}>Login</button>
                </div>
                    :
            <div className='Registr'>
                <h3>Registration</h3>
                <input ref={regEmailInput} type='text' placeholder='email' value={registerEmail} onChange={readRegisterEmail} />
                <input ref={regPasswordInput} type='text' placeholder='password' value={registerPassword} onChange={readRegisterPassword}/>
                <p className='DoYouHave' onClick={() => {
                    setHave(true);
                }}>Do you have account?</p>
                <button onClick={register} disabled={active ? true : false} style={{opacity: active ? 0.6 : 1, backgroundColor: active ? 'crimson' : '#53a8ff'}}>Registration</button>
        </div>
        }

        {
                user 
                    ?
                    <>
                        <h3 className='CurrentStatus'>User logged in: {user?.email}</h3>
                        <button onClick={logout} className='SingOutReg'>Sign out</button>
                    </>
                    :
                    null
            }
        <NavLink to='/' className='ReturnToHomePage'>
            Spending money back
        </NavLink>
        </div>
    </div>
}