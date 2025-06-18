import {createAsyncThunk} from "@reduxjs/toolkit";

export const getDish = createAsyncThunk(
    'dish/getDish',
    async (_, {
        rejectWithValue,
    }) => {
        const response = await fetch('http://localhost:3001/api/dish/' + _);
        const result = await response.json();

        if (!result || !result.id) {
            rejectWithValue('No dishes');
        }

        return result;
    },
);