import {ThemeButton} from "../theme-button/theme-button.jsx";
import {AuthButton} from "../auth-button/auth-button.jsx";

export const Header = () => {
    return (
        <div>
            <AuthButton/>
            header
            <ThemeButton/>
        </div>
    )
}