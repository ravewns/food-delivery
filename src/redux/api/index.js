import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:3001/api"}),
    tagTypes: ["Reviews"],
    endpoints: (builder) => ({
        getRestaurants: builder.query({
            query: () => "/restaurants",
        }),
        getRestaurantById: builder.query({
            query: (restaurantId) => `/restaurant/${restaurantId}`,
        }),
        getRestaurantReviews: builder.query({
            query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
            providesTags: [{type: "Reviews", id: "all"}],
        }),
        getRestaurantDishes: builder.query({
            query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
        }),
        getRestaurantDishById: builder.query({
            query: (dishId) => `/dish/${dishId}`,
        }),
        addReview: builder.mutation({
            query: ({restaurantId, review}) => ({
                url: `/review/${restaurantId}`,
                method: "POST",
                body: review,
            }),
            invalidatesTags: [{type: "Reviews", id: "all"}],
        }),
    }),
});

export const {
    useGetRestaurantsQuery,
    useGetRestaurantReviewsQuery,
    useGetRestaurantDishesQuery,
    useGetRestaurantDishByIdQuery,
    useAddReviewMutation,
} = api;