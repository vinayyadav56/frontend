import React, { Fragment } from 'react'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { NavLink } from 'react-router-dom';
const Sidebar = () => {
    return (
        <Fragment>
            <aside>
                <div className="sidebar">
                    <button id="close-btn">
                        <CloseRoundedIcon />
                    </button>
                    <div className="responsive-sidebar">
                        <li>
                            <NavLink to="company/dashboard">
                                <h4 className="title">Dashboard</h4>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="company/order">
                                <h4 className="title">Orders</h4>
                            </NavLink>
                        </li>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}

export default Sidebar