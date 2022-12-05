import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { send } from 'emailjs-com';


export const Send = () => {
    
    const [toSend, setToSend] = useState(({
        from__name: '',
        question: ''
    }))

    function submitQuestion(EO) {
        EO.preventDefault();
            send(
            'service_4j7xlzd',
            'template_m50k0zj',
            toSend,
            'TEEd-8_0HXteJTfo6'
            )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    }

    function validationFormSend(EO) {
        setToSend({ ...toSend, [EO.target.name]: EO.target.value });
    }

    return (
        <div className='WrapperFormSend'>
                <form onSubmit={submitQuestion}>
                    <input type='text' name='from__name' placeholder='name' value={toSend.name} onChange={validationFormSend} />
                    <input type='text' name='question' placeholder='question' value={toSend.question} onChange={validationFormSend} />
                    <button type='submit'>Submit</button>
                </form>
        </div>
    )
}