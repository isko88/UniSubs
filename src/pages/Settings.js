import StatusCard from 'components/StatusCard';
import SettingsForm from 'components/SettingsForm';
import { useSelector } from 'react-redux';

export default function Dashboard() {
    const subs = useSelector(state => state.Subscription)
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-3 md:px-8 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="pink"
                            icon="trending_up"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                     <StatusCard
                            color="orange"
                            icon="groups"
                            title="Subscriptions"
                            amount={`${subs.length}`}
                            percentage=""
                            percentageIcon=""
                            percentageColor="red"
                            date=""
                        />
                     <StatusCard
                            color="purple"
                            icon="paid"
                            title="Subscription Total Price"
                            amount={`${Math.floor(subs.reduce((acc, item) => acc + item.price , 0))}   AZN`}
                            percentage=""
                            percentageIcon=""
                            percentageColor="orange"
                            date=""
                        />
                        <StatusCard
                            color="blue"
                            icon="poll"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-3 md:px-8 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-6">
                        <div className="xl:col-start-1 xl:col-end-12 px-4 mb-16">
                            <SettingsForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
