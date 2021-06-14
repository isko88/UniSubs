import axios from "axios";
import { API } from "./subscriptionActions";

export const getSocialSubs = (username) => {
    return (dispatch) => {
        return axios.get(`${API}/${username}/subs/socials`)
        .then(({ data }) => dispatch({ type: "GET_SOCIAL_SUBS", payload: data }),
        );
    };
}