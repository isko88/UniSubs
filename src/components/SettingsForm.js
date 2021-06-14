import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Input from '@material-tailwind/react/Input';
import { useState } from 'react';
import React from 'react';
import { userUpdate } from 'redux/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

export default function SettingsForm() {
const dispatch = useDispatch();
    const userdetails = useSelector(state => state.User)
    const [updateAccountDetails, setUpdateAccountDetails] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phoneNumber:"",
        password:"",
    })
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setUpdateAccountDetails(prev=>({
            ...userdetails,
            [name]:value
        }))
    }

    const handleUpdateAccount = React.useCallback((e)=>{
        e.preventDefault();
        userUpdate(localStorage.username,updateAccountDetails)(dispatch)
    },[updateAccountDetails,dispatch])

    return (
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">My Account</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        Settings
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={handleUpdateAccount}>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        User Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                        
                            name="username"
                            defaultValue={userdetails.username}
                                type="text"
                                color="purple"
                                placeholder="Username"
                                disabled
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                            name="firstname"
                            defaultValue={userdetails.firstname}
                            onChange={handleChange}
                                type="text"
                                color="purple"
                                placeholder="First Name"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                            name="lastname"
                            defaultValue={userdetails.lastname}
                            onChange={handleChange}
                                type="text"
                                color="purple"
                                placeholder="Last Name"
                            />
                        </div>

                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                            name="password"
                            defaultValue=""
                            onChange={handleChange}
                                type="password"
                                color="purple"
                                placeholder="Password"
                                
                            />
                        </div>


                    </div>

                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        Contact Information
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                             defaultValue={userdetails.email}
                                type="email"
                                onChange={handleChange}
                                color="purple"
                                placeholder="Email Address"
                                name="email"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                type="text"
                                defaultValue={userdetails.phoneNumber}
                                onChange={handleChange}
                                color="purple"
                                placeholder="Phone Number"
                                name="phoneNumber"
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary " style={{ margin: '10px' }}>Update My Account</button>
                </form>
            </CardBody>
        </Card>
    );
}
