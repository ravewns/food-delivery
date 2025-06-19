import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {dishSlice} from "../dish/slice.js";
import {getReviews} from "./get-reviews.js";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
    selectors: {
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getReviews.fulfilled, (state, {payload}) => {
            entityAdapter.setMany(state, payload);
        })
});

const selectReviewsSlice = (state) => state[dishSlice.name];

export const {
    selectIds: selectReviewIds,
    selectById: selectReviewById,
} = entityAdapter.getSelectors(selectReviewsSlice)

export const {selectRequestStatus} = dishSlice.selectors;