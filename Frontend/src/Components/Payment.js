//  import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
 import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
 import {useSelector } from 'react-redux'


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  

export default function Payment() {

    const productData = useSelector((state)=> state.productsReducer)
    console.log(productData)

    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
  
      setOpen(false);
    };
  

    const [form, setForm] = useState({
        firstname: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        nameoncard: '',
        cardnumber: '',
        expirydate: '',
        cvv: ''
    })
    const [count, setCount] = useState(1)
    const updateForm = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-8 m-auto">
                    <form>
                        <h2 className="text-center">Checkout</h2>
                        <div className="d-flex justify-content-between">
                            <span>Booking address</span>
                            <span>Payment details</span>
                            <span>Review your booking</span>
                        </div>
                        {count === 1 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Booking address</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.firstname} name="firstname" className="form-control" placeholder="First name*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.lastname} name="lastname" className="form-control" placeholder="Last name*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address1} name="address1" className="form-control" placeholder="Address line 1*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2"><input type="text" value={form.address2} name="address2" className="form-control" placeholder="Address line 2" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.city} name="city" className="form-control" placeholder="City *" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.state} name="state" className="form-control" placeholder="State/Province*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.zip} name="zip" className="form-control" placeholder="Zip / Postal code*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.country} name="country" className="form-control" placeholder="Country*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked" /> Use this address for payment details
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>) : null}
                        {count === 2 ? (
                            <div className="border table-borderless">
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <td colSpan="2"><h4>Payment Method</h4></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.nameoncard} name="nameoncard" className="form-control" placeholder="name on card*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cardnumber} name="cardnumber" className="form-control" placeholder="card number*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td><input type="text" value={form.expirydate} name="expirydate" className="form-control" placeholder="expiry date*" onChange={updateForm} /></td>
                                            <td><input type="text" value={form.cvv} name="cvv" className="form-control" placeholder="cvv*" onChange={updateForm} /></td>
                                        </tr>
                                        <tr>
                                            <td colSpan="2">
                                                <input type="checkbox" name="checked" /> Remember credit card details for next time
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        ) : null}
                        {count === 3 ? (
                            <div className="border table-borderless">
                                <div>
                                    <h4>Booking Summary</h4>
                                    <div className="row">
                                        <div className="col-9 m-auto">
                                            <div className="d-flex justify-content-between">
                                                <p>{productData.productDetail.name}</p><br />
                                                <p>{productData. productDetail.price}</p>

                                            </div>
                                            {/* <div className="d-flex justify-content-between">
                                                <p>3-days 2-nights stay</p>

                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Checkin-24th Aug 2021</p>

                                            </div>
                                            <div className="d-flex justify-content-between">
                                                <p>Checkout- 27th Aug 2021</p>

                                            </div> */}
                                            <hr />

                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                        {count === 3 ? (
                            <div>
                             <Button variant="outlined" onClick={handleClick}>
                                   Confirm Booking
                                </Button>
                                <Link to="/">
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success">
                                            Booking done!! Thankyou, Enjoy the stay
                                        </Alert>
                                    </Snackbar>
                                    </Link>
                            </div>
                        ) : null}
                    </form>
                    <div>
                        {count === 1 ? null : (<button className="btn btn-outline-success" onClick={() => setCount(count - 1)}>Back</button>)}
                        {count === 3 ? null : (<button className="btn btn-outline-success" onClick={() => setCount(count + 1)} >Next</button>)}
                    </div>
                </div>
            </div>
        </div>
    )
}


