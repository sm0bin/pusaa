import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const { token } = useParams();

    const handleResetPassword = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        axios.post(`${import.meta.env.VITE_SERVER}/auth/reset-password/${token}`, data)
            .then((response) => {
                console.log(response);
                if (response.status === 201) {
                    toast.success(response.data.message);
                    navigate('/login');
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error('Sign up failed');
            });
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div> */}
                <div className="card shrink-0 w-[400px] shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleResetPassword} className="card-body p-0">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        {/* <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input name="confirmPassword" type="password" placeholder="password" className="input input-bordered" required />
                        </div> */}
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;