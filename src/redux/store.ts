import { configureStore } from "@reduxjs/toolkit";
import { userAPI } from "./api/userAPI";
import { productAPI } from './api/productAPI'
import { userReducer } from './reducer/userReducer'
import { cartReducer } from "./reducer/cartReducer"
import { orderApi } from "./api/orderAPI";

export const server = import.meta.env.VITE_SERVER;

export const store = configureStore({
    reducer: {
        [userAPI.reducerPath]: userAPI.reducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [orderApi.reducerPath]: orderApi.reducer,
        [userReducer.name]: userReducer.reducer,
        [cartReducer.name]: cartReducer.reducer
    },
    middleware: (gDM) => gDM().concat(userAPI.middleware, productAPI.middleware, orderApi.middleware)
    // middleware : (mid) => [...mid(), userAPI.middleware]
})

export type RootState = ReturnType<typeof store.getState>