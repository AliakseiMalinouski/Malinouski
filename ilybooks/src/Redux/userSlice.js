import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userEmail: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.userEmail = action.payload;
        },
        removeUser: (state, action) => {
            state.userEmail = "";
        }
    }
})

export const {updateUser, removeUser} = userSlice.actions;
export default userSlice.reducer;