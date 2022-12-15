import React from 'react';
import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { getUser } from '../redux/userSlice';
import { removeUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';

export const Auth = React.memo(() => {

    let dispatch = useDispatch();
    

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [isHave, setIsHave] = useState(false);


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

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
        dispatch(getUser({ userEmail: loginEmail }));

    }
    catch (error) {
      console.log(error.message);
    }
  };

    

    const logout = async () => {
        await signOut(auth);
        dispatch(removeUser({ nothing: "" }));
    }

    useEffect(() => {
        if (user?.email) {
            dispatch(getUser({ userEmail: user?.email }));
        }
    }, [user?.email]);

    return (
        <div className='WrapperAuth'>
            <h2>Registration</h2>
            <div className='FormAuth'>
                {
                    (!isHave)
                        ?
                        <div className='RegisterPart'>
                            <h3>Register User</h3>
                            <input placeholder='email' onChange={(EO) => { setRegisterEmail(EO.target.value) }}  />
                            <input placeholder='password' onChange={(EO) => { setRegisterPassword(EO.target.value) }} />
                            <button onClick={register}>create user</button>
                        </div>
                        :
                        null
                }
                {
                    (isHave) 
                        ?
                        null
                        :
                        <p className='Have' onClick={(EO) => {setIsHave(true)}}>Do you have an account?</p>
                }
            {
                    (isHave)
                        ?
                <div className='LoginPart AnimationAuth'>
                    <h3>Login</h3>
                    <input placeholder='email' onChange={(EO) => { setLoginEmail(EO.target.value) }}  />
                    <input placeholder='password' onChange={(EO) => { setLoginPassword(EO.target.value) }} />
                    <button onClick={login}>Login</button>
                </div>
                        :
                        null
                    
            }
            <h4 className='TitleLogged'>User Logged in: {user?.email}</h4>
            <button onClick={logout} className='SignOut'>sign out</button>
            </div>
        </div>
    )
})