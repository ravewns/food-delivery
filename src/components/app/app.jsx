import {Layout} from "../layout/layout";
import {RestaurantPage} from "../restaurant-page/restaurant-page";
import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";
import {AuthContextProvider} from "../auth-context/auth-context-provider.jsx";
import '../../global.css';
import {Provider} from "react-redux";
import {store} from "../../redux/store.js";

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Layout>
                        <RestaurantPage/>
                    </Layout>
                </AuthContextProvider>
            </ThemeContextProvider>
        </Provider>
    )
};
