import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Members = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/users`)
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

    return (
        <div className='py-32'>
            <h2>Members Database</h2>

            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>University</th>
                            <th>Department</th>
                            <th>Session</th>
                            <th>Email</th>
                            <th>LinkedIn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Littel, Schaden and Vandervort</td>
                            <td>Canada</td>
                            <td>12/16/2020</td>
                            <td>Blue</td>
                        </tr> */}

                        {
                            members.map((member, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{member.profile.basic.name}</td>
                                        <td>{member.profile.education.university}</td>
                                        <td>{member.profile.education.department}</td>
                                        <td>{member.profile.education.session}</td>
                                        <td><a className='link link-hover link-info' href={`mailto:${member.profile.contact.email}`}>{member.profile.contact.email}</a></td>
                                        <td><a className='link link-hover link-info' href={member.profile.social.linkedin} target='_blank'>Visit</a></td>
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