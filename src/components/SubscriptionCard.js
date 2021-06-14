import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import React from 'react';
import { useState } from 'react';
import { addSubscription } from 'redux/actions/subscriptionActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getSubscriptions } from 'redux/actions/subscriptionActions';
import { deleteSubscription } from 'redux/actions/subscriptionActions';

export default function SubscriptionCard() {
    const dispatch = useDispatch();
    // React.useMemo(()=>{
    //     const linkcss =  document.createElement("link");
    //     linkcss.setAttribute("rel","stylesheet");
    //     linkcss.setAttribute("href","https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.4.1/css/bootstrap.min.css");
    //     linkcss.async = true;
    //     document.querySelector("head").append(linkcss);
    // })
    const subs = useSelector(state => state.Subscription);
    const cards = useSelector(state => state.Card)
    // getSubscriptions(localStorage.username)(dispatch);
    const [newSub, setNewSub] = useState({
        item: "",
        plan: "",
        price: "",
        cardId: "",
        subDate: "",
        website: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSub((prev) => ({
            ...prev,
            [name]: value
        }))
    }
    const handleNewSub = React.useCallback((e) => {
        e.preventDefault();
        addSubscription(localStorage.username, newSub)(dispatch);
    }, [newSub, dispatch])

    const handleRemove = React.useCallback((e)=>{
        const removeCardId = e.target.parentElement.getAttribute("data-id");
    
        console.log(removeCardId,"kartin idsi")
        deleteSubscription(localStorage.username,removeCardId)(dispatch)
      },[])


    React.useEffect(() => {
        if (document.querySelector("#tableFresh") && document.querySelector("#tableFresh").remove() || !document.querySelector("#tableFresh") ) {
        const script = document.createElement("script");
        script.id = "tableFresh";
        script.src = "./assets/js/card.js";
        script.async = true;
        document.body.append(script);
    }
        
       
    }, [])
    return (

        <Card>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Subscriptions Table</h2>
                <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModalCenter" style={{ position: 'absolute', right: '7%', border: '1px solid white', color: 'white' }}>+ New Subscription</button>
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLongTitle">Add New Subscription</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleNewSub}>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputItem1" className="form-label" style={{ color: 'gray' }}>Item</label>
                                        <input type="text" onChange={handleChange} defaultValue={newSub.item} name="item" className="form-control" id="exampleInputItem1" aria-describedby="itemHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputSubDate1" className="form-label" style={{ color: 'gray' }}>Subscription date</label>
                                        <input type="date" onChange={handleChange} defaultValue={newSub.subDate} name="subDate" className="form-control" id="exampleInputSubDate1" aria-describedby="subDateHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputPayment1" className="form-label" style={{ color: 'gray' }}>Payment Card</label>
                                        <select className="form-select" onChange={handleChange} defaultValue={newSub.cardId} name="cardId" aria-label="Default select example" style={{ color: 'gray', border: '1px solid #d6d6d6', width: '100%', padding: '7px 0' }}>
                                            <option value={newSub.cardId} disabled>Select payment card</option>
                                            {cards.map((c,idx)=>
                                            ( <option key={idx} value={c.id}>{c.number}</option>)
                                                )}
                                           
                                            {/* <option value="2">4169741344947223</option> */}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputWebsite1" className="form-label" style={{ color: 'gray' }}>Website</label>
                                        <input type="text" onChange={handleChange} name="website" className="form-control" id="exampleInputWebsite1" aria-describedby="websiteHelp" />
                                    </div>
                                    {/* <div className="mb-3">
                                        <label for="exampleInputSubDate1" className="form-label" style={{ color: 'gray' }}>Status</label>
                                        <select className="form-select" aria-label="Default select example" style={{ color: 'gray', border: '1px solid #d6d6d6', width: '100%', padding: '7px 0' }}>
                                            <option selected disabled>Select status</option>
                                            <option value="1">Active</option>
                                            <option value="2">Deactive</option>
                                        </select>
                                    </div> */}
                                    {/* <div className="mb-3">
                                        <label htmlFor="DeactivateDate" className="form-label" style={{ color: 'gray' }}>Deactivate date</label>
                                        <input type="date" onChange={handleChange} className="form-control" id="exampleInputDeactivateDate1" aria-describedby="deactivateDateHelp" />
                                    </div> */}

                                    <div className="form-row justify-content-between" style={{ margin: "0 3px" }}>
                                        <div className="mb-3">
                                            <label htmlFor="plan" className="form-label" style={{ color: 'gray' }}>Plan</label>
                                            <select id="plan" name="plan" defaultValue={newSub.plan} onChange={handleChange} className="form-select" aria-label="Default select example" style={{ color: 'gray', border: '1px solid #d6d6d6', width: '100%', padding: '7px 0' }}>
                                                <option defaultValue={newSub.plan} disabled>Select plan</option>
                                                <option value="weekly">Weekly</option>
                                                <option value="monthly">Monthly</option>
                                                <option value="annually">Annually</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label" style={{ color: 'gray' }}>Price (AZN)</label>
                                            <input type="number" name="price" defaultValue={newSub.price} onChange={handleChange} className="form-control" id="price" aria-describedby="priceHelp" />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary " style={{ margin: '10px' }}>Add</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardBody>
                <div className="wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 ml-0 col-md-offset-2">
                                <div className="fresh-table full-color-blue">
                                    <table id="fresh-table" className="table">
                                        <thead>
                                            <tr>
                                                <th data-field="id">ID</th>
                                                <th data-field="Item" data-sortable="true">Item</th>
                                                <th data-field="Plan" data-sortable="true">Plan</th>
                                                <th data-field="Price" data-sortable="true">Price</th>
                                                <th data-field="Website" data-sortable="true">Website</th>
                                                <th data-field="Card" data-sortable="true">Card</th>
                                                <th data-field="Subscription Date" data-sortable="true">Subscription Date</th>
                                                <th data-field="Expiry date" data-sortable="true">Expiry date</th>
                                                <th data-field="status" data-sortable="true">Status</th>
                                                <th data-field="actions" >Actions</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            <tr></tr>
                                            {subs.map((s, idx) =>
                                            (<tr key={s.id}>
                                                <td>{idx + 1}</td>
                                                <td>{s.item}</td>
                                                <td>{s.plan}</td>
                                                <td>{s.price}</td>
                                                <td>{s.website}</td>
                                                <td>{cards.find(c=>c.id === s.cardId).number}</td>
                                                <td>{s.subDate}</td>
                                                <td>{s.renewDate}</td>
                                                <td>{s.deactivated ? "Deactive" : "Active"}</td>
                                                <td data-id={s.id}><i className="fa fa-edit" style={{cursor:"pointer"}} ></i> <i onClick={handleRemove} className="fas fa-trash" style={{cursor:"pointer"}}></i>
                                                   </td>
                                            </tr>)

                                            )}

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}
