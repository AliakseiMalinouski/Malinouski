import {configureStore} from '@reduxjs/toolkit';
import currentPlaceSlice from './currentPlaceSlice';
import dateSlice from './dateSlice';
import weatherDataSlice from './weatherDataSlice';

export const store = configureStore({
    reducer: {
        currentPlace: currentPlaceSlice,
        date: dateSlice,
        weatherData: weatherDataSlice
    }
})