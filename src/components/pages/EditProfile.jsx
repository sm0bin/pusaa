import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { roles, universities, departments, sessions } from '../../../utils/data';
import useAuth from '../../hooks/useAuth';

const EditProfile = () => {
    const { updateUser } = useAuth();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/auth/profile`, { withCredentials: true })
            .then((res) => {
                console.log(res.data.user.profile);
                if (res.status === 200) {
                    setProfile(res.data.user.profile);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handleProfileSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);

        const profile = {
            basic: {
                name: data.name,
                role: data.role
            },
            education: {
                university: data.university,
                department: data.department,
                session: data.session
            },
            contact: {
                phone: data.phone,
                email: data.email,
                whatsapp: data.whatsapp,
                address: data.address
            },
            social: {
                facebook: data.facebook,
                linkedin: data.linkedin
            }
        };

        axios.put(`${import.meta.env.VITE_SERVER}/auth/profile`, profile, { withCredentials: true })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    updateUser(data.name)
                        .then(result => {
                            console.log(result);
                            toast.success('Profile updated successfully.');
                            navigate('/profile');
                        })
                        .catch(error => {
                            console.error(error);
                            toast.error(error.message);
                        });
                }
            })
            .catch((err) => {
                console.error(err);
                toast.error(err.message);
            });
    }

    return (
        <div className='max-w-3xl mx-auto' >
            <form onSubmit={handleProfileSubmit} className="card-body p-2">
                <div className='border p-2 md:p-6 rounded-xl'>
                    <label className="label">
                        <span className="label-text text-xl font-bold">Basic</span>
                    </label>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name*</span>
                        </label>
                        <input defaultValue={profile?.basic?.name} type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input defaultValue={profile?.basic?.name} type="file" name="picture" placeholder="Picture" className="input input-bordered" />
                </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Role*</span>
                        </label>
                        <select type="text" name='role' className="select select-bordered" required>
                            {
                                roles.map((role, index) => {
                                    return <option key={index} value={role}
                                        selected={profile?.basic?.role === role}
                                    >{role}</option>
                                })
                            }
                        </select>

                    </div>
                </div>


                <div className='border p-6 rounded-xl'>
                    <label className="label">
                        <span className="label-text text-xl font-bold">Education</span>
                    </label>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">University*</span>
                        </label>
                        {/* <input defaultValue={profile?.basic?.name} type="text" name="university" placeholder="University" className="input input-bordered" /> */}
                        <select type="text" name='university' className="select select-bordered" required>
                            {
                                universities.map((university, index) => {
                                    return <option key={index}
                                        value={university}
                                        selected={profile?.education?.university === university}>
                                        {university}
                                    </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Department*</span>
                        </label>
                        {/* <input defaultValue={profile?.basic?.name} type="text" name="department" placeholder="Department" className="input input-bordered" /> */}
                        <select type="text" name='department' className="select select-bordered" required>
                            {
                                departments.map((department, index) => {
                                    return <option key={index} value={department}
                                        selected={profile?.education?.department === department}
                                    >{department}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Session*</span>
                        </label>
                        {/* <input defaultValue={profile?.basic?.name} type="text" name="session" placeholder="Session" className="input input-bordered" /> */}
                        <select type="text" name='session' className="select select-bordered" required>
                            {
                                sessions.map((session, index) => {
                                    return <option key={index} value={session}
                                        selected={profile?.education?.session === session}
                                    >{session}</option>
                                })
                            }
                        </select>
                    </div>
                </div>


                <div className='border p-6 rounded-xl'>
                    <label className="label">
                        <span className="label-text text-xl font-bold">Contact</span>
                    </label>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone*</span>
                        </label>
                        <input defaultValue={profile?.contact?.phone} type="text" name="phone" placeholder="Phone" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input defaultValue={profile?.contact?.email} type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Whatsapp</span>
                        </label>
                        <input defaultValue={profile?.contact?.whatsapp} type="text" name="whatsapp" placeholder="Whatsapp" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input defaultValue={profile?.contact?.address} type="text" name="address" placeholder="Address" className="input input-bordered" />
                    </div>
                </div>

                <div className='border p-6 rounded-xl'>
                    <label className="label">
                        <span className="label-text text-xl font-bold">Social</span>
                    </label>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Facebook*</span>
                        </label>
                        <input defaultValue={profile?.social?.facebook} type="text" name="facebook" placeholder="Facebook" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input defaultValue={profile?.social?.linkedin} type="text" name="linkedin" placeholder="LinkedIn" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Note: You must need to provide the star marked information. Among your contact information only your Email and LinkedIn will be publicly visible.</span>
                    </label>
                    {/* <input defaultValue={profile?.basic?.name} type="text" name="linkedin" placeholder="LinkedIn" className="input input-bordered" /> */}
                </div>



                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit Profile Information</button>
                </div>
            </form>
        </div >
    );
};

export default EditProfile;