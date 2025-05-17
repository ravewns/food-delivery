import { createRoot } from "react-dom/client";
import { restaurants } from "../materials/mock";
const root = document.getElementById("root");
const reactRoot = createRoot(root);

reactRoot.render(
  <div className="layout">
    <div className="restaurants">
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="restaurant">
           <h2 className="restaurant-name" style={{ color: "orange" }}>{restaurant.name}</h2>
           <h3>Меню</h3>
           <ul className="restaurant-menu">
             {restaurant.menu.map((dish) => <li className="restaurant-dish">{dish.name}</li>)}
           </ul>
           <h3>Отзывы</h3>
           <ul className="restaurant-reviews">
             {restaurant.reviews.map((elreviews) => <li className="restaurant-review">{elreviews.text}</li>)}
           </ul>
        </div>
      ))}
    </div>
  </div>
);
