import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
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

const selectReviewsSlice = (state) => state[reviewSlice.name];

export const {
    selectIds: selectReviewIds,
    selectById: selectReviewById,
} = entityAdapter.getSelectors(selectReviewsSlice)

export const {selectRequestStatus} = reviewSlice.selectors;
