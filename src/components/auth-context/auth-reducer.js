export const initialState = {
    isAuth: false,
    user: '',
};

export function reducer(state, action) {
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
