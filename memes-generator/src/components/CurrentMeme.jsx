import React from 'react';
import { useState } from 'react';

export const CurrentMeme = ({name, code, url}) => {

    const [topText, setTopText] = useState("");

    const validationTopText = (EO) => {
        setTopText(EO.target.value);
    }

    return (
        <div className='CurrentMeme'>
            <div id='capture' className='ImageMeme' style={{backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                <span className='TopText'>{topText}</span>
            </div>
            <div className='MemeDevTools'>
                <input type='text' className='TopTextInput' maxLength='30' placeholder='Top Text' value={topText} onChange={validationTopText}/>
            </div>
        </div>
    )
}