import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    info: null
}

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        getText: (state, action) => {
            state.info = action.payload.newInfo
        }
    }
});

export const { getText } = testSlice.actions;
export default testSlice.reducer;