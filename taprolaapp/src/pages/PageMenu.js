import React, { useState, useEffect } from 'react';
import MenuComponent from '../components/MenuComponent';
import { json } from 'react-router-dom';

export const PageMenu = () => {
;
    
    const [IsLoad, setIsLoad] = useState(false);
    const [array, setArray] = useState([]);
    const [widthProgress, setWidthProgress] = useState(20);
    const [colorProgress, setColorProgress] = useState("red");

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/57225c6273781cf6e6f858cbf5cb59fd/raw/b573b345534f080e6266dd7b63b2b61d2614998d/ArrayCategoryTaprola",
            { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert("Error with require date");
                }
                else {
                    return response.json()
                }
                setWidthProgress(60);
                setColorProgress("orange");
            })
            .then(data => {
                setWidthProgress(100);
                setColorProgress("lime");
                setTimeout(() => {
                    setArray(data);
                    setIsLoad(true);
                }, 3000);
            })
            .catch(error => {
                alert(error);
        })
    },
        []
    );

    if (!IsLoad) {
            return (
                <div className='WrapperLoad'>
                    <div className='TextLoading'>Please wait a moment ...</div>
                    <div style={{width: widthProgress + "%", backgroundColor: colorProgress, transition: '3s'}} className='LoadingProgress'></div>
               </div>
           ) 
    }
    else {
        return (
            <MenuComponent array={array} isLoad={IsLoad} />
        )
    }


}