import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase-config';
import { getUser } from '../redux/userSlice';
import { removeUser } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const Auth = React.memo(() => {

    let dispatch = useDispatch();
    
    let navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [user, setUser] = useState({});
    const [isHave, setIsHave] = useState(false);
    const [isAccept, setIsAccept] = useState(false);
    const [isAcceptLogin, setIsAcceptLogin] = useState(false);

    const registerEmailRef = useRef("");
    const registerPasswordRef = useRef("");


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    }, []);

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
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

    const openLogin = () => {
        setIsHave(true);
    }

    const acceptAllRegister = () => {
        if (registerEmail == '' || registerPassword == '') {
            setIsAccept(false);
        }
        else {
            setIsAccept(true);
        }
    }

    const acceptAllLogin = () => {
        if (loginEmail == '' || loginPassword == '') {
            setIsAcceptLogin(false);
        }
        else {
            setIsAcceptLogin(true);
        }
    }

    const readRegisterEmail = (EO) => {
        setRegisterEmail(EO.target.value);
        acceptAllRegister();
    }

    const readRegisterPassword = (EO) => {
        setRegisterPassword(EO.target.value);
        acceptAllRegister();
    }

    const readLoginEmail = (EO) => {
        setLoginEmail(EO.target.value);
        acceptAllLogin();
    }

    const readLoginPassword = (EO) => {
        setLoginPassword(EO.target.value);
        acceptAllLogin();
    }

    return (
        <div className='WrapperAuth'>
            <h2>Registration</h2>
            <div className='FormAuth'>
                {
                    (!isHave)
                        ?
                        <div className='RegisterPart'>
                            <h3>Register User</h3>
                            <input placeholder='email' onChange={readRegisterEmail} ref={registerEmailRef} />
                            <input placeholder='password' onChange={readRegisterPassword} ref={registerPasswordRef} />
                            <input type='checkbox' onClick={acceptAllRegister} className='Accept'/><span className='AllCorrectAccept'>All the information is correct</span>
                            {
                                (!isAccept)
                                    ?
                                    <button onClick={register} disabled={true} style={{opacity: 0.7}}>create user</button>
                                    :
                                    <button onClick={register}>create user</button>
                            }
                            <p className='Have' onClick={openLogin}>Do you have an account?</p>
                        </div>
                        :
                        <div className='LoginPart AnimationAuth'>
                            {
                                (user?.email)
                                    ?
                                    null
                                    :
                                    <div>
                                        <h3>Login</h3>
                                        <input placeholder='email' onChange={readLoginEmail}  />
                                        <input placeholder='password' onChange={readLoginPassword} />
                                        <button onClick={login} disabled={(!isAcceptLogin ? true : false)} style={{ opacity: (!isAcceptLogin) ? 0.7 : '' }} className='LoginButton'>Login</button>
                                    </div>
                            }
                        </div>
                }
            <h4 className='TitleLogged'>User Logged in: {user?.email}</h4>
            <button onClick={logout} className='SignOut' disabled={user?.email ? '' : true} style={{opacity: user?.email ? '' : 0.7}}>sign out</button>
            </div>
        </div>
    )
})