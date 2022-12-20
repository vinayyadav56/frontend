import React from "react";
import headericon from "../images/header-user-icon.png";
import SearchIcon from "@mui/icons-material/Search";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import bellicon from "../images/bellicon.png";
import logout from "../images/logout.png";
import { useAuth } from "../Services/auth";
import { useHistory } from "react-router-dom";
const Header = ({addUserLocal}) => {
  const {signout} = useAuth();
  const history = useHistory();
 const handleSignOut = () =>{
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
            <img src={headericon} alt="bell" />
          </li>
          <li>
            <img src={bellicon} alt="bell" />
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
