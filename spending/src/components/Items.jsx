import React from "react";
import { useState } from "react";
import { wwEvents } from "../events";


export const Items = ({ code, name, image, price, sell, buy, quanlity, cbIn, cbDc }) => {

    const [currentQuantity, setCurrentQuantity] = useState(quanlity);
    
    const buyItem = () => {
        // cbIn(price, code);
        wwEvents.emit('putPriceAndCode', price, code);
        setCurrentQuantity(prev => prev + 1);
    }

    const sellItem = () => {
        // cbDc(price);
        wwEvents.emit('dPrice', price);
        if (currentQuantity === 0) {
            setCurrentQuantity(0);
        }
        else {
            setCurrentQuantity(prev => prev - 1);
        }
    }

    return (
        <div className="Item">
            <div className="Image" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: '130% 100%', backgroundPosition: 'center center'}}>

            </div>
            <div className="InformationItems">
                <h3 className="Name">{name}</h3>
                <h4 className="Price">USD {price}</h4>
                <div className="Other">
                    <div className="Buy" onClick={buyItem}>{buy}</div>
                    <div>{currentQuantity}</div>
                    <div className="Sell" onClick={sellItem}>{sell}</div>
                </div>
            </div>
        </div>
    )
}