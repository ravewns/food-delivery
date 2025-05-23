export const RestaurantReview = ({ restaurant }) => {
  return (
    <div>
      <h3>Отзывы</h3>
      <ul className="restaurant-reviews">
        {restaurant.reviews.map((review) => (
          <li key={review.id} className="restaurant-review">
            {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
