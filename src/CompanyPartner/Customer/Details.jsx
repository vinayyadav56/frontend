import React, { Fragment, useEffect, useState } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
const Details = () => {
    // GET DATA FROM LOCAL STORAGE
    const getdata = () => {
        const order = localStorage.getItem('data');
        if (order) {
            return JSON.parse(order);
        } else {
            return []
        }
    }
    const [data, setData] = useState(getdata());
    const [receiver_name, setReceiver_name] = useState('')
    const [receiver_email, setReceiver_email] = useState('')
    const [receiver_contact_no, setReceiver_contact_no] = useState('')
    const [receiver_house_number, setReceiver_house_number] = useState('')
    const [receiver_locality, setReceiver_locality] = useState('')
    const [receiver_city, setReceiver_city] = useState('')
    const [receiver_state, setReceiver_state] = useState('')
    const [receiver_pincode, setReceiver_pincode] = useState('')

    const handleCustomerOrder = (e) => {
        e.preventDefault();
        let orders = {
            receiver_name,
            receiver_email,
            receiver_contact_no,
            receiver_house_number,
            receiver_locality,
            receiver_city,
            receiver_state,
            receiver_pincode
        }
        setData([...data, orders]);
        setReceiver_name('');
        setReceiver_email('');
        setReceiver_contact_no('');
        setReceiver_house_number('');
        setReceiver_locality('');
        setReceiver_city('');
        setReceiver_state('');
        setReceiver_pincode('')
    }

    const deleteCustomer = (receiver_name) => {
        const filteredUser = data.filter((element, index) => {
            return element.receiver_name !== receiver_name
        })
        setData(filteredUser);
    }
     
    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data));
    }, [data])

    return (
        <Fragment>
            <form autoComplete='off' className="order-dis">
                <div className="form-group row px-0 pt-2">
                    <div className="col-md-4">
                        <label htmlFor="inputname">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="receiver_name"
                            placeholder="Enter Name"
                            value={receiver_name}
                            onChange={(e) => setReceiver_name(e.target.value)}
                            autoComplete="off"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputemail">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="receiver_email"
                            value={receiver_email}
                            onChange={(e) => setReceiver_email(e.target.value)}
                            autoComplete="off"
                            placeholder="Enter email"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputphone">Mobile No.</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputphone"
                            onChange={(e) => setReceiver_contact_no(e.target.value)}
                            value={receiver_contact_no}
                            name="receiver_contact_no"
                            placeholder="Enter mobile number"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputhno">House No</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputhno"
                            name="receiver_house_number"
                            value={receiver_house_number}
                            onChange={(e) => setReceiver_house_number(e.target.value)}
                            placeholder="Enter House No"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputlocality">Locality</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputlocality"
                            placeholder="Enter Locality"
                            name="receiver_locality"
                            value={receiver_locality}
                            onChange={(e) => setReceiver_locality(e.target.value)}
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputpin">Pincode</label>
                        <input
                            type="number"
                            className="form-control"
                            id="inputpin"
                            name="receiver_pincode"
                            value={receiver_pincode}
                            onChange={(e) => setReceiver_pincode(e.target.value)}
                            placeholder="Enter PIN"
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity">City</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputCity"
                            name="receiver_city"
                            value={receiver_city}
                            onChange={(e) => setReceiver_city(e.target.value)}
                            placeholder="Enter city"
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputstate">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputstate"
                            placeholder="Enter state"
                            name="receiver_state"
                            value={receiver_state}
                            required
                            onChange={(e) => setReceiver_state(e.target.value)}
                        />
                    </div>
                </div>
                <div className="d-flex jutify-content-center pb-3">
                    <button type="submit" onClick={handleCustomerOrder} className="btn btn-danger mx-auto">
                        Save Details
                    </button>
                </div>
            </form>
            <div className='order-dis px-5 py-2'>
                <div className="table-responsive">
                    {data.length > 0 && <>
                        <table className="table table-hover table-striped table-bordered table-sm">
                            <thead className="dark">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Contact</th>
                                    <th scope="col">House No.</th>
                                    <th scope="col">Locality</th>
                                    <th scope="col">Pincode</th>
                                    <th scope="col">City</th>
                                    <th scope="col">State</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((index, id) => {
                                        return (
                                            <tr key={id}>
                                                <td>{index.receiver_name}</td>
                                                <td>{index.receiver_email}</td>
                                                <td>{index.receiver_contact_no}</td>
                                                <td>{index.receiver_house_number}</td>
                                                <td>{index.receiver_locality}</td>
                                                <td>{index.receiver_pincode}</td>
                                                <td>{index.receiver_city}</td>
                                                <td>{index.receiver_state}</td>
                                                <td>
                                                    <RemoveCircleOutlineIcon onClick={() => deleteCustomer(index.receiver_name)} style={{ color: 'red', cursor: 'pointer', backGround: 'red', marginLeft: '1rem' }} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                        {/* <button type='button' className='btn btn-primary mx-auto' onClick={()=>setData([])}>Delete All</button> */}
                    </>}

                    {data.length < 1 && <div className='d-flex justify-content-center'><p style={{ fontSize: '14px', fontWeight: 600 }}>No Details Yet</p></div>}
                </div>
            </div>

        </Fragment>
    )
}

export default Details