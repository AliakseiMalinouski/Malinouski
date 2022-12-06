import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    arrayItems: null,
    workMode: 0
}

export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        getData: (state, action) => {
            state.arrayItems = action.payload.array;
            state.workMode = action.payload.workMode;
        }
    }
});

export const { getData } = baseSlice.actions;
export default baseSlice.reducer; 