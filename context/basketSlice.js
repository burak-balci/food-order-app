import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },
  },
});

export const { addBasket } = basketSlice.actions;

const basketReducer = basketSlice.reducer;
export default basketReducer;
