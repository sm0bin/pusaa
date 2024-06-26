import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { loginUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordType, setPasswordType] = useState('password');

    const handleLogin = (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const data = Object.fromEntries(formData);
        // console.log(data);
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('Login Successful.');
                form.reset();
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })

        // axios.post(`${import.meta.env.VITE_SERVER}/auth/login`, data,{ withCredentials: true })
        //     .then((response) => {
        //         console.log(response);
        //         if (response.status === 200) {
        //             toast.success(response.data.message);
        //             navigate('/');
        //             // window.location.reload();
        //         }
        //     })
        //     .catch((err) => {
        //         console.error(err);
        //         toast.error(err.message);
        //     });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleLogin} className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <input name='password' type={passwordType} className="grow" placeholder="password" />
                                {
                                    passwordType === 'password' ?
                                        <PiEyeBold type="button" onClick={() => setPasswordType('text')} className="" />
                                        :
                                        <PiEyeClosedBold type="button" onClick={() => setPasswordType('password')} />
                                }
                            </label>
                            {/* <input name="password" type="password" placeholder="password" className="input input-bordered" required /> */}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='mt-4'>Already have an account? <Link to='/signup' className='link link-primary link-hover'>Sign Up</Link></div>
                </div>
            </div>
        </div>
    );
};

export default Login;