import React from "react";
import { Home } from "../components/Home";
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { async } from "@firebase/util";

export const PageHome = () => {

    const [userEmail, setUserEmail] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
            setUserEmail(current?.email);
        });
    });


    const logOut = async () => {
        signOut(auth);
    }

    return (
        <div className="Default">
            <div className="UserStatus">{
                userEmail === undefined
                    ?
                    <div className="SignInHomePage">
                        <img className="UserIcon" src="https://i.ibb.co/0rgVzhr/1177568-removebg-preview.png" alt="User Icon" />
                        <NavLink to='/registration-page'>Sign In</NavLink>
                    </div>
                    :
                    <div className="InAccountPageHome">
                        <img className="UserIcon" src="https://i.ibb.co/0rgVzhr/1177568-removebg-preview.png" alt="User Icon" />
                        <span>{userEmail}</span>
                        <button className="SingOutHomePage" onClick={logOut}>Sing Out</button>
                    </div>
            }
            </div>
            <div className="ImageMainCharacter"></div>
            <div className="Phrases">
            <p>The good guys are never written about as much as the bad guys.</p>
        </div>
            <Home/>
        </div>
    )
}