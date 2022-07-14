import React from 'react';
import { Outlet,NavLink } from "react-router-dom";
const Navbar = () => {
    return (
      <div>
        <nav className="main-navbar">
          <NavLink to="database">database</NavLink>
          <NavLink to="/">assign job</NavLink>
          <NavLink to="workers">workers</NavLink>
        </nav>
        <Outlet />
      </div>
    );
};

export default Navbar;