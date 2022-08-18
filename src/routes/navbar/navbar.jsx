import React from 'react';
import { Outlet,NavLink } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
const Navbar = () => {
  const { user } = useAuthContext()
    return (
      <div>
        <nav className="main-navbar">
          <NavLink to="database">database</NavLink>
          <NavLink to="/">assign job</NavLink>
          <NavLink to="workers">workers</NavLink>
          <span>hellow {user.displayName}</span>
          <NavLink className='login-link' to="login">Login</NavLink>
        </nav>
        <Outlet />
      </div>
    );
};

export default Navbar;