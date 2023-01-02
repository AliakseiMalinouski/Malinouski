import { configureStore } from '@reduxjs/toolkit';
import BooksSlice from './BooksSlice';
import HeaderListSlice from './HeaderListSlice';
import IconsHeaderSlice from './IconsHeaderSlice';
import TitlesCatalogSlice from './TitlesCatalogSlice';
import ItemsSlice from './ItemsSlice';

export const store = configureStore({
    reducer: {
        books: BooksSlice,
        list: HeaderListSlice,
        icons: IconsHeaderSlice,
        titles: TitlesCatalogSlice,
        items: ItemsSlice
    }
});