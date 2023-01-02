import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: []
}

export const BooksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.data = action.payload.data;
        }
    }
});

export const { getData } = BooksSlice.actions;
export default BooksSlice.reducer;
