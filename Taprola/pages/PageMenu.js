import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/MenuComponent';
import { useNavigate } from "react-router-dom";
import { taprolaEvents } from '../events';
import { Category } from '../components/CategoryComponent';

export const PageMenu = () => {
    
    const [array, setArray] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

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


    let navigate = useNavigate();

    

    function getSearchValue(value) {
        setCurrentSearch(value);
        const uri = "/menudetails/"+value;
        navigate(uri);
    }

    useEffect(() => {
        taprolaEvents.addListener('saveValue', getSearchValue);
        return () => {
            taprolaEvents.removeListener('saveValue', getSearchValue);
        }
    }, [])
    if (currentSearch == "") {
        return (
            <MenuComponent array={array} />
        )
    }
    else if (currentSearch !== "") {
        return (
            <Category currentCategory={currentSearch} array={array} />
        )
    }
}