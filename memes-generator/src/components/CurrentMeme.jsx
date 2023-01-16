import React from 'react';


export const CurrentMeme = ({name, code, url}) => {
    return (
        <div className='CurrentMeme'>
            {/* <img src={url} alt='Current Meme'/> */}
            <div className='ImageMeme' style={{backgroundImage: `url(${url})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}></div>
            <div className='MemeDevTools'>

            </div>
        </div>
    )
}