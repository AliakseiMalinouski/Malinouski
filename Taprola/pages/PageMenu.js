import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/MenuComponent';

export const PageMenu = () => {
    
    const [IsLoad, setIsLoad] = useState(false);
    const [array, setArray] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/57225c6273781cf6e6f858cbf5cb59fd/raw/80c2da501d262c4338bba95eff8b5ac88702e01c/ArrayCategoryTaprola",
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
                setIsLoad(true);
            })
    },
        []
    );

    if (!IsLoad) {
            return (
               <div>Loading...</div>
           ) 
    }
    else {
        return <MenuComponent array={array} isLoad={IsLoad} />
    }


}