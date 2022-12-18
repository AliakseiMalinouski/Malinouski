import React from "react";

export const GallerySlides = ({ code, name, description, image, targetCode, cbView, cbClose, viewText}) => {

    const view = (EO) => {
        cbView(code);
    }

    const close = (EO) => {
        cbClose();
        EO.stopPropagation();
    }

    if (code == targetCode) {
        return (
        <div>
            <div className='OpenSlide SliderAnimation' onClick={view} style={{backgroundColor: '#87CEEB', transition: '1s'}}>
                <h3 className='Name'>{name}</h3>
                    <p className='Description'>{description}</p>
                    <p className='ViewDescription'>{viewText}</p>
                    <span onClick={close} className="Close">Close</span>
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