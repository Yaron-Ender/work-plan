import React from 'react';
import { Outlet,NavLink } from "react-router-dom";
const Navbar = () => {
    return (
      <div>
        <nav>
          <h1>i'm h1 inside nav</h1>
          <NavLink to="/">assign job</NavLink>
          <NavLink to="database">substance database</NavLink>
          <NavLink to="workers">workers</NavLink>
        </nav>
        <Outlet />
      </div>
    );
};

export default Navbar;