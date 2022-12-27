import React from "react";
import { Home } from "../components/Home";
import { auth } from '../firebase-config';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

export const PageHome = () => {

    const [userEmail, setUserEmail] = useState(undefined);

    useEffect(() => {
        onAuthStateChanged(auth, (current) => {
            setUserEmail(current?.email);
        });
    })

    console.log(userEmail)

    return (
        <div className="Default">
            <div className="UserStatus">{
                userEmail === undefined ? "" : userEmail
            }</div>
            <div className="ImageMainCharacter"></div>
            <div className="Phrases">
            <p>The good guys are never written about as much as the bad guys.</p>
        </div>
            <Home/>
        </div>
    )
}