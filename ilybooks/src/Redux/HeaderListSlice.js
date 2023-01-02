import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const HeaderListSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        getList: (state, action) => {
            state.data = action.payload.list;
        }
    }
});

export const { getList } = HeaderListSlice.actions;
export default HeaderListSlice.reducer;