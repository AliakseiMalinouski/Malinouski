import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { send } from 'emailjs-com';
import { addInfo } from '../redux/sendSlice';


export const Send = () => {

    const [isPost, setIsPost] = useState(false);

    const dispatch = useDispatch();

    const messageComplete = useSelector(state => state.informationAboutUserMessage);
    
    const [toSend, setToSend] = useState(({
        from__name: '',
        question: '',
        from__email: ''
    }));

    const serviceId = 'service_4j7xlzd';
    const templeId = 'template_m50k0zj';
    const publicKey = 'TEEd-8_0HXteJTfo6'

    function submitQuestion(EO) {
        EO.preventDefault();
            send(
            serviceId,
            templeId,
            toSend,
            publicKey
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                dispatch(addInfo({ email: toSend.from__email, userName: toSend.from__name, question: toSend.question }));
                setIsPost(true);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    function validationFormSend(EO) {
        setToSend({ ...toSend, [EO.target.name]: EO.target.value });
    }

    if (!isPost) {
        return (
        <div className='WrapperFormSend'>
                <form onSubmit={submitQuestion}>
                    <input type='text' name='from__name' placeholder='name' value={toSend.name} onChange={validationFormSend} />
                    <input type='text' name='from__email' placeholder='email' value={toSend.email} onChange={validationFormSend}/>
                    <textarea name='question' placeholder='question' onChange={validationFormSend}></textarea>
                    <button type='submit'>Submit</button>
                </form>
        </div>
    )
    }
    else {
        return (
            <div className='WrapperSend'>
                <div className='Complete'>Your details have been successfully sent</div>
                <div className='DataUserMessage'>
                    <div className='Email'>Your e-mail: <span className='SpanReduxInfo'>{messageComplete.email}</span></div>
                    <div className='UserName'>Your name: <span>{messageComplete.userName}</span></div>
                    <div className='Question'>Your question: <span>{messageComplete.question}</span></div>
                </div>
                <div className='Paragraph'>Your details have been successfully sent to <span>us</span>! A reply will be sent to the email address you <span>provided</span>. Have a nice day!</div>
            </div>
        )
    }
}