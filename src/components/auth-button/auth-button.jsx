import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";
import {Button} from "../button/button.jsx";
import styles from './auth-button.module.css'

export const AuthButton = () => {
    const {state, login, logout} = useContext(AuthContext);

    const handleAuthClick = () => {
        if (state.isAuth) {
            logout();
        } else {
            login("Дмитрий");
        }
    };

    return (
        <div className={styles.auth}>
            <Button onClick={handleAuthClick}>{state.isAuth ? 'Выйти' : 'Войти'}</Button>
            {state.isAuth && <div className={styles.authName}>{state.user}</div>}
        </div>
    )
}