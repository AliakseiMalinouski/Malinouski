import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filmsArray: [],
    loadState: 0 // 1 - Loading has started 2 - The download succeeded 3 - The download has failed
}

export const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        getFilms: (state, action) => {
            state.filmsArray = action.payload.filmsArray;
        },
        updateLoadState: (state, action) => {
            state.loadState = action.payload.loadState;
        },
        changeFilm: (state, action) => {

        }
    }
})

export const { getFilms, updateLoadState, changeFilm } = filmsSlice.actions;
export default filmsSlice.reducer;