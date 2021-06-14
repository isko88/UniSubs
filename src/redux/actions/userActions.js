import App from 'App';
import axios from 'axios';
import Swal from 'sweetalert2';
import { getSubscriptions } from './subscriptionActions';
const API = 'http://007638d68329.ngrok.io/api';

export const userRegister = (user) => {
    return (dispatch) => {
        console.log(user,"geden userin datası")
        return axios.post(`${API}/register`, user).then(
            ({ data }) => {
                dispatch({ type: "USER_REGISTER", payload: data });
                return data;
            },
        ).then((data) => {
            Swal.fire('Welcome', `${data.firstname}`, 'success');
            localStorage.username = data.username;
            getSubscriptions(data.id);
            return data;
        })
            .catch(
                err => {
                    Swal.fire('', `${err}`, 'error');
                    return err.message;
                });
    };
};

export const userLogin = (user) => {
    console.log(user,"userdi")
    return (dispatch) => {      
        return axios.post(`${API}/login`,user).then(
            ({ data }) => {
                dispatch({ type: "USER_LOGIN", payload: data });
                return data;
            }
        )
        .then((data) => {
            Swal.fire('Welcome', `${data.firstname} ${data.lastname}`, 'success');
            localStorage.username = data.username;
            
            getSubscriptions(data.username);
            window.location.reload()
            return data;
        })
        .catch(
            err => {  
                Swal.fire('', `Username Or Password is incorrect`, 'error');
                return err.message;
            }
        );
    };
};

export const userLogout = (id) => {
    return (dispatch) => {
        return axios.get(`${API}/logout`).then(
            ({ data }) => {
                dispatch({ type: "USER_LOGOUT", payload: data });
            }
        ).catch(
            err => {
                return err.message;
            }
        );
    };
}

export const userUpdate = (username,updateAccountDetails) => {
    console.log(updateAccountDetails,"elediki var")
    return (dispatch) => {
        return axios.put(`${API}/${username}`,updateAccountDetails).then(
            ({ data }) => {
                dispatch({ type: "USER_UPDATE", payload: data });
                Swal.fire('', `Your account has been successfully updated`, 'success');
            }
        ).catch(
            err => {
                return err.message;
            }
        );
    };
}

export const getUser = (username) =>{
    return (dispatch) =>{
        return axios.get(`${API}/${username}`)
        .then(({data})=>{
            dispatch({type:"GET_USER",payload:data})
        })
        .catch(err=>err.message)
    }
}

