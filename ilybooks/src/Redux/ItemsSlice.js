import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const ItemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        getItems: (state, action) => {
            state.data = action.payload.data;
        }
    }
})

export const { getItems } = ItemsSlice.actions;
export default ItemsSlice.reducer;