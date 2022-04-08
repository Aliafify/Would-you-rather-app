import { SET_AUTHED_US , RESET_AUTHED_US } from "../actions/authedUs";

export default function authedUser ( state = null , action ) {
    switch(action.type) {
        case SET_AUTHED_US : 
            return action.id
        case RESET_AUTHED_US : 
            return null
        default : 
            return state
    }
}
