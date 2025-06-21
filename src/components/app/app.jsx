import {Layout} from "../layout/layout";
import {RestaurantTabsBlock} from "../restaurant-page/restaurant-tabs-block.jsx";
import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";
import {AuthContextProvider} from "../auth-context/auth-context-provider.jsx";
import '../../global.css';
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {RestaurantInfo} from "../restaurant-info/restaurant-info.jsx";
import {RestaurantMenuTab} from "../restaurant-menu-tab/restaurant-menu-tab.jsx";
import {RestaurantReviews} from "../restaurant-reviews/restaurant-reviews.jsx";
import {DishElement} from "../dish-element/dish-element.jsx";
import {RestaurantHome} from "../restaurant-home/restaurant-home.jsx";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <BrowserRouter>
                        <Routes>
                            <Route element={<Layout/>}>
                                <Route path="/" element={<RestaurantHome/>}/>
                                <Route path="restaurants" element={<RestaurantTabsBlock/>}>
                                    <Route path=":restaurantId" element={<RestaurantInfo/>}>
                                        <Route index element={<Navigate to="menu" replace/>}/>
                                        <Route path="menu" element={<RestaurantMenuTab/>}/>
                                        <Route path="reviews" element={<RestaurantReviews/>}/>
                                    </Route>
                                </Route>
                                <Route path='dish/:dishId' element={<DishElement/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
};
