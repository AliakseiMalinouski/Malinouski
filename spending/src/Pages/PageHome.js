import React from "react";
import { Home } from "../components/Home";

export const PageHome = () => {
    return (
        <div className="Default">
            <div className="ImageMainCharacter"></div>
            <div className="Phrases">
            <p>The good guys are never written about as much as the bad guys.</p>
            <p>There are no honest thieves... except us, of course</p>
        </div>
            <Home/>
        </div>
    )
}