import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getUsers} from "./get-users.js";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
    selectors: {
        selectRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) => builder
        .addCase(getUsers.fulfilled, (state, {payload}) => {
            entityAdapter.setAll(state, payload);
        })
});

const selectReviewsSlice = (state) => state[userSlice.name];

export const {
    selectIds: selectUserIds,
    selectById: selectUserById,
} = entityAdapter.getSelectors(selectReviewsSlice)


export const {selectRequestStatus} = userSlice.selectors;