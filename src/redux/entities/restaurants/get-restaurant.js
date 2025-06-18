import {createAsyncThunk} from "@reduxjs/toolkit";

export const getRestaurant = createAsyncThunk(
    'restaurant/getRestaurant',
    async (_, {
        rejectWithValue,
    }) => {
        const response = await fetch('http://localhost:3001/api/restaurant/' + _);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue('No restaurant');
        }

        return result;
    },
);