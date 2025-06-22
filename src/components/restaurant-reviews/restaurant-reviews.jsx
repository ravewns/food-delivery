import {useParams} from "react-router";
import {ReviewForm} from "../review-form/review-form.jsx";
import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";
import styles from ".//restaurant-review.module.css";
import {useAddReviewMutation, useGetRestaurantReviewsQuery} from "../../redux/api/index.js";

export const RestaurantReviews = () => {
    const {restaurantId} = useParams();
    const {state} = useContext(AuthContext);
    const {data: reviews, isLoading, isError} = useGetRestaurantReviewsQuery(restaurantId);

    const [addReviewMutation] = useAddReviewMutation();
    const handleAddReview = (review) => {
        addReviewMutation({restaurantId, review: {...review, user: state.user}})
    }

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error</div>
    }

    return (
        <div className="container">
            <div>
                <h3 className={styles.restaurantTitle}>Отзывы</h3>
                <ul>
                    {reviews.map(({id, text}) => (
                        <li key={id} className={styles.restaurantReview}>
                            {text}
                        </li>
                    ))}
                </ul>
            </div>
            {state.isAuth && <ReviewForm onSubmitForm={handleAddReview} />}
        </div>
    )
}