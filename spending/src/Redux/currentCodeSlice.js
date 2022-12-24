import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    code: null
}

export const currentCodeSlice = createSlice({
    name: 'code',
    initialState,
    reducers: {
        changeCode: (state, action) => {
            state.code = action.payload.code;
        }
    }
});

export const { changeCode } = currentCodeSlice.actions;
export default currentCodeSlice.reducer;