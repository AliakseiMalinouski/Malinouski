import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../json/icon-log.json';

export const Header = () => {

    const _END = '/';

    let navigate = useNavigate();

    const params = useLocation();

    const page = params.pathname;

    return (
            <div className='Header' style={{ backgroundColor: '#333' }}>
            <img src={Logo} alt='Logo' className='LogoTaprola'/>
            <div className='NavLinks'>
                <NavLink className='NavLink' to='/'>Intrudaction</NavLink>
                <NavLink className='NavLink' to='/taprola'>Taprola</NavLink>
                <NavLink className='NavLink' to='/menu'>Menu</NavLink>
                <NavLink className='NavLink' to='/options'>Options</NavLink>
                <NavLink className='NavLink' to='/send'>Contacts</NavLink>
            </div>
        </div>
    )
} 