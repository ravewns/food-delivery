import {ProgressBar} from "../ProgressBar/ProgressBar.jsx";
import {Header} from "../header/header.jsx";
import {Footer} from "../footer/footer.jsx";

export const Layout = ({children}) => {
    return (
        <div>
            <ProgressBar/>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};
