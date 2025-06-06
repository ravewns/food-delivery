import {createSlice} from "@reduxjs/toolkit";
import {normalizedReviews} from "../../../../materials/normalized-mock.js";

const initialState = {
    ids: normalizedReviews.map(({id}) => id),
    entities: normalizedReviews.reduce((acc, review) => {
        acc[review.id] = review;
        return acc;
    }, {}),
};

export const reviewSlice = createSlice({
    name: 'reviewSlice',
    initialState,
    selectors: {
        selectReviewIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id]
    },
});

export const {selectReviewIds, selectReviewById} = reviewSlice.selectors;