import React from "react";
import { NavLink } from "react-router-dom";

// Logo
import logo from "./assets/theindex.svg";
import authStore from "./stores/authStore";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <img src={logo} className="logo" alt="the index logo" />
      <section>
        <h4 className="menu-item active">
          <NavLink to="/authors">AUTHORS</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/books">BOOKS</NavLink>
        </h4>

        <h4 className="menu-item">
          <NavLink to="/login">Login</NavLink>
        </h4>
        <h4 className="menu-item">
          <NavLink to="/signup">Sign Up</NavLink>
        </h4>
        <Logout />
      </section>
    </div>
  );
};

export default Sidebar;
