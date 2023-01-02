import { configureStore } from '@reduxjs/toolkit';
import BooksSlice from './BooksSlice';
import HeaderListSlice from './HeaderListSlice';
import IconsHeaderSlice from './IconsHeaderSlice';

export const store = configureStore({
    reducer: {
        books: BooksSlice,
        list: HeaderListSlice,
        icons: IconsHeaderSlice
    }
});