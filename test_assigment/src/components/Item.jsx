import React from "react";
import { itemsEvents } from "../events";

export const Item = ({ code, name, year, color, pantone_value }) => {
    
    const viewItemGrid = () => {
        itemsEvents.emit('ViewCardGrid', name);
    }

    return (
        <div onClick={viewItemGrid} style={{ width: '30%', height: '50px', cursor: 'pointer', marginBottom: '30px' }} >
            <div style={{ backgroundColor: color, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <span>Item's id: {code}</span>
                <span>Item's name: {name}</span>
            </div>
        </div>
    )
}