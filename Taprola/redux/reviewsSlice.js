import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dataReviews: []
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        getListReviews: (state, action) => {
            state.dataReviews = action.payload.reviews;
        }
    }
});
export const { getListReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;