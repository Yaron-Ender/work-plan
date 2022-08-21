import React from 'react';
import { Outlet,NavLink } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
const Navbar = () => {
   const { logout,error} = useLogout()
  const { user,manager,employeeNum } = useAuthContext()
 console.log(manager,user,employeeNum)
    return (
      <div>
        <nav className="main-navbar">
          {!error&&(
           <>
            <NavLink to="database">database</NavLink>
            <NavLink to="/">assign job</NavLink>
            <NavLink to="workers">workers</NavLink>
            {user&&<span>hello {user.displayName}</span>}
           </>
          )}
          <p onClick={logout} className='login-link'>Logout</p>
          {error&&<p>{error}</p>}
        </nav>
        <Outlet />
      </div>
    );
};

export default Navbar;