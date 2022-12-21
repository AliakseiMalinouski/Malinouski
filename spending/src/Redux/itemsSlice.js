import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
}

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        loadArrayItems: (state, action) => {
            state.items = action.payload.data;
        }
    }
});

export const { loadArrayItems } = itemsSlice.actions;
export default itemsSlice.reducer;