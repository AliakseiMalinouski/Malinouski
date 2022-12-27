import React from "react";
import { NavLink } from "react-router-dom";

export const Intrudaction = () => {
    return (
        <div className="IntrudactionPage">
            <div className="HelpBoard">
                <h3>Register or continue</h3>
                <div className="WrapperNavLinks">
                    <NavLink className='NoReg' to='/home-page'>Continue without registration</NavLink>
                    <NavLink className='Reg' to='/registration-page'>Registration</NavLink>
                </div>
            </div>
        </div>
    )
}