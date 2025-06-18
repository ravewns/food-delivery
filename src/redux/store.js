import {configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurants/slice.js";
import {dishSlice} from "./entities/dish/slice.js";
import {reviewSlice} from "./entities/review/slice.js";
import {userSlice} from "./entities/user/slice.js";
import {cartSlice} from "./entities/cart/slice.js";
import {requestSlice} from "./entities/request/slice.js";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
        [userSlice.name]: userSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,
        [requestSlice.name]: requestSlice.reducer,
    },
})