import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";

export const AuthButton = () => {
    const {isAuth, user, login, logout} = useContext(AuthContext);

    const handleAuthClick = () => {
        if (isAuth) {
            logout();
        } else {
            login("Дмитрий");
        }
    };

    return (
        <>
            <button onClick={handleAuthClick}>{isAuth ? 'Выйти' : 'Войти'}</button>
            {isAuth && <div>{user}!</div>}
        </>
    )
}