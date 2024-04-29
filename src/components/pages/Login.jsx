import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleLogin = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        axios.post(`${import.meta.env.VITE_SERVER}/auth/login`, data)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    toast.success(response.data.message);
                    navigate('/');
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.message);
            });
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
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/forgot-password' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
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