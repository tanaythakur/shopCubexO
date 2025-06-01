import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productsSliceReducer from "./Slices/Products/ProductsSlice";
import cartReducer from "./Slices/Cart/CartSlice.jsx";
export const store = configureStore({
  reducer: combineReducers({
    products: productsSliceReducer,
    cart: cartReducer,
  }),
});
