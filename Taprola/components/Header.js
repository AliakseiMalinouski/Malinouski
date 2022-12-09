import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Logo from '../json/icon-log.json';

export const Header = React.memo(() => {

    const _END = '/';

    let navigate = useNavigate();

    const params = useLocation();

    const page = params.pathname;

    return (
            <div className='Header' style={{ backgroundColor: '#333' }}>
            <img src={Logo} alt='Logo' className='LogoTaprola'/>
            <div className='NavLinks'>
                <NavLink className='NavLink' style={(page == '/' ? {color: 'red'} : null)} to='/'>Intrudaction</NavLink>
                <NavLink className='NavLink' to='/taprola' style={(page == '/taprola' ? {color: 'red'} : null)}>Taprola</NavLink>
                <NavLink className='NavLink' to='/menu' style={(page == '/menu' ? {color: 'red'} : null)}>Menu</NavLink>
                <NavLink className='NavLink' to='/options' style={(page == '/options' ? {color: 'red'} : null)}>Options</NavLink>
                <NavLink className='NavLink' to='/send' style={(page == '/send' ? { color: 'red' } : null)}>Contacts</NavLink>
                <NavLink className='NavLink' to='/reviews' style={(page == '/reviews' ? { color: 'red' } : null)}>Reviews</NavLink>
            </div>
        </div>
    )
}) 