import React from 'react'
import { NavLink } from 'react-router-dom';
import navArray from "./navArray";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
const AdminSidebar = () => {
  return (
    <>
    <div className="sidebar">
            <button id="close-btn">
              <CloseRoundedIcon />
            </button>
            <div className="responsive-sidebar">
              <NavLink to="/admindashboard" className="active">
                <span className="icon">
                  <GridViewRoundedIcon />
                </span>
                <h4 className="title">Dashboard</h4>
              </NavLink>

              {navArray.map((data, id) => {
                return (
                  <li key={id}>
                    <NavLink exact to={data.link}>
                      <span className="icon">{data.icon}</span>
                      <h4 className="title">{data.nav}</h4>
                    </NavLink>
                  </li>
                );
              })}
            </div>
          </div>
    </>
  )
}

export default AdminSidebar