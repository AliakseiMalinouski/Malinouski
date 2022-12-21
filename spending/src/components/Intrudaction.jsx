import React from "react";
import { NavLink } from "react-router-dom";

export const Intrudaction = () => {
    return (
        <div>
            <NavLink to='home-page'>Home Page</NavLink>
            <NavLink to='registration-page'>Auth Page</NavLink>
        </div>
    )
}