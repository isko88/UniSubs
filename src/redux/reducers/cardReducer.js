

const INITIALSTATE = [];

export const cardReducer = (state = INITIALSTATE, action) => {
    console.log(action,"cardRedcuer");
    switch (action.type) {
        
        case "GET_CARDS":
            console.log("reducere de girdi")
            return [
                ...action.payload,
               
            ]
        case "ADD_CARD":
            return [
                ...state,
                action.payload
            ]
        case "UPDATE_CARD":
           return state ; //Burda kartin update olacaq. hazir deyil 
      
        case "DELETE_CARD":
            return state.filter(card => card.id !== action.payload);
        default:
            return state;
    }
}