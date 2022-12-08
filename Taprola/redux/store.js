
import { configureStore } from '@reduxjs/toolkit';
import infoCategorySlice from './infoCategorySlice';
import sendSlice from './sendSlice';
import listSlice from './listSlice';


export const store = configureStore({
    reducer: {
        informationAboutCategory: infoCategorySlice,
        informationAboutUserMessage: sendSlice,
        informationAboutListIntrudaction: listSlice
    }
})