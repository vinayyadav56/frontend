import React, { Fragment, useEffect, useState } from 'react';
import "../partner/Partnerdash.css";
import { useAuth } from "../Services/auth";
import { useAlert } from 'react-alert';
import { postRequest } from '../Services/api';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import AddIcon from '@mui/icons-material/Add';
import Details from './Customer/Details';
const CompanyDashboard = () => {
    const { user, setLoading } = useAuth();
    let alert = useAlert();
    const [createorder, setCreateorder] = useState(
        {
            sender_details: {
                sender_name: '',
                sender_email: '',
                sender_contact_no: '',
                address: {
                    sender_house_number: '',
                    sender_locality: '',
                    sender_city: '',
                    sender_state: '',
                    sender_pincode: ''
                }
            },
            package_details: {
                package_size: '',
                package_dimension: ''
            }
        }
    );



    const handleCreateinput = (e, key = null, subkey = null) => {
        const { name, value } = e.target;

        if (key != null && subkey == null) {
            setCreateorder({
                ...createorder,
                [key]: {
                    ...createorder[key],
                    [name]: value
                }
            })
        } else if (key != null && subkey != null) {
            setCreateorder({
                ...createorder,
                [key]: {
                    ...createorder[key],
                    [subkey]: {
                        ...createorder[key][subkey],
                        [name]: value
                    }
                }
            })
        } else {
            setCreateorder({
                ...createorder,
                [name]: value
            });
        }
    };

    useEffect(() => {
    }, [createorder])

    // PARTNER ORDER API FUNCTION
    const handleOrder = async (e) => {
        e.preventDefault();
        setLoading(true);
        postRequest('createNewOrderPartner', createorder).then(result => {
            alert.success(result.message);
        }).catch(error => {
            alert.error(error.message);
        }).finally(() => {
            setLoading(false);
        });
    };
    return (
        <Fragment>
            <nav className="sticky-top partnerdash-nav ">
                <div className="partner-sidebar">
                    <Link to='/'>
                        <span className="top-name">Carry Kar</span>
                    </Link>
                    <div className="search-bar">
                        <SearchSharpIcon />
                        <input type="search" placeholder="Search" />
                    </div>
                    <div className="profile-area">
                        <div className="profile">
                            <div className="profile-photo">
                                <AccountCircleRoundedIcon className="pb-1" />
                            </div>
                            <div className="dropdown show">
                                <NavLink
                                    className="btn dropdown-toggle "
                                    to="/partner/profile"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {user && user.id ? (
                                        <span>
                                            {user.partner_name}
                                        </span>
                                    ) : (
                                        "Guest"
                                    )}
                                </NavLink>

                                <div
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuLink"
                                >
                                    <NavLink className="dropdown-item" to="/partner">
                                        Logout
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="/carrykar">
                                        Change Profile
                                    </NavLink>
                                    <NavLink className="dropdown-item" to="/setting">
                                        Setting
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <button id="menu-btn">
                            <MenuRoundedIcon />
                        </button>
                    </div>
                </div>
            </nav>
            <main>
                <aside>
                    <div className="sidebar">
                        <button id="close-btn">
                            <CloseRoundedIcon />
                        </button>
                        <div className="responsive-sidebar">
                            <li>
                                <NavLink to="/company/dashboard">
                                    <span className="icon">
                                        <GridViewRoundedIcon />
                                    </span>
                                    <h4 className="title">Dashboard</h4>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/company/order">
                                    <span className="icon">
                                        < StarBorderRoundedIcon />
                                    </span>
                                    <h4 className="title">Orders</h4>
                                </NavLink>
                            </li>
                        </div>
                    </div>
                </aside>
                <section className="right mt-3">
                    <div className="container order-cont">
                        <div className="form-title">
                            <h2>Create Order</h2>
                        </div>
                        <div className="order-sum">
                            <form className="order-dis" onSubmit={handleOrder}>
                                <div className="form-group row ">
                                    <div className="col-md-6 pl-0">
                                        <label htmlFor="inputsize">Size</label>
                                        <select id="inputsize" value={createorder.package_size} name="package_size" className="form-control"
                                            required type='Select' onChange={(e) => handleCreateinput(e, 'package_details')}>
                                            <option>Select Size</option>
                                            <option value="Extra Small" >Extra</option>
                                            <option value="Small" >Small</option>
                                            <option value="Medium" >Medium</option>
                                            <option value="Large" >Large</option>
                                            <option value="Extra Large" >Extra Large</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6 pr-0">
                                        <label htmlFor="inputquantity">Package Dimensions</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="Select Quantity"
                                            name="package_dimension"
                                            onChange={(e) => handleCreateinput(e, 'package_details')}
                                            value={createorder.package_dimension}
                                        ></input>
                                    </div>
                                </div>
                                <h2 className="sender-info">Sender Details :</h2>
                                <div className="form-group row">
                                    <div className="col-md-4">
                                        <label htmlFor="inputname">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="sender_name"
                                            placeholder="Enter Name"
                                            value={createorder.sender_name}
                                            onChange={(e) => handleCreateinput(e, 'sender_details')}
                                            autoComplete="off"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputemail">Email</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="sender_email"
                                            value={createorder.sender_email}
                                            onChange={(e) => handleCreateinput(e, 'sender_details')}
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
                                            onChange={(e) => handleCreateinput(e, 'sender_details')}
                                            value={createorder.sender_contact_no}
                                            name="sender_contact_no"
                                            placeholder="Enter mobile number"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputhno">House No</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputhno"
                                            name="sender_house_number"
                                            value={createorder.sender_house_number}
                                            onChange={(e) => handleCreateinput(e, 'sender_details', 'address')}
                                            placeholder="Enter House No"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputlocality">Locality</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputlocality"
                                            placeholder="Enter Locality"
                                            name="sender_locality"
                                            value={createorder.sender_locality}
                                            onChange={(e) => handleCreateinput(e, 'sender_details', 'address')}
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputpin">Pincode</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="inputpin"
                                            name="sender_pincode"
                                            value={createorder.sender_pincode}
                                            onChange={(e) => handleCreateinput(e, 'sender_details', 'address')}
                                            placeholder="Enter PIN"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputCity">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputCity"
                                            name="sender_city"
                                            value={createorder.sender_city}
                                            onChange={(e) => handleCreateinput(e, 'sender_details', 'address')}
                                            placeholder="Enter city"
                                        />
                                    </div>
                                    <div className="col-md-4">
                                        <label htmlFor="inputstate">State</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputstate"
                                            placeholder="Enter state"
                                            name="sender_state"
                                            value={createorder.sender_state}
                                            onChange={(e) => handleCreateinput(e, 'sender_details', 'address')}
                                        />
                                    </div>
                                </div>
                                <h2 className="sender-info d-flex justify-content-between mb-0">
                                    Customer Details
                                    <button className="btn btn-success py-0" type="button" data-toggle="collapse" data-target="#addcollapse" aria-expanded="false" aria-controls="addcollapse">
                                        <AddIcon />
                                    </button>
                                </h2>
                                <div className="collapse" id="addcollapse">
                                    <Details />
                                </div>
                                <div className="d-flex jutify-content-center py-3">
                                    <button type="submit" className="btn btn-info mx-auto">
                                        Create Order
                                    </button>
                                </div>

                            </form>

                        </div>
                    </div>
                </section>
            </main>
        </Fragment>
    )
}

export default CompanyDashboard