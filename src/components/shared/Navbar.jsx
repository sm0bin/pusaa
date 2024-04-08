import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'Login', path: '/login' },
        { title: 'Signup', path: '/signup' },
        { title: 'Profile', path: '/profile' },
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
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {renderNavLinks()}
                </ul>
            </div>
            <div className="navbar-end">
                <NavLink to='/login' className='btn btn-primary'>Login</NavLink>
                <button onClick={handleLogout} className='btn btn-primary'>Logout</button>

            </div>
        </div>
    );
};

export default Navbar;