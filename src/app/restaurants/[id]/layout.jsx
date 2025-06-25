import RestaurantInfo from "../../../components/restaurant-info/restaurant-info";

const Layout = ({ children, params }) => {
  const restaurantId = params.id;

  return <RestaurantInfo restaurantId={restaurantId}>{children}</RestaurantInfo>;
};

export default Layout;
