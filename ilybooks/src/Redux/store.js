import { configureStore } from '@reduxjs/toolkit';
import BooksSlice from './BooksSlice';
import HeaderListSlice from './HeaderListSlice';
import IconsHeaderSlice from './IconsHeaderSlice';
import TitlesCatalogSlice from './TitlesCatalogSlice';
import ItemsSlice from './ItemsSlice';
import favouriteBookSlice from './favouriteBookSlice';
import basketSlice from './basketSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: {
        books: BooksSlice,
        list: HeaderListSlice,
        icons: IconsHeaderSlice,
        titles: TitlesCatalogSlice,
        items: ItemsSlice,
        favouriteBook: favouriteBookSlice,
        basket: basketSlice,
        user: userSlice
    }
});