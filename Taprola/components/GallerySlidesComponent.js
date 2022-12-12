import React from "react";

export const GallerySlides = ({ code, name, description, image }) => {
    return (
        <div>
            <div className='Slide' style={{backgroundImage: `url(${image})`, backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}