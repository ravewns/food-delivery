import {configureStore} from "@reduxjs/toolkit";
import {restaurantSlice} from "./entities/restaurant/slice.js";
import {dishSlice} from "./entities/dish/slice.js";
import {reviewSlice} from "./entities/review/slice.js";

export const store = configureStore({
    reducer: {
        [restaurantSlice.name]: restaurantSlice.reducer,
        [dishSlice.name]: dishSlice.reducer,
        [reviewSlice.name]: reviewSlice.reducer,
    },
})