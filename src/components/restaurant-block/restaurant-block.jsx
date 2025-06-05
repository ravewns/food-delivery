import {RestaurantMenu} from "../restaurant-menu/restaurant-menu";
import {RestaurantReviews} from "../restaurant-reviews/restaurant-reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";


export const RestaurantBlock = ({restaurant}) => {
    const {state} = useContext(AuthContext);

    return (
        <div className="container">
            {restaurant.menu.length ? <RestaurantMenu restaurant={restaurant}/> : 'Онлайн меню отсутствует'}
            {restaurant.reviews.length ? <RestaurantReviews restaurant={restaurant}/> : 'Отзывов нет'}
            {state.isAuth && <ReviewForm/>}
        </div>
    );
};
