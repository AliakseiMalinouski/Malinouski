import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    email: null,
    userName: null,
    question: null
}

export const sendSlice = createSlice({
    name: 'send',
    initialState,
    reducers: {
        addInfo: (state, action) => {
            state.email = action.payload.email;
            state.userName = action.payload.userName;
            state.question = action.payload.question;
        },
        removeInfo: (state, action) => {
            state.email = null;
            state.name = null;
            state.question = null;
        }
    }
});
export const { addInfo, removeInfo } = sendSlice.actions;
export default sendSlice.reducer;

