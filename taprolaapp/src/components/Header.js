import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/LogoTaprola.png'
import { useSelector, useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';
import { getUser } from '../redux/userSlice';

export const Header = React.memo(({cbResize}) => {

    let dispatch = useDispatch();

    const user = useSelector(state => state.informationAboutUser.userEmail);

    let navigate = useNavigate();

    const params = useLocation();

    const page = params.pathname;

    const [resize, setResize] = useState(false);
    const [isView, setIsView] = useState(false);
    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        let resize = window.matchMedia('(max-width: 960px)');
        resize.matches ? setResize(true) : setResize(false);
    }, [resize]);

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUserEmail(currentUser?.email);
            getUser({ userEmail: currentUser?.email });
        });
    }, []);


    return (
            <div className='Header' style={{ backgroundColor: '#333' }}>
            <img src={logo} alt='Logo' className='LogoTaprola'/>
            {
                (!resize)
                    ?
                <div className='NavLinks'>
                    <NavLink className='NavLink' style={(page == '/registration' ? {color: 'red'} : null)} to='/registration'>Auth</NavLink>
                    <NavLink className='NavLink' style={(page == '/intrudaction' ? {color: 'red'} : null)} to='/intrudaction'>Intrudaction</NavLink>
                    <NavLink className='NavLink' to='/' style={(page == '/' ? {color: 'red'} : null)}>Taprola</NavLink>
                    <NavLink className='NavLink' to='/menu' style={(page == '/menu' ? {color: 'red'} : null)}>Menu</NavLink>
                    <NavLink className='NavLink' to='/options' style={(page == '/options' ? {color: 'red'} : null)}>Options</NavLink>
                    <NavLink className='NavLink' to='/send' style={(page == '/send' ? { color: 'red' } : null)}>Contacts</NavLink>
                    <NavLink className='NavLink' to='/reviews' style={(page == '/reviews' ? { color: 'red' } : null)}>Reviews</NavLink>
                    <NavLink className='NavLink' to='/gallery' style={(page == '/gallery' ? { color: 'red' } : null)}>Gallery</NavLink>
                        {userEmail == '' ? null : <span className='DataUser'> User: {userEmail}</span>}
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
                                        <img onClick={() => {
                                            setIsView(false);
                                            cbResize(false);
                                        }} className='ClosePageMenu' src='https://img.icons8.com/fluency/512/multiply.png' alt='Close' />
                                        <div className='NavLinksMobile'>
                                            <NavLink className='NavLink' style={(page == '/registration' ? { color: 'red' } : null)} to='/registration' onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Auth</NavLink>
                                            <NavLink className='NavLink' style={(page == '/intrudaction' ? { color: 'red' } : null)} to='/intrudaction' onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Intrudaction</NavLink>
                                            <NavLink className='NavLink' to='/' style={(page == '/' ? {color: 'red'} : null)} onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Taprola</NavLink>
                                            <NavLink className='NavLink' to='/menu' style={(page == '/menu' ? {color: 'red'} : null)} onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Menu</NavLink>
                                            <NavLink className='NavLink' to='/options' style={(page == '/options' ? {color: 'red'} : null)} onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Options</NavLink>
                                            <NavLink className='NavLink' to='/send' style={(page == '/send' ? { color: 'red' } : null)} onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Contacts</NavLink>
                                            <NavLink className='NavLink' to='/reviews' style={(page == '/reviews' ? { color: 'red' } : null)} onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Reviews</NavLink>
                                            <NavLink className='NavLink' to='/gallery' style={(page == '/gallery' ? { color: 'red' } : null)} onClick={() => {
                                                setIsView(false);
                                                cbResize(false);
                                            }}>Gallery</NavLink>
                                        </div>
                                            <div className='WrapperDataUser'>
                                                {userEmail == '' ? null : <span className='DataUser'> User: {userEmail}</span>}
                                            </div>
                                    </div>
                               </div>
                    }
                </div>
            }
        </div>
    )
}) 