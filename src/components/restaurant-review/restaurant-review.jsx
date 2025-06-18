import styles from "../restaurant-reviews/restaurant-review.module.css";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../redux/entities/review/slice.js";

export const Review = ({reviewId}) => {
    const review = useSelector((state) => selectReviewById(state, reviewId))

    return (
        <>
            <li key={review} className={styles.restaurantReview}>
                {review.text}
            </li>
        </>
    )
}