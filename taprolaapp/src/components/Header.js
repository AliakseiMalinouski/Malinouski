import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/LogoTaprola.png'
import { useSelector, useDispatch } from 'react-redux';

export const Header = React.memo(({cbResize}) => {

    let dispatch = useDispatch();

    const user = useSelector(state => state.informationAboutUser.userEmail);

    let navigate = useNavigate();

    const params = useLocation();

    const page = params.pathname;

    const [resize, setResize] = useState(false);
    const [isView, setIsView] = useState(false);

    useEffect(() => {
        let resize = window.matchMedia('(max-width: 560px)');
        resize.matches ? setResize(true) : setResize(false);
    }, [resize]);

    return (
            <div className='Header' style={{ backgroundColor: '#333' }}>
            <img src={logo} alt='Logo' className='LogoTaprola'/>
            {
                (!resize)
                    ?
                <div className='NavLinks'>
                    <NavLink className='NavLink' style={(page == '/' ? {color: 'red'} : null)} to='/'>Auth</NavLink>
                    <NavLink className='NavLink' style={(page == '/intrudaction' ? {color: 'red'} : null)} to='/intrudaction'>Intrudaction</NavLink>
                    <NavLink className='NavLink' to='/taprola' style={(page == '/taprola' ? {color: 'red'} : null)}>Taprola</NavLink>
                    <NavLink className='NavLink' to='/menu' style={(page == '/menu' ? {color: 'red'} : null)}>Menu</NavLink>
                    <NavLink className='NavLink' to='/options' style={(page == '/options' ? {color: 'red'} : null)}>Options</NavLink>
                    <NavLink className='NavLink' to='/send' style={(page == '/send' ? { color: 'red' } : null)}>Contacts</NavLink>
                    <NavLink className='NavLink' to='/reviews' style={(page == '/reviews' ? { color: 'red' } : null)}>Reviews</NavLink>
                    <NavLink className='NavLink' to='/gallery' style={(page == '/gallery' ? { color: 'red' } : null)}>Gallery</NavLink>
                    {
                        user == '' ? null : <span className='DataUser'>User: {user}</span>
                    }
                </div>
                    :
                <div>
                    {
                            (!isView)
                                ?
                                <img onClick={() => {
                                    setIsView(view => !view);
                                    cbResize(true);
                                }} className='HeaderMenu' style={{ width: '40px', height: '40px' }} src='https://cdn-icons-png.flaticon.com/512/6188/6188739.png' alt='Menu' />
                                :
                                <div>
                                    <div className='PageMenuHeader'>
                                        <div className='NavLinksMobile'>
                                            <NavLink className='NavLink' style={(page == '/' ? {color: 'red'} : null)} to='/'>Auth</NavLink>
                                            <NavLink className='NavLink' style={(page == '/intrudaction' ? {color: 'red'} : null)} to='/intrudaction'>Intrudaction</NavLink>
                                            <NavLink className='NavLink' to='/taprola' style={(page == '/taprola' ? {color: 'red'} : null)}>Taprola</NavLink>
                                            <NavLink className='NavLink' to='/menu' style={(page == '/menu' ? {color: 'red'} : null)}>Menu</NavLink>
                                            <NavLink className='NavLink' to='/options' style={(page == '/options' ? {color: 'red'} : null)}>Options</NavLink>
                                            <NavLink className='NavLink' to='/send' style={(page == '/send' ? { color: 'red' } : null)}>Contacts</NavLink>
                                            <NavLink className='NavLink' to='/reviews' style={(page == '/reviews' ? { color: 'red' } : null)}>Reviews</NavLink>
                                            <NavLink className='NavLink' to='/gallery' style={(page == '/gallery' ? { color: 'red' } : null)}>Gallery</NavLink>
                                        </div>
                                            <div className='WrapperDataUser'>
                                                {user == '' ? null : <span className='DataUser'>User: {user}</span>}
                                            </div>
                                    </div>
                               </div>
                    }
                </div>
            }
        </div>
    )
}) 