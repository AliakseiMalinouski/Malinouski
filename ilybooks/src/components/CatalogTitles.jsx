import React from "react";
import { IlyBooksEvents } from '../events';


export const CatalogTitles = ({code, title, isSelect }) => {

    const selected = () => {
        IlyBooksEvents.emit('Select', code);console.log('title ' + isSelect)
    }

    if (code === isSelect) {
        return (
            <><li className="Selected" onClick={selected}>{title}</li></>
        )
    }
    else {
        return (
            <><li onClick={selected}>{title}</li></>
        )
    }
}