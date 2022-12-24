import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './itemsSlice';
import currentCodeSlice from './currentCodeSlice';

export const store = configureStore({
    reducer: {
        informationAboutItems: itemsSlice,
        currentCode: currentCodeSlice
    }
})