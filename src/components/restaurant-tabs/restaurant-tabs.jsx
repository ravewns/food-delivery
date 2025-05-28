export const RestaurantTabs = ({restaurants, onSelect}) => {
    return (
        <div className="restaurants-list" style={{display: "flex", justifyContent: "space-evenly"}}>
            {restaurants.map((restaurant) => {
                if (!restaurant.name.length) {
                    return null;
                }
                return (
                    <div key={restaurant.id} className="restaurant">
                        <button
                            className="restaurant-name"
                            onClick={() => {
                                onSelect(restaurant.id);
                            }}
                            style={{
                                color: "orange",
                                cursor: "pointer",
                                backgroundColor: "transparent",
                                border: "none",
                                fontSize: "22px"
                            }}
                        >
                            {restaurant.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
};
