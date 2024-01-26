import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  cart: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      state.cart.push(action.payload);
      state.totalPrice = state.cart.reduce((sum, obj) => {
        return +obj.cost + sum;
      }, 0);
    },
    removeItems(state, action) {
      state.cart = state.cart.filter((obj) => obj.id != action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItems, removeItems, clearCart } = CartSlice.actions;

export default CartSlice.reducer;
