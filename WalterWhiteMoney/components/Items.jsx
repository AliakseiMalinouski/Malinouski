import React from 'react';
import { useState } from 'react';

export const Items = ({ code, name, image, sell, buy, quanlity, price, reset, cbIncrement, cbDecrement, isMoney, cash }) => {
    
    const [currentQuanlity, setCurrentQuanlity] = useState(quanlity); 
    
    function Increment() {
        cbIncrement(price);
        if (cash > price) {
            setCurrentQuanlity(prev => prev + 1);
        }
        else {
            null
        }
    }

    function Decrement() {
        cbDecrement(price);
        setCurrentQuanlity(prev => prev - 1);
    }

    return (
        <div className='Item'>
            <img src={image} alt="Item's image" />
            <div className='Operations'>
                <div className='Title'>{name}</div>
                <div className='Price'>USD {price}</div>
                <div className='BuySell'>
                    {
                        (cash > 0)
                            ?
                            <div className='Buy' onClick={Increment}>{buy}</div>
                            :
                            <button disabled className='Null' onClick={Increment}>{buy}</button>
                    }
                    <div className='Quanlity'>{currentQuanlity}</div>
                    <div className='Sell' onClick={Decrement}>{sell}</div>
                </div>
            </div>
        </div>
    )
}