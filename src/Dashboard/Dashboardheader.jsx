import React from "react";
import headericon from "../images/header-user-icon.png";
import SearchIcon from "@mui/icons-material/Search";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import bellicon from "../images/bellicon.png";
import logout from "../images/logout.png";
import { useAuth } from "../Services/auth";
import { Link, useHistory } from "react-router-dom";
const Header = ({ addUserLocal }) => {
  const { signout } = useAuth();
  const history = useHistory();
  const handleSignOut = () => {
    signout();
    return history.push("/");
  }
  return (
    <div>
      <nav className="navbar navbar-fixed dashboard-header">
        <h2>Carrier Profile</h2>
        <div className="search-dash d-flex align-items-center">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search here"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <SearchIcon />
              </span>
            </div>
          </div>
          <li>
            <img src={bellicon} alt="bell" />
          </li>
          <li>
            <div className="dropdown show">
              <button className="btn dropdown-toggle d-flex align-items-center" style={{ boxShadow: 'none' }} id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span className="d-flex align-items-center mt-1">
                  <img src={headericon} alt="bell" />
                  <p style={{ fontWeight: 600,color:'#0747a9',fontSize:'15px' }}>Switch Profile</p>
                </span>
              </button>
              <div className="dropdown-menu py-0" aria-labelledby="dropdownMenuLink">
                <Link className="dropdown-item" style={{color:'#0747a9', fontSize:'12px', fontWeight:600}} to="/commuter/postavailabilty">Commuter</Link>
              </div>
            </div>
          </li>
          <button
            className="header-btn d-flex"
            onClick={handleSignOut}
          >
            {/* <ExitToAppIcon className="mr-2" /> */}
            <img src={logout} alt="logoutimg" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
