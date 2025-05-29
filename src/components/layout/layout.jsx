import {ProgressBar} from "../ProgressBar/ProgressBar.jsx";

export const Layout = ({children}) => {
    return (
        <div>
            <ProgressBar/>
            <header>header</header>
            {children}
            <footer>footer</footer>
        </div>
    );
};
