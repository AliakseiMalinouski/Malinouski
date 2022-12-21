import React from "react";


export const Items = ({ code, name, image, price, sell, buy, quanlity, cbIn, cbDc }) => {
    
    const buyItem = () => {
        cbIn(price);
    }

    const sellItem = () => {
        cbDc(price);
    }

    return (
        <div className="Item">
            <div className="Image" style={{backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat", backgroundSize: '100% 110%', backgroundPosition: 'center center'}}>

            </div>
            <div className="InformationItems">
                <h3 className="Name">{name}</h3>
                <h4 className="Price">USD {price}</h4>
                <div className="Other">
                    <div className="Buy" onClick={buyItem}>{buy}</div>
                    <div>{quanlity}</div>
                    <div className="Sell" onClick={sellItem}>{sell}</div>
                </div>
            </div>
        </div>
    )
}