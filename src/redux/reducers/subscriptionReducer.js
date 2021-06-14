

const INITIALSTATE = [];

export const subscriptionReducer = (state = INITIALSTATE, action) => {
    switch (action.type) {
        case "GET_SUBSCRIPTIONS":
            return [
                ...action.payload
            ]
        case "ADD_SUBSCRIPTION":
            return [
                ...state,
                action.payload
            ]
        case "DEACTIVE_SUBSCRIPTION":
            return state.map(sub => {
                if (sub.id === action.payload) {
                    sub.isActive = false;
                }
                return sub;
            })
        case "DELETE_SUBSCRIPTION":
            return state.filter(sub => sub.id !== action.payload);
        default:
            return state;
    }
}