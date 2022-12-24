import React from "react";
import { useState } from "react";
import { wwEvents } from "../events";


export const Items = React.memo(({ code, name, image, price, sell, buy, quanlity}) => {

    const [currentQuantity, setCurrentQuantity] = useState(quanlity);
    
    const buyItem = () => {
        wwEvents.emit('putPriceAndCode', price, code);
        setCurrentQuantity(prev => prev + 1);
    }

    const sellItem = () => {
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
            <div className="InformationItems">
                <img src={image} alt='Item' />
                <h3 className="Name">{name}</h3>
                <h4 className="Price">USD {price}</h4>
                <div className="Other">
                    <div className="Buy" onClick={buyItem}>{buy}</div>
                    <div className="Quantity">{currentQuantity}</div>
                    <div className="Sell" onClick={sellItem}>{sell}</div>
                </div>
            </div>
        </div>
    )
})