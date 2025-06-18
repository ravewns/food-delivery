import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getRestaurants} from "./get-restaurants.js";


const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
    selectors: {
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getRestaurants.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        })
});

const selectRestaurantsSlice = (state) => state[restaurantSlice.name];

export const {
    selectIds: selectRestaurantIds,
    selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantsSlice)

export const {selectRequestStatus} = restaurantSlice.selectors;