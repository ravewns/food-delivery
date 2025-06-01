import styles from './restaurant-review.module.css'

export const RestaurantReview = ({restaurant}) => {
    return (
        <div>
            <h3 className={styles.restaurantTitle}>Отзывы</h3>
            <ul className={styles.restaurantReviews}>
                {restaurant.reviews.map((review) => (
                    <li key={review.id} className={styles.restaurantReview}>
                        {review.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
