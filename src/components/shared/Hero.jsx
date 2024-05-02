import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero min-h-[80vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="/pusaa-logo.svg" className="max-w-sm" />
                <div className='font-bengali'>
                    <h1 className="text-4xl font-bold">আমাদের ওয়েবসাইটে আপনাকে স্বাগতম!</h1>
                    <p className="py-6">
                        <strong className='font-semibold'>পাবলিক ইউনিভার্সিটি স্টুডেন্টস অ্যাসোসিয়েশন অব আখাউড়া</strong>-র পক্ষ থেকে সকল শিক্ষার্থীদের অভিনন্দন এবং শুভেচ্ছা। আমাদের সংগঠনের ওয়েবসাইটে আপনাদের স্বাগতম। এই ওয়েবসাইটে আমাদের সংগঠন সংক্রান্ত তথ্য অন্তর্ভুক্ত করা হয়েছে।
                    </p>
                    <Link to='/login' className="btn btn-primary mr-3">প্রবেশ করুন</Link>
                    <Link to='/signup' className="btn btn-primary btn-outline">নিবন্ধন করুন</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;