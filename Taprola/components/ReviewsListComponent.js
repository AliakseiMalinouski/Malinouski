import React from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const ReviewsList = ({ name, age, review, rating, cbView, code, targetCode, cbClose }) => {
    
    const [isView, setIsView] = useState(false);

    function changeView() {
        cbView(code);
    }

    function closeReview() {
        cbClose(code);
    }

    if (code == targetCode) {
        return (
        <div className='WrapperReview'>
            <h3 onClick={changeView} className='UserName View'>{name} <span className='Age'>{age}</span> <img className='Rating' src={rating} alt='Rating'/></h3>
            <p className='Review'>{review}</p><div className='CloseReview' onClick={closeReview}>close</div>
        </div>
    )
    }
    else {
        return (
        <div className='WrapperReview'>
            <h3 onClick={changeView} className='UserName'>{name} <span className='Age'>{age}</span> <img className='Rating' src={rating} alt='Rating'/></h3>
            {/* <p className='Review'>{review}</p> */}
        </div>
    )
    }
} 