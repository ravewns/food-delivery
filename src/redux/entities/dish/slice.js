import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getDishesByRestaurantId} from "./get-dishes.js";
import {getDish} from "./get-dish.js";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
    selectors: {
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getDishesByRestaurantId.fulfilled, (state, {payload}) => {
            entityAdapter.setMany(state, payload);
        })

        .addCase(getDish.fulfilled, (state, {payload}) => {
            entityAdapter.upsertOne(state, payload);
        })
});

const selectDishesSlice = (state) => state[dishSlice.name];

export const {
    selectIds: selectDishIds,
    selectById: selectDishById,
} = entityAdapter.getSelectors(selectDishesSlice)

export const {selectRequestStatus} = dishSlice.selectors;