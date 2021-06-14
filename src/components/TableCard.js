import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import React from 'react';
import { useState } from 'react';
import { addCard } from 'redux/actions/cardActions';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCard } from 'redux/actions/cardActions';

export default function CardTable() {
  const dispatch = useDispatch();
  const cards = useSelector(state => state.Card);
  const [newCard, setNewCard] = useState({
    number: "",
    bankName: "",
    expiryDate: "",
    type: ""
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCard(prev => ({
      ...prev,
      [name]: value
    }))
  };
const [deleted, setdeleted] = useState(false)
  const handleAddCard = React.useCallback((e) => {
    e.preventDefault();
    addCard(localStorage.username,newCard)(dispatch)
  }, [newCard, dispatch])

  const handleRemove = (e)=>{
    const removeCardId = e.target.parentElement.getAttribute("data-id");
    deleteCard(localStorage.username,removeCardId)(dispatch);
    setdeleted(true);
  }
  React.useEffect(() => {
    if (document.querySelector("#tableFresh") && document.querySelector("#tableFresh").remove() || !document.querySelector("#tableFresh") ) {

    const script = document.createElement("script");
    script.src = "./assets/js/card.js";
    script.async = true;
    document.body.append(script);
    }
  }, [])
  return (

    <Card>
      <CardHeader color="purple" contentPosition="left">
        <h2 className="text-white text-2xl">Card Table</h2>
        <button type="button" className="btn btn-light" data-toggle="modal" data-target="#exampleModalCenter" style={{ position: 'absolute', right: '7%', border: '1px solid white', color: 'white' }}>+ Add new card</button>
        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">Add New Card</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleAddCard}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputCardNumber1" className="form-label" style={{ color: 'gray' }}>Card Number</label>
                    <input type="text" name="number" pattern="\d*" maxLength="16"  onChange={handleChange} name="number" className="form-control" id="exampleInputCardNumber1" aria-describedby="cardNumberHelp" required={true} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputCardName1" className="form-label" style={{ color: 'gray' }}>Card Name</label>
                    <input type="text" name="bankName" onChange={handleChange} className="form-control" id="exampleInputCardName1" aria-describedby="cardNameHelp" required={true} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputExpDate1" className="form-label" style={{ color: 'gray' }}>Expiry date</label>
                    <input type="date" name="expiryDate" onChange={handleChange} className="form-control" id="exampleInputExpDate1" aria-describedby="expDateHelp" required={true} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputCardType1" className="form-label" style={{ color: 'gray' }}>Card type</label>
                    <select className="form-select" name="type" defaultValue={newCard.type} onChange={handleChange} aria-label="Default select example" required={true} style={{ color: 'gray', borderRadius: '17px', border: '2px solid #d6d6d6', width: '100%', padding: '7px 0' }}>
                      <option value={newCard.type} disabled>Select card type</option>
                      <option value="VISA">Visa</option>
                      <option value="MASTERCARD">Master card</option>
                    </select>
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
                        <th data-field="name" data-sortable="true">Card Number</th>
                        <th data-field="salary" data-sortable="true">Bank Name</th>
                        <th data-field="country" data-sortable="true">Expiry Date</th>
                        <th data-field="city" data-sortable="true">Card Type</th>
                        <th data-field="actions">Actions</th>
                      </tr>

                    </thead>
                    <tbody>
                      <tr></tr>
              
                      {cards.map((s,idx)=>(
                       
                      <tr key={s.id}>
                        <td>{idx+1}</td>
                        <td>{s.number}</td>
                        <td>{s.bankName}</td>
                        <td>{s.expiryDate}</td>
                        <td>{s.type}</td>
                        <td data-id={s.id}><i  className="fa fa-edit" style={{cursor:"pointer"}}></i> <i onClick={handleRemove} className="fas fa-trash" style={{cursor:"pointer"}}></i></td>
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
