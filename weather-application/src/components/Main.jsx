
import React from "react";
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { api } from "../Api/api";
import { updatePlace, updateLoadState } from "../Redux/currentPlaceSlice";
import { Data } from "./Data";
import { monthThunk } from "../Redux/monthThunk";
import { daysThunk } from "../Redux/daysThunk";

export const Main = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(monthThunk);
        dispatch(daysThunk);
    }, [dispatch]);

    const currentPlace = useSelector(state => state.currentPlace.currentPlace);
    const loadState = useSelector(state => state.currentPlace.loadState);
    const days = useSelector(state => state.date.days);
    const months = useSelector(state => state.date.month);

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

    console.log(days, months)

    return (
        <div className="Main">
            <input type='text' value={searchValue} onChange={
                (EO) => {
                    setSearchValue(EO.target.value);
                }
            }/>
            <button onClick={loadWeatherCurrentPlace} type='button'>Click</button>
            {(loadState===1 && <div>wait a moment</div>)}
            {(loadState===2 && <Data 
            key={currentPlace.id}
            name={currentPlace.name}
            weather={currentPlace.weather[0]}
            wind={currentPlace.wind}
            main={currentPlace.main}
            />)}
            {(loadState===3 && <div>Error</div>)}
        </div>
    )
}