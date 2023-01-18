import React from "react";
import { useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { saveData } from "../Redux/weatherDataSlice";
import { weatherEvents } from "../events";

export const Data = React.memo(({name, wind, weather, main}) => {

    let dispatch = useDispatch();

    const weatherData = useSelector(state => state.weatherData.weatherData);

    useEffect(() => {
        dispatch(saveData({
            currentTemperature: Math.round(main.temp),
            currentTemperatureMax: Math.round(main.temp_max),
            currentTemperatureMin: Math.round(main.temp_min),
            feelsLikeTemperature: Math.round(main.feels_like),
            currentGust: (wind.gust === undefined ? null : Math.round(wind.gust)),
            currentPressure: Math.round(main.pressure),
            windSpeed: wind.speed,
        }));
    }, [dispatch, main.temp, main.feels_like, main.pressure, main.temp_max, main.temp_min, wind.gust, wind.speed]);  

    useEffect(() => {
        weatherEvents.emit("PutWeather", weatherData.currentTemperature, weather.main);
    }, [weatherData.currentTemperature, weather.main])

    return (
        <div className="Data">
            <div className="AboutWeather">
                <h3 className="NameOfCountry">{name}</h3>
                <h4 className="temperature">
                {weatherData.currentTemperature}
                <img className="Deg" src="https://cdn-icons-png.flaticon.com/512/7038/7038286.png" alt="Deg"/>
                </h4>
                <p className="StateWeather">{weather.main}</p> 
                <p className="MaxMin">
                    <span>Min: {(weatherData.currentTemperatureMin === weatherData.currentTemperatureMax ? weatherData.currentTemperatureMin - 1 : weatherData.currentTemperatureMin)} <img src="https://cdn-icons-png.flaticon.com/512/5726/5726885.png" alt="Deg"/></span>
                    <span>Max: {weatherData.currentTemperatureMax} <img src="https://cdn-icons-png.flaticon.com/512/5726/5726885.png" alt="Deg"/></span>
                </p>
                <div className="OtherInformation">
                    <div className="OpacityBlock">
                    </div>
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
                        <h5>Pressure: {weatherData.currentPressure} Pa</h5>
                </div>
            </div>
        </div>
    )
})