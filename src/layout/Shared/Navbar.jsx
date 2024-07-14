import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../assets/providers/AuthProviders';

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleLogOut=()=>{
    logOut()
    .then((result)=>{
      console.log(result.user);
      alert('LogOut successfully')
    })
    .catch(error=>console.error(error))
  }
    const navLink=<>
                  <li><NavLink to='/' className={({isActive})=>isActive?'text-amber-600 border-2 border-violet-600 hover:scale-105 text-xl font-bold':'font-bold'}>Home</NavLink></li>
                  {user?.email?<>
                    <li><NavLink to='/bookings' className={({isActive})=>isActive?'text-amber-600 border-2 border-violet-600 hover:scale-105 text-xl font-bold':'font-bold'}>My Bookings</NavLink></li>
                    <li><NavLink onClick={handleLogOut} to='/login' className={({isActive})=>isActive?'text-amber-600 border-2 border-violet-600 hover:scale-105 text-xl font-bold':'font-bold'}>LogOut</NavLink></li>
                  </>:
                  <li><NavLink to='/login' className={({isActive})=>isActive?'text-amber-600 border-2 border-violet-600 hover:scale-105 text-xl font-bold':'font-bold'}>Login</NavLink></li>}
                  <li><NavLink to='/about' className={({isActive})=>isActive?'text-amber-600 border-2 border-violet-600 hover:scale-105 text-xl font-bold':'font-bold'}>About</NavLink></li>
                  
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {navLink}
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {navLink}
          </ul>
        </div>
        <div className="navbar-end">
         <button className='btn btn-outline btn-warning'>Appointment</button>
        </div>
      </div>
    );
};

export default Navbar;