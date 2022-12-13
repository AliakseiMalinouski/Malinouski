import React from "react";

export const GallerySlides = ({ code, name, description, image, targetCode, cbView, viewText }) => {

    const view = (EO) => {
        cbView(code);
    }

    if (code == targetCode) {
        return (
        <div>
            <div className='Slide SliderAnimation' onClick={view} style={{backgroundColor: '#00BFFF', transition: '1s'}}>
                <h3 className='Name'>{name}</h3>
                    <p className='Description'>{description}</p>
                    <p>{viewText}</p>
            </div>
        </div>
    )
    }
    else {
        return (
        <div>
            <div className='Slide' onClick={view} style={{backgroundImage: `url(${image})`, backgroundSize: '150% 150%', backgroundRepeat: 'no-repeat'}}>
                <h3 className='Name'>{name}</h3>
                <p className='Description'>{description}</p>
            </div>
        </div>
    )
    }
}