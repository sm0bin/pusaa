import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/auth/profile/me`)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    setProfile(response.data);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            {
                profile ? (
                    <div>
                        <h1>Profile</h1>
                        <p>{profile.email}</p>
                        <p>{profile.name}</p>
                        <p>{profile.role}</p>
                    </div>
                ) : (
                    <Link to='/profile/new' className='btn btn-primary'>Create Profile</Link>
                )
            }

        </div>
    );
};

export default Profile;