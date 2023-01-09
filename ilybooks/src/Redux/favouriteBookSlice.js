import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    book: [],
}

export const favouriteBookSlice = createSlice({
    name: "favouriteBook",
    initialState,
    reducers: {
        getFavouriteBook: (state, action) => {
            state.book.push(action.payload);
        },
        resetFavourite: (state, action) => {
            state.book.splice(0, state.book.length);
        }
    }
})

export const { getFavouriteBook, resetFavourite } = favouriteBookSlice.actions;
export default favouriteBookSlice.reducer;