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
                        <h1>{profile.email}</h1>
                    </div>
                ) : (
                    <Link to='/profile/new' className='btn btn-primary'>Create Profile</Link>
                )
            }

        </div>
    );
};

export default Profile;