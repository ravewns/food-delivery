import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRequestStatus, selectReviewIds} from "./slice.js";

export const getReviews = createAsyncThunk(
    'dish/getDishes',
    async (_, {
        rejectWithValue,
    }) => {
        const response = await fetch('http://localhost:3001/api/reviews?restaurantId=' + _);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue('No reviews');
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            const state = getState();
            return selectReviewIds(state).length === 0 || selectRequestStatus(state) === 'idle';
        },
    }
);