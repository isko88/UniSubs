import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Progress from '@material-tailwind/react/Progress';
import { useDispatch, useSelector } from 'react-redux';
import { getSocialSubs } from 'redux/actions/subscriptionActions';
import React from 'react';
import moment from 'moment';

export default function TrafficCard() {
    const socSubs = useSelector(state => state.Media)
    // const dispatch = useDispatch()
    // React.useEffect(() => {

    // }, [getSocialSubs])
    return (
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Social Media</h2>
                </div>
            </CardHeader>
            <CardBody>

                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead className="thead-light">
                            <tr>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Media
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Price
                                </th>
                                <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left w-56"></th>
                            </tr>
                        </thead>
                        <tbody>
  
                            {socSubs && socSubs.map((social, idx) => {
                                const now = moment().unix();
                                const startDate = moment(social.subDate).unix();
                                const endDate = moment(social.renewDate).unix() || now;
                                const percentage = Math.floor((now - startDate) / (endDate - startDate) * 100)
                                let color = "";
                                if(percentage >=90 ){
                                    color = "red"
                                }else if(percentage >= 80 ){
                                    color = "blue"
                                }else if(percentage >= 60){
                                    color = "indigo"
                                }else if(percentage <= 50){
                                    color = "lightGreen"
                                }
                                return (<tr key={social.id}>
                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {social.item.replace(/\b\w/g, l => l.toUpperCase())}
                                    </th>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        {social.price}
                                    </td>
                                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                        <Progress color={color} value={`${percentage}`} />
                                    </td>
                                </tr>)
                            }

                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
