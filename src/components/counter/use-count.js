import {useDispatch, useSelector} from "react-redux";
import {addToCart, removeFromCart, selectItemAmountById} from "../../redux/entities/cart/slice.js";
import {useCallback} from "react";

export const useCount = (restaurantId) => {
    const dispatch = useDispatch();
    const amount = useSelector((state) => selectItemAmountById(state, restaurantId));

    const increment = useCallback(() => dispatch(addToCart(restaurantId)), [dispatch, restaurantId]);
    const decrement = useCallback(() => dispatch(removeFromCart(restaurantId)), [dispatch, restaurantId]);

    return {
        value: amount,
        increment,
        decrement,
    };
};