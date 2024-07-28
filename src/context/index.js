import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import cartSlice from "./slices/cartSlice";
import wishlistSlice from "./slices/wishlistSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice,
        wishlist: wishlistSlice,
        cart: cartSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
