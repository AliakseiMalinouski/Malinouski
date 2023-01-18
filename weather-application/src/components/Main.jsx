
import React from "react";
import {useState, useEffect, useCallback} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { api } from "../Api/api";
import { updatePlace, updateLoadState } from "../Redux/currentPlaceSlice";
import { Data } from "./Data";
import { daysThunk } from "../Redux/daysThunk";
import { updateTime } from "../Redux/timeSlice";

export const Main = React.memo(() => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(daysThunk)
    }, [dispatch]);

    const currentPlace = useSelector(state => state.currentPlace.currentPlace);
    const loadState = useSelector(state => state.currentPlace.loadState);
    const date = useSelector(state => state.date.date);
    const time = useSelector(state => state.time.time);

    const [searchValue, setSearchValue] = useState("");
    const [background, setBackground] = useState("");

    const createDate = useCallback(() => {
        let dateHash = new Date();
        let day = date[0] === undefined ? null : date[0].days[dateHash.getDay()];
        let number = dateHash.getDate();
        let mounth = date[1] === undefined ? null : date[1].months[dateHash.getMonth()];
        let year = dateHash.getFullYear();

        dispatch(updateTime({
            day: day,
            number: number,
            month: mounth,
            year: year
        }));

        return `${day} ${number} ${mounth} ${year}`
    }, [date, dispatch]);

    useEffect(() => {
        createDate();
    }, [createDate])

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
            <div className="CurrrentDate">
                <div className="Date">
                    <p>{time.day} {time.number} {time.month} {time.year}</p>
                </div>
            </div>
           <div className="Tools">
                <input type='text' value={searchValue} onChange={
                    (EO) => {
                        setSearchValue(EO.target.value);
                    }
                }/>
                <button onClick={loadWeatherCurrentPlace} type='button'>Click</button>
           </div>
            {(loadState===1 && <div>wait a moment</div>)}
            {(loadState===2 && <Data 
            key={currentPlace.id}
            name={currentPlace.name}
            weather={currentPlace.weather[0]}
            wind={currentPlace.wind}
            main={currentPlace.main}
            days={date[0].days}
            months={date[1].months}
            />)}
            {(loadState===3 && <div>Error</div>)}
        </div>
    )
})