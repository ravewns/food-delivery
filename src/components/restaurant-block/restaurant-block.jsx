import {RestaurantMenu} from "../restaurant-menu/restaurant-menu";
import {RestaurantReview} from "../restaurant-review/restaurant-review";
import {ReviewForm} from "../review-form/review-form.jsx";

export const RestaurantBlock = ({restaurant}) => {
    return (
        <div>
            {restaurant.menu.length ? <RestaurantMenu restaurant={restaurant}/> : 'Онлайн меню отсутствует'}
            {restaurant.reviews.length ? <RestaurantReview restaurant={restaurant}/> : 'Отзывов нет'}
            <ReviewForm/>
        </div>
    );
};
