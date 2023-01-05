import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: {},
    loadState: 0 // - 1 The download has started, 2 - The download is succses 3 - the download has failed
}

export const itemsSlice = createSlice({
    name: "items",
    initialState,
    reducers: {
        getItems: (state, action) => {
            state.data = action.payload.data;
        },
        updateLoadState: (state, action) => {
            state.loadState = action.payload.loadState;
        }
    }
})

export const { getItems, updateLoadState } = itemsSlice.actions;
export default itemsSlice.reducer;