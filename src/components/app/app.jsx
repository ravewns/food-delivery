import {Layout} from "../layout/layout";
import {RestaurantPage} from "../restaurant-page/restaurant-page";
import {ThemeContextProvider} from "../theme-context/theme-context-provider.jsx";
import {AuthContextProvider} from "../auth-context/auth-context-provider.jsx";

export const App = () => {
    return (
        <ThemeContextProvider>
            <AuthContextProvider>
                <Layout>
                    <RestaurantPage/>
                </Layout>
            </AuthContextProvider>
        </ThemeContextProvider>);
};
