import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { roles, universities, departments, sessions } from '../../../utils/data';
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const CreateProfile = () => {
    const axiosPrivate = useAxiosPrivate();
    const { updateUser } = useAuth();
    const navigate = useNavigate();

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

        axiosPrivate.post(`/auth/profile`, profile)
            .then(response => {
                console.log(response);
                if (response.status === 201) {
                    updateUser(data.name)
                        .then(result => {
                            console.log(result);
                            toast.success('Profile Created Successfully.');
                            navigate('/profile');
                        })
                        .catch(error => {
                            console.error('Error updating user:', error);
                            toast.error(error.message);
                        });
                }
            })
            .catch(error => {
                console.error('Error creating profile:', error);
                toast.error(error.message);
            });

    }

    return (
        <div className='max-w-3xl mx-auto pt-20 pb-32' >
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
                        <input type="text" name="facebook" placeholder="Facebook" className="input input-bordered" required />
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
                        {/* <span className="label-text">Note: You must need to provide the star marked information. Among your contact information only your Email and LinkedIn will be publicly visible.</span> */}
                        <span className="label-text font-bengali">দ্রষ্টব্যঃ তারকা চিহ্নিত তথ্য প্রদান বাধ্যতামূলক। আপনার বিশ্ববিদ্যালয় অথবা ডিপার্টমেন্ট অন্তর্ভূক্ত না থাকলে &apos;Others&apos; প্রদান করুন এবং আমাদের অবহিত করুন এই মেইলেঃ <a target="_blank" href="mailto:shehjad0mobin@gmail.com?subject=PUSAA Website Issue!&body=I have a problem, please have a look." className='link link-hover link-info font-semibold'>shehjad0mobin@gmail.com</a></span>
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

export default CreateProfile;