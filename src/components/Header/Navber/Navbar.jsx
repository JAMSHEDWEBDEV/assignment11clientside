
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/exertion-logo.svg'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider/AuthProvider';

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const navlinks = <>
    <NavLink to="/" className={({isActive})=>isActive? "bg-red-400 rounded":"bg-none"}><li className='font-bold text-[16px]'><a>Home</a></li></NavLink>
    <NavLink to="/add_job" className={({isActive})=>isActive? "bg-red-400 rounded":"bg-none"} ><li className='font-bold text-[16px] '><a>Add Jobs</a></li></NavLink>
    <NavLink to="/post_job" className={({isActive})=>isActive? "bg-red-400 rounded":"bg-none"} ><li className='font-bold text-[16px]'><a>My Posted Jobs</a></li></NavLink>
    <NavLink to="/my_bid" className={({isActive})=>isActive? "bg-red-400 rounded":"bg-none"} ><li className='font-bold text-[16px]'><a>My Bids</a></li></NavLink>
    <NavLink to="/bid_request" className={({isActive})=>isActive? "bg-red-400 rounded":"bg-none"}><li className='font-bold text-[16px]'><a>Bid Requests</a></li></NavLink>
    </>

    const handleLogout = ()=>{
        logOut()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }

    return (
        <div className="navbar bg-gray-100 px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200 my-10 rounded-box w-52">
                        {navlinks}
                    </ul>
                </div>
                <img className='h-[100px] w-[100px]' src={logo} alt="logo_img" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user? <>
                    <h1>{user?.displayName}</h1>
                    <div className='mx-3 h-[50px] w-[50px]'>
                        <img className='rounded-full' src={user?.photoURL} alt="profile" />
                    </div>
                    <button onClick={handleLogout} className='btn bg-red-400 font-bold text-[16px]'>Logout</button>
                    </>: <Link to="/login"><button className='btn bg-red-400 font-bold text-[16px]'>Login</button></Link>
                }
            </div>
        </div>
    );
};

export default Navbar;