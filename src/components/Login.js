import React from 'react'
import Bg from "../assets/img/img-01.png";
import { useHistory } from 'react-router';
import { useState } from 'react';
import { userLogin } from 'redux/actions/userActions';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();
    const [loginData, setloginData] = useState({
        username: '',
        password: ''
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target
        setloginData((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleLogin = React.useCallback((e) => {
        e.preventDefault();
        userLogin(loginData)(dispatch);

    }, [loginData, dispatch]);
    return (
        <div>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt" data-tilt>
                            <img src={Bg} alt="IMG" />
                        </div>

                        <form onSubmit={handleLogin} className="login100-form validate-form">
                            <span className="login100-form-title">
                                Member Login
                            </span>

                            <div className="wrap-input100 validate-input" data-validate="Username is required">
                                <input className="input100" type="text" defaultValue={loginData.username} onChange={handleChange} name="username" placeholder="Username" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" defaultValue={loginData.password} onChange={handleChange} name="password" placeholder="Password" autoComplete="off"/>
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn">
                                    Login
                                </button>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" onClick={() => history.push('/register')} style={{ cursor: 'pointer' }}>
                                    Create your Account
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

export default Login
