import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userEmail: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        getUser: (state, action) => {
            state.userEmail = action.payload.userEmail;
        },
        removeUser: (state, action) => {
            state.userEmail = action.payload.nothing;
        }
    }
});
export const { getUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
