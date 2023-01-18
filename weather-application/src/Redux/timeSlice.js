import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time: {
        day: null,
        number: null,
        month: null,
        year: null,
    }
}

export const timeSlice = createSlice({
    name: "time",
    initialState,
    reducers: {
        updateTime: (state, action) => {
            state.time.day = action.payload.day;
            state.time.number = action.payload.number;
            state.time.month = action.payload.month;
            state.time.year = action.payload.year;
        }
    }
})

export const {updateTime} = timeSlice.actions;
export default timeSlice.reducer;