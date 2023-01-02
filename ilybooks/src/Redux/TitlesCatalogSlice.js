import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: []
}

export const TitleCatalogSlice = createSlice({
    name: 'titles',
    initialState,
    reducers: {
        getTitles: (state, action) => {
            state.data = action.payload.data;
        }
    }
});

export const { getTitles } = TitleCatalogSlice.actions;
export default TitleCatalogSlice.reducer;