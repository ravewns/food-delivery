import {useContext} from "react";
import {ThemeContext} from "../theme-context/index.jsx";

export const ThemeButton = () => {
    const {setTheme} = useContext(ThemeContext);
    const handleClick = () => setTheme((current) => current === 'dark' ? 'light' : 'dark');

    return (
        <button onClick={handleClick}>Toggle</button>
    )
}