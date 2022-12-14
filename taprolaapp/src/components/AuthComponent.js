import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const Auth = () => {
    return (
        <div className='WrapperAuth'>
            <div>
                <h3>Register User</h3>
                <input placeholder='email'/>
                <input placeholder='password' />
                <button>Create User</button>
            </div>
            <div>
                <h3>Login</h3>
                <input placeholder='email'/>
                <input placeholder='password' />
                <button>Login</button>
            </div>
            <h4>User Logged in:</h4>
            <button>Sign out</button>
        </div>
    )
}