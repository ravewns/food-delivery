import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectRequestStatus, selectRestaurantIds} from "./slice.js";

export const getRestaurants = createAsyncThunk(
    'restaurants/getRestaurants',
    async (_, {
        rejectWithValue,
    }) => {
        const response = await fetch('http://localhost:3001/api/restaurants');
        const result = await response.json();

        if (!result.length) {
            rejectWithValue('No restaurants');
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            const state = getState();
            return selectRestaurantIds(state).length === 0 || selectRequestStatus(state) === 'idle';
        },
    }
);