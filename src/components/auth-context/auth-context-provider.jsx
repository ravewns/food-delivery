import {useReducer} from "react";
import {AuthContext} from "./index.jsx";

export const AuthContextProvider = ({children}) => {
    const initialState = {
        isAuth: false,
        user: '',
    };

    function reducer(state, action) {
        switch (action.type) {
            case 'SET_AUTH':
                return {
                    ...state,
                    isAuth: action.payload,
                };
            case 'SET_NAME':
                return {
                    ...state,
                    user: action.payload,
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const login = (name) => {
        dispatch({type: 'SET_AUTH', payload: true});
        dispatch({type: 'SET_NAME', payload: name});
    };

    const logout = () => {
        dispatch({type: 'SET_AUTH', payload: false});
        dispatch({type: 'SET_NAME', payload: null});
    };

    return <AuthContext value={{state, dispatch, login, logout}}>{children}</AuthContext>
}