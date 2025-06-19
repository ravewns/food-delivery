import {useParams} from "react-router";
import {RestaurantReviews} from "../restaurant-reviews/restaurant-reviews.jsx";
import {ReviewForm} from "../review-form/review-form.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";

export const RestaurantReviewsTab = () => {
    const {state} = useContext(AuthContext);
    const {restaurantId} = useParams();

    return (
        <div className="container">
            <RestaurantReviews restaurantId={restaurantId}/>
            {state.isAuth && <ReviewForm/>}
        </div>
    )
}