import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/auth/profile`, { withCredentials: true })
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setProfile(res.data.user.profile);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className='h-screen w-full flex justify-center items-center'>
            {
                profile ? (
                    <div>
                        {/* Profile Info */}
                        <h1 className='text-3xl font-bold'>Profile</h1>
                        <div className='mt-4'>
                            <p className='text-lg'>Name: {profile.basic.name}</p>
                            <p className='text-lg'>Role: {profile.basic.role}</p>

                            <p className='text-lg'>University: {profile.education.university}</p>
                            <p className='text-lg'>Department: {profile.education.department}</p>
                            <p className='text-lg'>Session: {profile.education.session}</p>

                            <p className='text-lg'>Email: {profile.contact.email}</p>
                            <p className='text-lg'>Phone: {profile.contact.phone}</p>
                            <p className='text-lg'>Address: {profile.contact.address}</p>
                            <p className='text-lg'>Whatsapp: {profile.contact.whatsapp}</p>

                            <p className='text-lg'>Facebook: {profile.social.facebook}</p>
                            <p className='text-lg'>Linkedin: {profile.social.linkedin}</p>
                        </div>

                        <Link to='/profile/edit' className='btn btn-primary mt-4'>Edit Profile</Link>


                    </div>
                ) : (
                    <Link to='/profile/new' className='btn btn-primary'>Create Profile</Link>
                )
            }

        </div>
    );
};

export default Profile;

// const profile = {
//     basic: {
//         name: data.name,
//         role: data.role
//     },
//     education: {
//         university: data.university,
//         department: data.department,
//         session: data.session
//     },
//     contact: {
//         phone: data.phone,
//         email: data.email,
//         whatsapp: data.whatsapp,
//         address: data.address
//     },
//     social: {
//         facebook: data.facebook,
//         linkedin: data.linkedin
//     }
// };