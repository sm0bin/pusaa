import { toast } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { navLinks, themes } from '../../../utils/data';
import useAuth from '../../hooks/useAuth';

const Navbar = ({ selectedTheme, setSelectedTheme }) => {
    const { user, logoutUser } = useAuth();

    const handleLogout = () => {
        logoutUser()
            .then(result => {
                console.log(result);
                toast.success('Logout Successful.');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    const renderNavLinks = () => {
        return navLinks.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink to={link.path} className="px-4">{link.title}</NavLink>
                </li>
            );
        });
    }

    return (
        // <div className='sticky z-50 top-0 w-full'>
        <div className='fixed inset-x-0 z-50 top-0 w-full'>
            {/* <AnnouncementBar /> */}
            <div className="navbar bg-base-100">
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
                    <ul className="menu menu-horizontal px-1 font-bengali">
                        {renderNavLinks()}
                    </ul>
                </div>

                <div className="navbar-end">


                    <select onChange={(e) => setSelectedTheme(e.target.value)} className="select select-bordered w-min capitalize mx-3">
                        {
                            themes.map((theme, index) => {
                                return (
                                    <option key={index} selected={theme === selectedTheme}>{theme}</option>
                                );
                            })
                        }
                    </select>
                    {/* <button onClick={handleLogout} className='btn btn-primary'>Logout</button> */}
                    {
                        user ?

                            <div className="dropdown dropdown-end">
                                <div tabIndex={0} role="button" className="btn btn-ghost">
                                    {/* <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div> */}
                                    {user?.displayName || user?.email}
                                </div>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    {
                                        user?.displayName ?
                                            <>
                                                <li><NavLink to='/profile'>Profile</NavLink></li>
                                                <li><NavLink to='/profile/edit'>Edit Profile</NavLink></li>
                                            </> :
                                            <li><NavLink to='/profile/new'>Create Profile</NavLink></li>
                                    }
                                    <li><a onClick={handleLogout}>Logout</a></li>
                                </ul>
                            </div>
                            :
                            <NavLink to='/login' className='btn btn-primary'>Login</NavLink>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;