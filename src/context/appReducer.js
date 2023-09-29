import { types } from "./types";


export const AppReducer = (state = {}, action) => {

    switch (action.type) {

       

        case types.LOGIN:
            return {
                ...state,
                isLogged: true,
                user: action.payload
            }

       
        default:
            break;
    }
}
