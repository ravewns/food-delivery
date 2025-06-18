import styles from './restaurant-review.module.css'
import {Review} from "../restaurant-review/restaurant-review.jsx";
import {useRequest} from "../../redux/hooks/use-request.js";
import {getReviews} from "../../redux/entities/review/get-reviews.js";
import {useSelector} from "react-redux";
import {selectReviewIds} from "../../redux/entities/review/slice.js";
import {RequestBoundary} from "../request-boundary/request-boundary.jsx";

export const RestaurantReviews = ({restaurantId}) => {
    const reviews = useSelector(selectReviewIds)

    const requestStatus = useRequest(getReviews, restaurantId);

    return (
        <RequestBoundary status={requestStatus}>
            <div>
                <h3 className={styles.restaurantTitle}>Отзывы</h3>
                <ul className={styles.restaurantReviews}>
                    {reviews.map((review) => (
                        <Review key={review} reviewId={review}/>
                    ))}
                </ul>
            </div>
        </RequestBoundary>
    );
};
