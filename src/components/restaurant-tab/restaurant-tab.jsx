export const RestaurantTab = ({ restaurants, onSelect }) => {
  return (
    <div className="restaurants-list" style={{ display: "flex", justifyContent: "space-evenly" }}>
      {restaurants.map((restaurant) => {
        return (
          <div key={restaurant.id} className="restaurant">
            <h2
              className="restaurant-name"
              onClick={() => {
                onSelect(restaurant.id);
              }}
              style={{ color: "orange", cursor: "pointer" }}
            >
              {restaurant.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
};
