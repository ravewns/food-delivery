import {useContext} from "react";
import {AuthContext} from "../auth-context/index.jsx";

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
        <>
            <button onClick={handleAuthClick}>{state.isAuth ? 'Выйти' : 'Войти'}</button>
            {state.isAuth && <div>{state.user}</div>}
        </>
    )
}