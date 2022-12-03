import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    info: null,
    isView: false
}

export const infoCategorySlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        getText: (state, action) => {
            state.info = action.payload.needInfo;
            state.isView = action.payload.changeIsView;
        }
    }
});

export const { getText } = infoCategorySlice.actions;
export default infoCategorySlice.reducer;