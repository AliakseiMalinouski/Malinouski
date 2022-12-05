
import { configureStore } from '@reduxjs/toolkit';
import infoCategorySlice from './infoCategorySlice';


export const store = configureStore({
    reducer: {
        informationAboutCategory: infoCategorySlice,
    }
})