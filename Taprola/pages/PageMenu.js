import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/MenuComponent';

export const PageMenu = () => {
    
    const [array, setArray] = useState([]);
    const [currentSearch, setCurrentSearch] = useState("");

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/57225c6273781cf6e6f858cbf5cb59fd/raw/294efc2b2af5f43baa4f26a41d3d3f736dbb4fd5/ArrayCategoryTaprola",
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

        return (
            <MenuComponent array={array} />
        )


}