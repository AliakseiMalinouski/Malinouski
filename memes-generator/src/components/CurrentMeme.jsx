import React from 'react';
import { useState } from 'react';

export const CurrentMeme = ({name, code, url}) => {

    const [topText, setTopText] = useState("");

    const validationTopText = (EO) => {
        setTopText(EO.target.value);
    }


    return (
        <div className='CurrentMeme'>
            <div className='ImageMeme' style={{backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}>
                <input type='text' maxLength='30' className='TopText' placeholder='Top Text' value={topText} onChange={validationTopText}/>
            </div>
            <div className='MemeDevTools'>

            </div>
        </div>
    )
}