import React from "react";
import { useEffect } from "react";

export const Data = React.memo(({name, wind, weather, main}) => {

    useEffect(() => {
        createDate();
    }, []);

    const weatherData = {
        currentTemperature: Math.round(main.temp),
        currentTemperatureMax: Math.round(main.temp_max),
        currentTemperatureMin: Math.round(main.temp_min),
        feelsLikeTemperature: Math.round(main.feels_like),
        currentGust: (wind.gust === undefined ? null : Math.round(wind.gust)),
        currentPressure: Math.round(main.pressure),
        windSpeed: wind.speed,
    }

    const createDate = () => {
        let dateHash = new Date();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        let day = days[dateHash.getDay()];
        let date = dateHash.getDate();
        let mounth = months[dateHash.getMonth()];
        let year = dateHash.getFullYear();

        return `${day} ${date} ${mounth} ${year}`
    }

    console.log(createDate())

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