import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalPrice: 0,
  totalCount: 0,
  cart: [],
};
const updateCountAndPrice = (state) => {
  state.totalCount = state.cart.reduce((sum, obj) => {
    return obj.count + sum;
  }, 0);
  state.totalPrice = state.cart.reduce((sum, obj) => {
    return +obj.cost * obj.count + sum;
  }, 0);
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems(state, action) {
      const existItem = state.cart.find((obj) => obj.id === action.payload.id);
      if (existItem) {
        existItem.count < 9 && existItem.count++;
      } else {
        state.cart.push(action.payload);
      }
      updateCountAndPrice(state);
    },

    removeItems(state, action) {
      state.cart = state.cart.filter((obj) => obj.id !== action.payload);
      updateCountAndPrice(state);
    },
    clearCart(state) {
      state.cart = initialState.cart;
      state.totalCount = initialState.totalCount;
      state.totalPrice = initialState.totalPrice;
    },
    decreaseCount(state, action) {
      const existItem = state.cart.find((obj) => obj.id === action.payload.id);
      if (existItem) {
        existItem.count--;
        console.log(state.cart);
      }
      updateCountAndPrice(state);
    },
  },
});

export const { addItems, removeItems, clearCart, decreaseCount } =
  CartSlice.actions;

export default CartSlice.reducer;
