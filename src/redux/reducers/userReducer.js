const INITIAL_STATE = {
    "id": 0,
    "username": '',
    "firstname":"",
    "lastname":"",
    "email": '',
    "mobNumber":""
}

export const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER_LOGIN":
        
            return action.payload;
            
        case "USER_LOGOUT":
            return INITIAL_STATE;
        case "USER_REGISTER":
            return action.payload;
        case "USER_UPDATE":
            return action.payload;
        case "GET_USER":
            return action.payload;
        default:
            return state;
    }
}