import React from 'react';
import { useState } from 'react';

export const Items = ({ code, name, image, sell, buy, quanlity, price, reset, cbDecrement }) => {
    
    const [currentQuanlity, setCurrentQuanlity] = useState(quanlity); 
    
    function Decrement() {
        cbDecrement(price);
        setCurrentQuanlity(prev => prev + 1);
    }


    return (
        <div className='Item'>
            <img src={image} alt="Item's image" />
            <div className='Operations'>
                <div className='Title'>{name}</div>
                <div className='Price'>USD {price}</div>
                <div className='BuySell'>
                    <div className='Buy' onClick={Decrement}>{buy}</div>
                    <div className='Quanlity'>{currentQuanlity}</div>
                    <div className='Sell'>{sell}</div>
                </div>
            </div>
        </div>
    )
}