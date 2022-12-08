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

    if (page !== _END) {
        return (
        <div className='WrapperHeader' style={{backgroundColor: '#333'}}>
            <img src={Logo} alt='Logo' className='LogoTaprola'/>
            <div className='NavLinks'>
                <NavLink style={{color: 'white'}} to='/'>Intrudaction</NavLink>
                <NavLink style={{color: 'white'}} to='/taprola'>Taprola</NavLink>
                <NavLink style={{color: 'white'}} to='/menu'>Menu</NavLink>
                <NavLink style={{color: 'white'}} to='/options'>Options</NavLink>
            </div>
        </div>
    )
    }
    else {
        return (
            <div className='WrapperHeader' style={{ backgroundColor: 'white' }}>
            <img src={Logo} alt='Logo' className='LogoTaprola'/>
            <div className='NavLinks'>
                <NavLink style={{color: '#333'}} to='/'>Intrudaction</NavLink>
                <NavLink style={{color: '#333'}} to='/taprola'>Options</NavLink>
                <NavLink style={{color: '#333'}} to='/menu'>Menu</NavLink>
                <NavLink style={{color: '#333'}} to='/options'>Options</NavLink>
            </div>
        </div>
    )
    }
} 