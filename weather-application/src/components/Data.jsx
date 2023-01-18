import React from "react";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { saveData } from "../Redux/weatherDataSlice";

export const Data = React.memo(({name, wind, weather, main, days, months}) => {

    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(saveData({
            currentTemperature: Math.round(main.temp),
            currentTemperatureMax: Math.round(main.temp_max),
            currentTemperatureMin: Math.round(main.temp_min),
            feelsLikeTemperature: Math.round(main.feels_like),
            currentGust: (wind.gust === undefined ? null : Math.round(wind.gust)),
            currentPressure: Math.round(main.pressure),
            windSpeed: wind.speed,
        }))
    }, [dispatch, main.temp, main.feels_like, main.pressure, main.temp_max, main.temp_min, wind.gust, wind.speed]);  

    const weatherData = useSelector(state => state.weatherData.weatherData);

    return (
        <div className="Data">
            <div className="CurrrentDate">

            </div>
            <div className="AboutWeather">
                <h3>{name}</h3>
                <h4 className="temperature">
                {weatherData.currentTemperature}
                </h4>
                <p>{weather.main}</p> 
                <p>
                    <span>Min: {(weatherData.currentTemperatureMin === weatherData.currentTemperatureMax ? weatherData.currentTemperatureMin - 1 : weatherData.currentTemperatureMin)}</span>
                    <span>Max: {weatherData.currentTemperatureMax}</span>
                </p>
                <p>
                    Feels like: {weatherData.feelsLikeTemperature}
                </p>
                <p>
                    Wind speed: {weatherData.windSpeed} m/s
                </p>
                {
                    (weatherData.currentGust === null)
                    ?
                    null
                    :
                    <p>
                        A gust of wind: {weatherData.currentGust} {weatherData.currentGust === 1 ? 'point' : "points"}
                    </p>
                }
                <h5>Pressure: {weatherData.currentPressure}</h5>
            </div>
        </div>
    )
})