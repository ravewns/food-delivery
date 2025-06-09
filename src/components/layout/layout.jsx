import {ProgressBar} from "../ProgressBar/ProgressBar.jsx";
import {Header} from "../header/header.jsx";
import {Footer} from "../footer/footer.jsx";
import {Cart} from "../cart/cart.jsx";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <div>
            <ProgressBar/>
            <Header/>
            <Outlet />
            <Cart />
            <Footer/>
        </div>
    );
};
