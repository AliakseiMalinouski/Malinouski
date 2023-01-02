import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Items = ({ code, name, image, arrow }) => {
    
    let navigate = useNavigate();

    const [bookName, setCurrentName] = useState(name);

    const goToBookDetails = () => {
        const uri = "/details/" + bookName;
        navigate(uri);
    }

    return (
        <div className="Item" onClick={goToBookDetails}>
            <img src={image} alt='Item' />
            <div className="RestItems">
                <h4>{name}</h4>
                <p>$9.99</p>
                <img src={arrow} alt='Arrow Button' className='ArrowButton'/>
            </div>
        </div>
    )
}