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
    deleteItem: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter((item) => item.item._id !== id);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const { addBasket, deleteItem, clearBasket } = basketSlice.actions;

const basketReducer = basketSlice.reducer;
export default basketReducer;
