import {useParams} from "react-router";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurant/slice.js";
import {RestaurantReviews} from "../restaurant-reviews/restaurant-reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";

export const RestaurantReviewsTab = () => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))

    return (
        <div className="container">
            <RestaurantReviews restaurant={restaurant}/>
            <ReviewForm/>
        </div>
    )
}