import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        getDataList: (state, action) => {
            state.data = action.payload.listInt
        }
    }
});

export const { getDataList } = listSlice.actions;
export default listSlice.reducer;