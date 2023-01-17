import {configureStore} from '@reduxjs/toolkit';
import currentPlaceSlice from './currentPlaceSlice';

export const store = configureStore({
    reducer: {
        currentPlace: currentPlaceSlice,
    }
})