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
        }
    }
})

export const { getFavouriteBook } = favouriteBookSlice.actions;
export default favouriteBookSlice.reducer;