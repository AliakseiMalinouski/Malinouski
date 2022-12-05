
import { configureStore } from '@reduxjs/toolkit';
import infoCategorySlice from './infoCategorySlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        informationAboutCategory: infoCategorySlice,
        user: userSlice
    }
})