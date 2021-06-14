import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


export const AuthRouter = ({ children, ...rest }) => {
    const {userReducer} = useSelector((state) => state)

    return userReducer.id !== 0 ? (
        <Route {...rest}>
            {children}
        </Route>
    ) : <Redirect to="/login" />
}
