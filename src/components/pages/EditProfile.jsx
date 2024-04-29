import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();
    // profile: {
    //         name: {
    //             type: String,
    //            : false
    //         },
    //         picture: {
    //             type: String,
    //             default: ""
    //         },
    //         university: {
    //             type: String,
    //             default: ""
    //         },
    //         dept: {
    //             type: String,
    //             default: ""
    //         },
    //         session: {
    //             type: String,
    //             default: ""
    //         },
    //         contact: {
    //             phone: {
    //                 type: String,
    //                 default: ""
    //             },
    //             email: {
    //                 type: String,
    //                 default: ""
    //             },
    //             whatsapp: {
    //                 type: String,
    //                 default: ""
    //             },
    //             address: {
    //                 type: String,
    //                 default: ""
    //             }
    //         },
    //         social: {
    //             fb: {
    //                 type: String,
    //                 default: ""
    //             },
    //             linkedin: {
    //                 type: String,
    //                 default: ""
    //             }
    //         }
    //     },
    // }

    const sessions = ['2010-2011', '2011-2012', '2012-2013', '2013-2014', '2014-2015', '2015-2016', '2016-2017', '2017-2018', '2018-2019', '2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024', '2024-2025']

    const universities =
        [
            "University of Dhaka",
            "University of Rajshahi",
            "Bangladesh Agricultural University",
            "Bangladesh University of Engineering & Technology",
            "University of Chittagong",
            "Jahangirnagar University",
            "Islamic University, Bangladesh",
            "Shahjalal University of Science & Technology",
            "Khulna University",
            "National University",
            "Bangladesh Open University",
            "Bangabandhu Sheikh Mujib Medical University",
            "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
            "Hajee Mohammad Danesh Science & Technology University",
            "Mawlana Bhashani Science & Technology University",
            "Patuakhali Science And Technology University",
            "Sher-e-Bangla Agricultural University",
            "Chittagong University of Engineering & Technology",
            "Rajshahi University of Engineering & Technology",
            "Khulna University of Engineering & Technology",
            "Dhaka University of Engineering & Technology",
            "Noakhali Science & Technology University",
            "Jagannath University",
            "Comilla University",
            "Jatiya Kabi Kazi Nazrul Islam University",
            "Chittagong Veterinary and Animal Sciences University",
            "Sylhet Agricultural University",
            "Jessore University of Science & Technology",
            "Pabna University of Science and Technology",
            "Begum Rokeya University, Rangpur",
            "Bangladesh University of Professionals",
            "Bangabandhu Sheikh Mujibur Rahman Science & Technology University",
            "Bangladesh University of Textiles",
            "University of Barishal",
            "Rangamati Science and Technology University",
            "Bangabandhu Sheikh Mujibur Rahman Maritime University, Bangladesh",
            "Islamic Arabic University",
            "Chittagong Medical University",
            "Rajshahi Medical University",
            "Rabindra University, Bangladesh",
            "Bangabandhu Sheikh Mujibur Rahman Digital University, Bangladesh",
            "Sheikh Hasina University",
            "Khulna Agricultural University",
            "Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University",
            "Bangamata Sheikh Fazilatunessa Mujib Medical University, Sylhet",
            "Bangabandhu Sheikh Mujibur Rahman Aviation And Aerospace University (BSMRAAU)",
            "Chandpur Science and Technology University",
            "Bangabandhu Sheikh Mujibur Rahman University, Kishoreganj",
            "Hobiganj Agricultural University",
            "Sheikh Hasina Medical University, Khulna",
            "Kurigram Agricultural University",
            "Sunamganj Science and Technology University",
            "Bangabandhu Sheikh Mujibur Rahman Science & Technology University, Pirojpur",
            "Bangabandhu Sheikh Mujibur Rahman University, Naogaon",
            "Mujibnagar University, Meherpur"
        ]

        ;

    const departments = [
        // Engineering and Technology
        'Computer Science and Engineering',
        'Electrical and Electronic Engineering',
        'Information and Communication Engineering',
        'Information and Communication Technology',
        'Information Technology',
        'Software Engineering',
        'Biomedical Engineering',
        'Civil Engineering',
        'Mechanical Engineering',
        'Chemical Engineering',
        'Industrial and Production Engineering',
        'Textile Engineering',

        // Medical and Health Sciences
        'Medicine (MBBS)',
        'Dental Surgery (BDS)',
        'Pharmacy',
        'Nursing',
        'Public Health',
        'Physiotherapy',

        // Business and Management
        'Business Administration (BBA)',
        'Economics',
        'Accounting',
        'Finance',
        'Marketing',
        'Management',
        'Human Resource Management',

        // Science
        'Physics',
        'Chemistry',
        'Mathematics',
        'Biology',
        'Environmental Science',
        'Statistics',

        // Social Sciences
        'Sociology',
        'Psychology',
        'Political Science',
        'Anthropology',
        'International Relations',
        'Development Studies',

        // Arts and Humanities
        'Bengali Language and Literature',
        'English Language and Literature',
        'History',
        'Philosophy',
        'Fine Arts',
        'Linguistics',

        // Law
        'LLB (Bachelor of Laws)',
        'LLM (Master of Laws)',
        'Criminal Law',
        'Corporate Law',
        'International Law',

        // Agriculture
        'Agricultural Science',
        'Agronomy',
        'Horticulture',
        'Soil Science',
        'Agricultural Economics',
        'Animal Husbandry',

        // Education
        'Education',
        'Educational Psychology',
        'Curriculum and Instruction',
        'Educational Leadership',
        'Special Education',
        'Others'
    ];

    const roles = ['Member', 'President', 'Vice President', 'General Secretary', 'Joint Secretary', 'Treasurer', 'Organizing Secretary', 'Office Secretary', 'Publication Secretary', 'Cultural Secretary', 'Sports Secretary', 'Science and Technology Secretary', 'Social Welfare Secretary', 'Debate Secretary', 'Recruitment Secretary', 'Public Relations Secretary', 'Alumni Secretary', 'Advisor', 'Patron'];

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

        axios.post(`${import.meta.env.VITE_SERVER}/auth/profile`, profile, { withCredentials: true })
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    toast.success(response.data.message);
                    navigate('/profile');
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
                        <input type="text" name="name" placeholder="Full Name" className="input input-bordered" required />
                    </div>
                    {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text">Picture</span>
                    </label>
                    <input type="file" name="picture" placeholder="Picture" className="input input-bordered" />
                </div> */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Role*</span>
                        </label>
                        <select type="text" name='role' className="select select-bordered" required>
                            {
                                roles.map((role, index) => {
                                    return <option key={index} value={role}>{role}</option>
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
                        {/* <input type="text" name="university" placeholder="University" className="input input-bordered" /> */}
                        <select type="text" name='university' className="select select-bordered" required>
                            {
                                universities.map((university, index) => {
                                    return <option key={index} value={university}>{university}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Department*</span>
                        </label>
                        {/* <input type="text" name="department" placeholder="Department" className="input input-bordered" /> */}
                        <select type="text" name='department' className="select select-bordered" required>
                            {
                                departments.map((department, index) => {
                                    return <option key={index} value={department}>{department}</option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Session*</span>
                        </label>
                        {/* <input type="text" name="session" placeholder="Session" className="input input-bordered" /> */}
                        <select type="text" name='session' className="select select-bordered" required>
                            {
                                sessions.map((session, index) => {
                                    return <option key={index} value={session}>{session}</option>
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
                        <input type="text" name="phone" placeholder="Phone" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email*</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Whatsapp</span>
                        </label>
                        <input type="text" name="whatsapp" placeholder="Whatsapp" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="Address" className="input input-bordered" />
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
                        <input type="text" name="fb" placeholder="Facebook" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">LinkedIn</span>
                        </label>
                        <input type="text" name="linkedin" placeholder="LinkedIn" className="input input-bordered" />
                    </div>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Note: You must need to provide the star marked information. Among your contact information only your Email and LinkedIn will be publicly visible.</span>
                    </label>
                    {/* <input type="text" name="linkedin" placeholder="LinkedIn" className="input input-bordered" /> */}
                </div>



                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit Profile Information</button>
                </div>
            </form>
        </div >
    );
};

export default EditProfile;