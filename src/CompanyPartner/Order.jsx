import React, { Fragment } from 'react'
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Link, NavLink } from 'react-router-dom';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { useAuth } from '../Services/auth';
const Order = () => {
  const user = useAuth();
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
              <p
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
                    {user.company_name}
                  </span>
                ) : (
                  "Guest"
                )}
              </p>
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
            <>
              <p>hello</p>
            </>
          </div>
        </section>
      </main>
    </Fragment>
  )
}

export default Order