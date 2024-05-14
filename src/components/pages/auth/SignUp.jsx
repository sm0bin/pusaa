import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PiEyeBold, PiEyeClosedBold } from 'react-icons/pi';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const { signUpUser, updateUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [passwordType, setPasswordType] = useState('password');
    const [signUpError, setSignUpError] = useState("");

    // const handleSignUp = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const data = Object.fromEntries(formData);
    //     console.log(data);

    //     axios.post(`${import.meta.env.VITE_SERVER}/auth/signup`, data)
    //         .then((response) => {
    //             console.log(response);
    //             if (response.status === 201) {
    //                 toast.success(response.data.message);
    //                 navigate('/login');
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //             toast.error('Sign up failed');
    //         });
    // }


    const handleSignUp = e => {
        e.preventDefault();
        setSignUpError("");
        const form = e.currentTarget;
        const email = form.email.value;
        const password = form.password.value;
        // const name = form.name.value;
        // const photoUrl = form.photoUrl.value;

        if (password.length < 6) {
            setSignUpError('Password must be at least 6 characters long.');
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setSignUpError('Password must contain at least one lowercase letter.');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('Password must contain at least one uppercase letter.');
            return;
        }
        else if (!/[0-9]/.test(password)) {
            setSignUpError('Password must contain at least one number.');
            return;
        }
        else if (!/[!@#$%^&*()+=]/.test(password)) {
            setSignUpError('Password must contain at least one special character.');
            return;
        }

        signUpUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success('User created successfully.');
                form.reset();
                navigate(location?.state ? location.state : '/');
                // updateUser(name, photoUrl)
                //     .then(result => {
                //         console.log(result);
                //         toast.success('User created successfully.');
                //         form.reset();
                //     })
                //     .catch(error => {
                //         console.error(error);
                //         toast.error(error.message);
                //     })
            })
            .catch(error => {
                console.error(error);
                toast.error(error.message);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6">
                    <form onSubmit={handleSignUp} className="card-body p-0">
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
                            <button className="btn btn-primary">Sign Up</button>
                        </div>
                    </form>
                    <div className='mt-4'>Already have an account? <Link to='/login' className='link link-primary link-hover'>Login</Link></div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;