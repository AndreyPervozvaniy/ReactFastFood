import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import DataSlice from "./DataSlice";

export default configureStore({
  reducer: { CartSlice, DataSlice },
});
