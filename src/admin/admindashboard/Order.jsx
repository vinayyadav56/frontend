import React from "react";
import { Link } from "react-router-dom";
import "./Adminmenu.css";
import navArray from "./navArray";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import UserOrder from "./UserOrder";
const Order = () => {
  return (
    <div>
      <nav className="sticky-top partnerdash-nav">
        <div className="partner-sidebar">
          <span className="top-name">Carry Kar</span>
          <div className="search-bar">
            <SearchSharpIcon />
            <input type="search" placeholder="Search" />
          </div>
          <div className="profile-area">
            <div className="profile">
              <div className="profile-photo">
                <AccountCircleRoundedIcon />
              </div>

              <div className="dropdown show">
                <Link
                  className="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>User Name</span>
                </Link>

                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <Link className="dropdown-item" to="/admin">
                    Logout
                  </Link>
                  <Link className="dropdown-item" to="/">
                    Change Profile
                  </Link>
                  <Link className="dropdown-item" to="/setting">
                    Setting
                  </Link>
                </div>
              </div>
            </div>
            <button id="menu-btn">
              <MenuRoundedIcon />
            </button>
          </div>
        </div>
      </nav>
      {/* <main>
        <aside>
          <div className="sidebar">
            <button id="close-btn">
              <CloseRoundedIcon />
            </button>
            <div className="responsive-sidebar">
              <Link to="/admindashboard" className="active">
                <span className="icon">
                  <GridViewRoundedIcon />
                </span>
                <h4 className="title">Dashboard</h4>
              </Link>

              {navArray.map((data, id) => {
                return (
                  <li key={id}>
                    <Link to={data.link}>
                      <span className="icon">{data.icon}</span>
                      <h4 className="title">{data.nav}</h4>
                    </Link>
                  </li>
                );
              })}
            </div>
          </div>
        </aside>
        <section className="right">
            <UserOrder/>
        </section>
      </main> */}
    </div>
  );
};

export default Order;