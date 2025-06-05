import styles from './restaurant-review.module.css'
import {Review} from "../restaurant-review/restaurant-review.jsx";

export const RestaurantReviews = ({restaurant}) => {
    return (
        <div>
            <h3 className={styles.restaurantTitle}>Отзывы</h3>
            <ul className={styles.restaurantReviews}>
                {restaurant.reviews.map((review) => (
                    <Review key={review} reviewId={review}/>
                ))}
            </ul>
        </div>
    );
};
