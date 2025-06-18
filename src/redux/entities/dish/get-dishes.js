import {createAsyncThunk} from "@reduxjs/toolkit";
import {selectDishIds, selectRequestStatus} from "./slice.js";

export const getDishes = createAsyncThunk(
    'dish/getDishes',
    async (_, {
        rejectWithValue,
    }) => {
        const response = await fetch('http://localhost:3001/api/dishes?restaurantId=' + _);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue('No dishes');
        }

        return result;
    },
    {
        condition: (_, {getState}) => {
            const state = getState();
            return selectDishIds(state).length === 0 || selectRequestStatus(state) === 'idle';
        },
    }
);