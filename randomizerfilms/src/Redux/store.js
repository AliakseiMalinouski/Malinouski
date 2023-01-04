
import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';

export const store = configureStore({
    reducer: {
        films: filmsSlice
    }
});

