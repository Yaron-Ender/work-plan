import React from 'react';
import { Outlet,NavLink } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
const Navbar = () => {
   const { logout } = useLogout()
  const { user } = useAuthContext()

    return (
      <div>
        <nav className="main-navbar">
          <NavLink to="database">database</NavLink>
          <NavLink to="/">assign job</NavLink>
          <NavLink to="workers">workers</NavLink>
          {user&&<span>hellow {user.displayName}</span>}
          <p onClick={logout} className='login-link'>Logout</p>
        </nav>
        <Outlet />
      </div>
    );
};

export default Navbar;