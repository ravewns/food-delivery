import {useState} from "react";
import {AuthContext} from "./index.jsx";

export const AuthContextProvider = ({children}) => {
    const [isAuth, setAuth] = useState(false);
    const [user, setUser] = useState('');

    const login = (name) => {
        setAuth(true);
        setUser(name);
    };

    const logout = () => {
        setAuth(false);
        setUser(null);
    };

    return <AuthContext value={{isAuth, setAuth, user, login, logout}}>{children}</AuthContext>
}