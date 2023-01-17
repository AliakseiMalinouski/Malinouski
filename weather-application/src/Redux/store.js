import {configureStore} from '@reduxjs/toolkit';
import currentPlaceSlice from './currentPlaceSlice';
import dateSlice from './dateSlice';

export const store = configureStore({
    reducer: {
        currentPlace: currentPlaceSlice,
        date: dateSlice
    }
})