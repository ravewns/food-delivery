import {RestaurantMenu} from "../restaurant-menu/restaurant-menu";
import {RestaurantReviews} from "../restaurant-reviews/restaurant-reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/slice.js";


export const RestaurantBlock = ({selectedId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, selectedId))
    const {state} = useContext(AuthContext);

    return (
        <div className="container">
            <h1>{restaurant.name}</h1>
            {restaurant.menu.length ? <RestaurantMenu restaurant={restaurant}/> : 'Онлайн меню отсутствует'}
            {restaurant.reviews.length ? <RestaurantReviews restaurant={restaurant}/> : 'Отзывов нет'}
            {state.isAuth && <ReviewForm/>}
        </div>
    );
};
