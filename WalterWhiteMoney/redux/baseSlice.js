import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: null
}

export const baseSlice = createSlice({
    name: 'base',
    initialState,
    reducers: {
        getData: (state, action) => {

        }
    }
});

export const { getData } = baseSlice.actions;
export default baseSlice.reducer; 