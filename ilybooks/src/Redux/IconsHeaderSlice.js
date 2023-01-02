import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const IconHeaderSlice = createSlice({
    name: 'icons',
    initialState,
    reducers: {
        getImages: (state, action) => {
            state.data = action.payload.images;
        }
    }
})

export const { getImages } = IconHeaderSlice.actions;
export default IconHeaderSlice.reducer;