import React, { Fragment } from "react";
import { Link , Redirect} from "react-router-dom";
import "./Adminmenu.css";
import "../../partner/Partnerdash.css"
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
// import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
// import Table from "./Table";
// import UserData from "./UserData";
import {useAuth} from "../../Services/auth";
import AllDetails from './UsersTabs'
import AdminSidebar from "./AdminSidebar";
// import UserOrder from "./UserOrder";

const AdminDashboard = () => {
  const auth = useAuth();

  if(!auth.isAuthenticated()){
    return <Redirect to="/admin" />
  }

  return (
    <Fragment>
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
                  to="#"
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
      <main>
        <aside>
         <AdminSidebar/>
        </aside>

        <section className="right">
          <AllDetails />
        </section>
      </main>
    </Fragment>
  );
};

export default AdminDashboard;
