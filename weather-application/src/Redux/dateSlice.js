import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    month: [],
    days: [],
}

export const dateSlice = createSlice({
    name: "date",
    initialState,
    reducers: {
        getDate: (state, action) => {
            state.month = action.payload.month;
            state.days = action.payload.days;
        }
    }
});

export const {getDate} = dateSlice.actions;
export default dateSlice.reducer;