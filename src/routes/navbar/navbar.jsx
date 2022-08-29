import { useState,useContext} from 'react';
import { Outlet,NavLink } from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLogout } from '../../hooks/useLogout';
import { useStyleContext } from '../../hooks/useStyleContext';
const Navbar = () => {
const { dispatch } = useStyleContext()
   const { logout,error} = useLogout()
  const { user,manager,employeeNum } = useAuthContext()
    return (
      <div>
        <nav className="main-navbar">
          {!error&&(
           <>
            <NavLink to="database"
            onClick={()=>{dispatch({type:"OPEN_DATABASE_NAVBAR"})}}
            >database</NavLink>
            <NavLink to="/"
            onClick={()=>{dispatch({ type: 'CLOSE_DATABASE_NAVBAR' })}}
            >assign job</NavLink>
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