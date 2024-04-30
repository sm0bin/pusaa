import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/auth/profile`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setUser(res.data.user);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const navLinks = [
        { title: 'Home', path: '/' },
        // { title: 'Login', path: '/login' },
        // { title: 'Signup', path: '/signup' },
        { title: 'Profile', path: '/profile' },
        { title: 'Members', path: '/members' },
        { title: 'Gallery', path: '/gallery' },
        // { title: 'Notice & Events', path: '/notice-and-events' },

    ];

    const renderNavLinks = () => {
        return navLinks.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.path} className="px-4">{link.title}</NavLink>
                </li>
            );
        });
    }

    const handleLogout = () => {
        axios.get(`${import.meta.env.VITE_SERVER}/auth/logout`, { withCredentials: true })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    console.log('Logged out');
                    toast.success(response.data.message);
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error('Logout failed');
            });
    }
    return (
        <div className="fixed top-0 navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {renderNavLinks()}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-black">PUSAA</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {renderNavLinks()}
                </ul>
            </div>
            <div className="navbar-end">

                {/* <button onClick={handleLogout} className='btn btn-primary'>Logout</button> */}
                {
                    user ?

                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                {/* <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div> */}
                                {user.profile.basic.name || user.email}
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><a>Profile</a></li>
                                <li><a>Settings</a></li>
                                <li><a onClick={handleLogout}>Logout</a></li>
                            </ul>
                        </div>
                        :
                        <NavLink to='/login' className='btn btn-primary'>Login</NavLink>
                }

            </div>
        </div>
    );
};

export default Navbar;