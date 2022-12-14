import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const gallerySlice = createSlice({
    name: "gallery",
    initialState,
    reducers: {
        getDataGallery: (state, action) => {
            state.data = action.payload.array
        }
    }
})

export const { getDataGallery } = gallerySlice.actions;
export default gallerySlice.reducer;