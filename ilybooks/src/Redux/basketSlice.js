import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket: []
}

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        getItemsBasket: (state, action) => {
            state.basket.push(action.payload);
        },
        clearBasket: (state, action) => {
            state.basket.splice(0, state.basket.length);
        }
    }
});

export const { getItemsBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;