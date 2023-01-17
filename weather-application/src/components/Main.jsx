import React from "react";
import {useState} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { api } from "../Api/api";
import { updatePlace, updateLoadState } from "../Redux/currentPlaceSlice";


export const Main = () => {

    let dispatch = useDispatch();

    const currentPlace = useSelector(state => state.currentPlace.currentPlace);

    const [searchValue, setSearchValue] = useState(""); 

    const loadWeatherCurrentPlace = () => {
        dispatch(updateLoadState(1));
        fetch(`${api.base}weather?q=${searchValue}&units=metric&APPID=${api.key}`,
        
            {
                method: 'get'
            }

        )
        .then(response => {
            if(!response.ok) {
                alert("Error with download");
                dispatch(updateLoadState(3));
            }
            else {
                return response.json();
            }
        })
        .then(data => {
            dispatch(updatePlace(data));
            dispatch(updateLoadState(2));
        })
        .catch(error => {
            alert("Error with download");
            dispatch(updateLoadState(3));
        })
    }

    return (
        <div className="Main">
            <input type='text' value={searchValue} onChange={
                (EO) => {
                    setSearchValue(EO.target.value);
                }
            }/>
            <button onClick={loadWeatherCurrentPlace} type='button'>Click</button>
        </div>
    )
}