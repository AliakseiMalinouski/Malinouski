
import { configureStore } from '@reduxjs/toolkit';
import infoCategorySlice from './infoCategorySlice';
import sendSlice from './sendSlice';
import listSlice from './listSlice';
import reviewsSlice from './reviewsSlice';
import gallerySlice from './gallerySlice';
import imagesSlice from './imagesSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        informationAboutCategory: infoCategorySlice,
        informationAboutUserMessage: sendSlice,
        informationAboutListIntrudaction: listSlice,
        informationAboutReviewsList: reviewsSlice,
        informationAboutGallery: gallerySlice,
        informationAboutImagesGallery: imagesSlice,
        informationAboutUser: userSlice
    }
})