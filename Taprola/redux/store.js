
import { configureStore } from '@reduxjs/toolkit';
import infoCategorySlice from './infoCategorySlice';
import sendSlice from './sendSlice';


export const store = configureStore({
    reducer: {
        informationAboutCategory: infoCategorySlice,
        informationAboutUserMessage: sendSlice
    }
})