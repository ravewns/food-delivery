import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRestaurant = createAsyncThunk(
    'restaurant/getRestaurant',
    async (restaurantId, {
        rejectWithValue,
    }) => {
        const response = await fetch('http://localhost:3001/api/restaurant/' + restaurantId);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue('No restaurant');
        }

        return result;
    },
);