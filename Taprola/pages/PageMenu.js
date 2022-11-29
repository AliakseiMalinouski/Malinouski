import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/MenuComponent';
import { useNavigate } from "react-router-dom";
import { taprolaEvents } from '../events';

export const PageMenu = () => {
    
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/57225c6273781cf6e6f858cbf5cb59fd/raw/10f1b5fa10883c4abb0f246a814716996f1ff074/ArrayCategoryTaprola",
            { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error with require date");
                }
                else {
                    return response.json()
                }
            })
            .then(data => {
                setArray(data);
            })
    },
        []
    );

    

    function getSearchValue(value) {
        
    }

    useEffect(() => {
        taprolaEvents.addListener('saveValue', getSearchValue);
        return () => {
            taprolaEvents.removeListener('saveValue', getSearchValue);
        }
    }, [])
    return (
        <MenuComponent array={array} />
    )
}