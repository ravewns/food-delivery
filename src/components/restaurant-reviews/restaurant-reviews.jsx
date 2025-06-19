import styles from './restaurant-review.module.css'
import {Review} from "../restaurant-review/restaurant-review.jsx";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getReviews} from "../../redux/entities/review/get-reviews.js";
import {RequestBoundary} from "../request-boundary/request-boundary.jsx";
import {useSelector} from "react-redux";
import {selectRestaurantById} from "../../redux/entities/restaurants/slice.js";

export const RestaurantReviews = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId))
    const requestStatus = useRequest(getReviews, restaurantId);

    return (
        <RequestBoundary status={requestStatus}>
            <div>
                <h3 className={styles.restaurantTitle}>Отзывы</h3>
                <ul className={styles.restaurantReviews}>
                    {restaurant.reviews.map((review) => (
                        <Review key={review} reviewId={review}/>
                    ))}
                </ul>
            </div>
        </RequestBoundary>
    );
};
