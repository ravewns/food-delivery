import {createSlice} from "@reduxjs/toolkit";
import {normalizedDishes} from "../../../../materials/normalized-mock.js";

const initialState = {
    ids: normalizedDishes.map(({id}) => id),
    entities: normalizedDishes.reduce((acc, dish) => {
        acc[dish.id] = dish;
        return acc;
    }, {}),
};

export const dishSlice = createSlice({
    name: 'dishSlice',
    initialState,
    selectors: {
        selectDishIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id]
    },
});

export const {selectDishIds, selectDishById} = dishSlice.selectors;