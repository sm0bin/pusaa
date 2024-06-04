import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Profile = () => {
    const axiosPrivate = useAxiosPrivate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        axiosPrivate(`/auth/profile`)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setProfile(res.data.user.profile);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, [axiosPrivate]);

    return (
        <div className='max-w-7xl min-h-[90vh] mx-auto flex justify-center items-center'>
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
                            <p className='text-lg'>Whatsapp: {profile.contact.whatsapp}</p>
                            <p className='text-lg'>Address: {profile.contact.address}</p>

                            <p className='text-lg'>Facebook: <a className='link link-info link-hover' href={profile.social.facebook} target='_blank'>{profile.social.facebook}</a></p>
                            <p className='text-lg'>Linkedin: <a className='link link-info link-hover' href={profile.social.linkedin} target='_blank'>{profile.social.linkedin}</a></p>
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