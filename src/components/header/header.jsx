import {ThemeButton} from "../theme-button/theme-button.jsx";
import {AuthButton} from "../auth-button/auth-button.jsx";
import styles from './header.module.css'

export const Header = () => {
    return (
        <div className="container">
            <h1 className={styles.headerLogo}>Food-Delivery Service</h1>
            <AuthButton/>
            <ThemeButton/>
        </div>
    )
}