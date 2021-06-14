import React from 'react'
import Bg from '../assets/img/img-01.png';
import {useHistory} from 'react-router';
import { useState } from 'react';
import { userRegister } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';
function Signup() {
    const dispatch = useDispatch()
    
const [registerData, setRegisterData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    password:""
})
    const handleChange = (e) =>{
        const { name, value } = e.target
        setRegisterData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleRegister = React.useCallback((e) => {
        e.preventDefault();
        userRegister(registerData)(dispatch);

    }, [registerData, dispatch]);
    const history = useHistory();
    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={Bg} alt="IMG" />
                        </div>

                        <form onSubmit={handleRegister} className="login100-form validate-form">
                            <span className="login100-form-title">
                                Sign Up
                            </span>
                            <div className="wrap-input100 validate-input">
                                <input className="input100" type="text" name="username" defaultValue={registerData.username} onChange={handleChange} placeholder="Username" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="First Name is required">
                                <input className="input100" type="text" name="firstname" defaultValue={registerData.firstname} onChange={handleChange} placeholder="First Name" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-info" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Last Name is required">
                                <input className="input100" type="text" name="lastname" defaultValue={registerData.lastname} onChange={handleChange} placeholder="Last Name" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-info" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" defaultValue={registerData.email} onChange={handleChange} placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="">
                                <input className="input100" type="number" name="phoneNumber" inputMode="numeric" defaultValue={registerData.phoneNumber} onChange={handleChange} placeholder="Phone Number" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="password" defaultValue={registerData.password} onChange={handleChange} placeholder="Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Sign Up
                                </button>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" onClick={()=>history.push('/')} style={{cursor:'pointer'}}>
                                    Have already account?
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
