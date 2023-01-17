import React from "react";

export const Data = React.memo(({name, wind, weather, main}) => {

    let currentTemperature = Math.round(main.temp);

    let currentTemperatureMax = Math.round(main.temp_max);

    let currentTemperatureMin = Math.round(main.temp_min);

    let feelsLikeTemperature = Math.round(main.feels_like);

    let currentGunt = Math.round(wind.gust);

    let currentPressure = Math.round(main.pressure);

    return (
        <div className="Data">
            <h3>{name}</h3>
            <h4 className="temperature">
               {currentTemperature}
            </h4>
            <p>{weather.main}</p>
            <p>
                <span>Min: {(currentTemperatureMin === currentTemperatureMax ? currentTemperatureMin - 1 : currentTemperatureMin)}</span>
                <span>Max: {currentTemperatureMax}</span>
            </p>
            <p>
                Feels like: {feelsLikeTemperature}
            </p>
            <p>
                Wind speed: {wind.speed}
            </p>
            <p>
                A gust of wind: {currentGunt} {currentGunt === 1 ? 'point' : "points"}
            </p>
            <h5>Pressure: {currentPressure}</h5>
        </div>
    )
})