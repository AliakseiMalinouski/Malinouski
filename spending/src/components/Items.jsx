import React, { useEffect } from "react";
import { useState } from "react";
import { wwEvents } from "../events";


export const Items = React.memo(({ code, name, image, price, sell, buy, quanlity, item, haveCode, cash, reset }) => {
    
    useEffect(() => {
        if (reset) {
            setCurrentQuantity(0);
        }
    }, [reset]);

    const [currentQuantity, setCurrentQuantity] = useState(quanlity);
    
    const buyItem = () => {
        wwEvents.emit('putPriceAndCode', price, code, item);
        if (price > cash) {
            setCurrentQuantity(prev => prev);
        }
        else {
            setCurrentQuantity(prev => prev + 1);
        }
    }

    const sellItem = () => {
        wwEvents.emit('dPrice', price, item);
        if (currentQuantity === 0) {
            setCurrentQuantity(0);
        }
        else {
            setCurrentQuantity(prev => prev - 1);
        }
    }

    if (haveCode === code) {
        return (
        <div className="Item">
            <div className="InformationItems">
                <img src={image} alt='Item' />
                <h3 className="Name">{name}</h3>
                <h4 className="Price">USD {price}</h4>
                <div className="Other">
                    <button className="Buy BaseOpacity" disabled={true}>{buy}</button>
                    <div className="Quantity">{currentQuantity}</div>
                    <button className="Sell" onClick={sellItem}>{sell}</button>
                </div>
            </div>
        </div>
    )
    }
    else {
        return (
        <div className="Item">
            <div className="InformationItems">
                <img src={image} alt='Item' />
                <h3 className="Name">{name}</h3>
                <h4 className="Price">USD {price}</h4>
                <div className="Other">
                    {
                            price > cash 
                                ?
                                <button className="Buy BaseOpacity" onClick={buyItem}>{buy}</button>
                                :
                                <button className="Buy" onClick={buyItem}>{buy}</button>
                    }
                    <div className="Quantity">{currentQuantity}</div>
                    <button className="Sell" onClick={sellItem}>{sell}</button>
                </div>
            </div>
        </div>
    )
    }
})