import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useLoadDataPrivate from '../../hooks/useLoadDataPrivate';

const Members = () => {
    // const [members, isPending, refetch, error] = useLoadDataPrivate('/users', 'members');
    // const [displayMembers, setDisplayMembers] = useState(members?.users);

    const [members, setMembers] = useState([]);
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/users`, { withCredentials: true })
            .then((res) => {
                console.log(res.data.users);
                if (res.status === 200) {
                    setMembers(res.data.users);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    console.log(members);

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;

        axios.get(`${import.meta.env.VITE_SERVER}/users?search=${search}`)
            .then((res) => {
                console.log(res.data.users);
                if (res.status === 200) {
                    setMembers(res.data.users);
                    // setDisplayMembers(res.data.users);
                    e.target.reset();
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    // if (isPending) {
    //     return (
    //         <div className='w-full min-h-[90vh] flex justify-center items-center'>
    //             <span className="loading loading-bars loading-lg"></span>
    //         </div>
    //     );
    // }

    return (
        <div className='my-4 px-4 min-h-screen'>

            <div className='flex justify-between items-center mb-8'>

                <div>
                    <h1 className='text-3xl font-bold'>Members</h1>
                    {/* <p className=''>List of all members</p> */}
                </div>
                <form onSubmit={handleSearch} className="join w-2/5">
                    <input
                        className="input input-bordered join-item w-full"
                        placeholder="Search by Name, University, Department, Session..."
                        type="search" name="search" required
                    />
                    <button className="btn join-item px-8">Search</button>
                </form>
            </div>

            <div className="overflow-x-auto">
                <table className="table ">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>University</th>
                            <th>Department</th>
                            <th>Session</th>
                            <th>Role</th>
                            <th>Email</th>
                            <th>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            members?.map((member, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{member?.profile?.basic?.name}</td>
                                        <td>{member?.profile?.education?.university}</td>
                                        <td>{member?.profile?.education?.department}</td>
                                        <td>{member?.profile?.education?.session}</td>
                                        <td>{member?.profile?.basic?.role}</td>
                                        <td><a className='link link-hover link-info' href={`mailto:${member?.profile?.contact?.email}`} target='_blank'>{member?.profile?.contact?.email}</a></td>
                                        <td><a className='link link-hover link-info' href={member?.profile?.social?.linkedin} target='_blank'>Visit</a></td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Members;