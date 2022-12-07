import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRef } from 'react';
import { send } from 'emailjs-com';
import { addInfo } from '../redux/sendSlice';
import { NavLink } from 'react-router-dom';
import BackToTaprolaIcon from '../json/icon-backtotaprolafromcategory.json';
import { SendedForm } from './SendedForm';
import { useNavigate } from 'react-router-dom';


export const Send = () => {

    const [isPost, setIsPost] = useState(false);
    const [checkedInputName, setCheckedInputName] = useState(false);
    const [checkedInputEmail, setCheckedInputEmail] = useState(false);
    const [checkedTextArea, setCheckedTextArea] = useState(false);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const messageComplete = useSelector(state => state.informationAboutUserMessage);
    
    const [toSend, setToSend] = useState(({
        from__name: '',
        question: '',
        from__email: ''
    }));

    let inputName = useRef(null);

    const serviceId = 'service_4j7xlzd';
    const templeId = 'template_m50k0zj';
    const publicKey = 'TEEd-8_0HXteJTfo6';

    function submitQuestion(EO) {
        EO.preventDefault();
        dispatch(addInfo({ workMode: 1 }));
            send(
            serviceId,
            templeId,
            toSend,
            publicKey
            )
            .then((response) => {
                dispatch(addInfo({ email: toSend.from__email, userName: toSend.from__name, question: toSend.question, workMode: 0 }));
                const uri = "/sendedform";
                navigate(uri)
                setIsPost(true);
            })
            .catch((err) => {
                alert('Error ' + err)
            });
    }

    function validationFormSend(EO) {
        setToSend({ ...toSend, [EO.target.name]: EO.target.value });
    }

    function selectedInputName(EO) {
        setCheckedInputName(true);
    }

    function selectedInputEmail(EO) {
        setCheckedInputEmail(true);
    }

    function selectedTextArea(EO) {
        setCheckedTextArea(true);
    }

    function unSelectedInputName(EO) {
        setCheckedInputName(false);
    }

    function unSelectedInputEmail(EO) {
        setCheckedInputEmail(false);
    }

    function unSelectedTextArea(EO) {
        setCheckedTextArea(false);
    }


    if (messageComplete.workMode == 1) {
        return (
            <div className='WrapperLoadingSend'>
                <div className='LoadingSendMessage'>
                    <span className='LoadingSend'>Wait a moment, please...</span>
                </div>
            </div>
        )
    }

    else {
        return (
        <div className='WrapperFormSend'>
            <div className='Title'>Complete the form below and get an answer!</div>
                <form onSubmit={submitQuestion}>
                    <input className={checkedInputName ? 'CheckedInputName' : null} type='text' name='from__name' placeholder='name' ref={inputName} value={toSend.from__name} onChange={validationFormSend} onFocus={selectedInputName} onBlur={unSelectedInputName} />
                    <input className={checkedInputEmail ? 'CheckedInputEmail' : null} type='text' name='from__email' placeholder='email' value={toSend.from__email} onChange={validationFormSend} onFocus={selectedInputEmail} onBlur={unSelectedInputEmail} />
                    <textarea className={checkedTextArea ? 'CheckedTextArea' : null} name='question' placeholder='question' maxLength='240' value={toSend.question} onChange={validationFormSend} onFocus={selectedTextArea} onBlur={unSelectedTextArea}></textarea>
                    <button type='submit'>Submit</button>
                </form>
        </div>
    )
    }
}