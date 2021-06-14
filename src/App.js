import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Subscriptions from 'pages/Subscriptions';
import 'assets/styles/tailwind.css';
import Login from './components/Login';
import Signup from './components/Signup';
import NotFound from 'components/NotFound';
import React from 'react';
import { useState } from 'react';
import { getCards } from 'redux/actions/cardActions';
import { useDispatch } from 'react-redux';
import { getUser } from 'redux/actions/userActions';
import { getSubscriptions } from 'redux/actions/subscriptionActions';
import { getSocialSubs } from 'redux/actions/mediaActions';

function App() {
    const dispatch = useDispatch()
    const isLogined = localStorage.username ? true : false;

    const [userLogined, setUserLogined] = useState(isLogined)
    if(isLogined){
        getSocialSubs(localStorage.username)(dispatch);
        getCards(localStorage.username)(dispatch);
        getUser(localStorage.username)(dispatch);
        getSubscriptions(localStorage.username)(dispatch)
       
        
    }
    return (
        <><Router>
            
            {!userLogined? <><Route exact path="/" component={Login}/> <Route exact path="/register" component={Signup} />
            
            </> :(
                <>
                
                 <Sidebar />
                 <div className="md:ml-64">
                         <Switch>
                             
                             <Route exact path="/" component={Dashboard} />
                             <Route exact path="/settings" component={Settings} />
                             <Route exact path="/tables" component={Tables} />
                             <Route exact path="/subscriptions" component={Subscriptions} />
                             <Route exact path="*">
                                 <NotFound/>
                             </Route>
                             
                         </Switch>
                    
                 </div>
               
                 </>
            )}
         
            
            </Router>
          
        
        </>
    );
}

export default App;
