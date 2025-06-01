import {RestaurantMenu} from "../restaurant-menu/restaurant-menu";
import {RestaurantReview} from "../restaurant-review/restaurant-review";
import {ReviewForm} from "../review-form/review-form.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";


export const RestaurantBlock = ({restaurant}) => {
    const {state} = useContext(AuthContext);

    return (
        <div>
            {restaurant.menu.length ? <RestaurantMenu restaurant={restaurant}/> : 'Онлайн меню отсутствует'}
            {restaurant.reviews.length ? <RestaurantReview restaurant={restaurant}/> : 'Отзывов нет'}
            {state.isAuth && <ReviewForm/>}
        </div>
    );
};
