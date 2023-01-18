import {configureStore} from '@reduxjs/toolkit';
import currentPlaceSlice from './currentPlaceSlice';
import dateSlice from './dateSlice';
import weatherDataSlice from './weatherDataSlice';
import timeSlice from './timeSlice';

export const store = configureStore({
    reducer: {
        currentPlace: currentPlaceSlice,
        date: dateSlice,
        weatherData: weatherDataSlice,
        time: timeSlice
    }
})