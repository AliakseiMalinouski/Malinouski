import React from "react";

export const GallerySlides = ({ code, name, description, image }) => {
    return (
        <div>
            <div className='Slide' style={{backgroundImage: `url(${image})`, backgroundSize: '150% 150%', backgroundRepeat: 'no-repeat'}}>
                <h3 className='Name'>{name}</h3>
                <p className='Description'>{description}</p>
            </div>
        </div>
    )
}