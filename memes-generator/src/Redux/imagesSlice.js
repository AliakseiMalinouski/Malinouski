import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const imagesSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        getImages: (state, action) => {
            state.data = action.payload;
        }
    }
});

export const {getImages} = imagesSlice.actions;
export default imagesSlice.reducer;