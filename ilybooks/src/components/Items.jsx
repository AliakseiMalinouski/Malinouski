import React from "react";

export const Items = ({code, name, image, arrow}) => {
    return (
        <div className="Item">
            <img src={image} alt='Item' />
            <div className="RestItems">
                <h4>Dune: Volume 1</h4>
                <p>$9.99</p>
                <img src={arrow} alt='Arrow Button' className='ArrowButton'/>
            </div>
        </div>
    )
}