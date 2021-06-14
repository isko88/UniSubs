
const INITIAL_STATE = []
export const socialReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_SOCIAL_SUBS":
            return action.payload;
        default:
            return state;
    }

}