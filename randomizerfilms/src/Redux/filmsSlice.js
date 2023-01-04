import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmsArray: []
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        getFilms: (state, action) => {
            state.filmsArray = action.payload.filmsArray;
        }
    }
})

export const { getFilms } = filmsSlice.actions;
export default filmsSlice.reducer;