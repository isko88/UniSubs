import { data } from 'autoprefixer';
import axios from 'axios';
import Swal from 'sweetalert2';
const API = 'http://007638d68329.ngrok.io/api';

export const getCards = (username) => {
    return (dispatch) => {
        console.log("bura girdi",username)
        return axios.get(`${API}/${username}/cards`).then(
            ({ data }) => {dispatch({ type: "GET_CARDS", payload: data });
            return data;}
        );
    };
};

export const addCard = (username,card) => {
    return (dispatch) => {
        return axios.post(`${API}/${username}/cards`, card)
        .then(({ data }) => {
            Swal.fire("Successfully","Your new card added to list","success")
            dispatch({ type: "ADD_CARD", payload: data })},
        );
    };
};

export const updateCard = (cardId) => {
    return (dispatch) => {
        return axios.put(API, cardId)
        .then(({ data }) => dispatch({ type: "UPDATE_CARD", payload: data }),
        );
    };
};

export const deleteCard = (username,cardId) => {
    console.log(username,cardId,"deletecard action");
    return (dispatch) => {
        return axios.delete(`${API}/${username}/cards/${cardId}`)
        .then(({ data }) => {
            Swal.fire("Successfully","Your card deleted","success");
            dispatch({ type: "DELETE_CARD", payload: cardId })},
        ).catch(err=>console.log(err.message))
    };
}