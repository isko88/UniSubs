import axios from 'axios';
import Swal from 'sweetalert2';
export const API = 'http://007638d68329.ngrok.io/api';

export const getSubscriptions = (username,) => {
    return (dispatch) => {
        return axios.get(`${API}/${username}/subs`).then(
            ({ data }) => dispatch({ type: "GET_SUBSCRIPTIONS", payload: data }),
        );
    };
};

export const addSubscription = (username,subscription) => {
    return (dispatch) => {
        return axios.post(`${API}/${username}/subs`, subscription)
        .then(({ data }) => dispatch({ type: "ADD_SUBSCRIPTION", payload: data }),
        );
    };
};

export const deactiveSubscription = (subId) => {
    return (dispatch) => {
        return axios.post(`${API}`, subId)
        .then(({ data }) => dispatch({ type: "DEACTIVE_SUBSCRIPTION", payload: data }),
        );
    };
};

export const deleteSubscription = (username,subId) => {
    return (dispatch) => {
        return axios.delete(`${API}/${username}/subs/${subId}`)
        .then(({ data }) => {
            Swal.fire("Successfully","Your subscribe deleted","success");
            dispatch({ type: "DELETE_SUBSCRIPTION", payload: data })},
        );
    };
}

