import { configureStore } from '@reduxjs/toolkit';
import baseSlice from './baseSlice';

export const store = configureStore({
    reducer: {
        base: baseSlice
    }
})