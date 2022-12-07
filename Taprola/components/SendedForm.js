import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';
import BackToTaprolaIcon from '../json/icon-backtotaprolafromcategory.json';

export const SendedForm = () => {

    const messageComplete = useSelector(state => state.informationAboutUserMessage);

    return (
        <div>
            <div className='Complete'>Your details have been successfully sent</div>
                <div className='DataUserMessage'>
                    <div className='Email'>Your e-mail: <span className='SpanReduxInfo'>{messageComplete.email}</span></div>
                    <div className='UserName'>Your name: <span>{messageComplete.userName}</span></div>
                    <div className='Question'>Your question: <span>{messageComplete.question}</span></div>
                </div>
                <div className='Paragraph'>Your details have been successfully sent to <span>us</span>! A reply will be sent to the email address you <span>provided</span>. Have a nice day!</div>
                <div>
                    <NavLink to='/taprola'><img className='BackToTaprolaAfterSend' src={BackToTaprolaIcon} alt='Return image'/></NavLink>
                </div>
        </div>
    )
}