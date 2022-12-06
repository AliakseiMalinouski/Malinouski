import React from 'react';
import { useState } from 'react';
import { WalterWhiteMoneyEvents } from '../events';

export const Items = ({code, name, image, sell, buy, quanlity, price, reset}) => {
    return (
        <div className='Item'>
            <img src={image} alt="Item's image" />
            <div className='Operations'>
                <div className='Title'>{name}</div>
                <div className='Price'>USD {price}</div>
                <div className='BuySell'>
                    <div className='Buy'>{buy}</div>
                    <div className='Quanlity'>{quanlity}</div>
                    <div className='Sell'>{sell}</div>
                </div>
            </div>
        </div>
    )
}