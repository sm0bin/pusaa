import React from 'react';
import Marquee from 'react-fast-marquee';
import { HiOutlineSpeakerphone } from 'react-icons/hi';

const AnnouncementBar = () => {
    return (
        <Marquee className='bg-warning text-black py-3 font-bengali h-auto'>
            <HiOutlineSpeakerphone className='text-2xl -rotate-12 mr-2 ' /> <strong className='font-semibold'>পাবলিক ইউনিভার্সিটি স্টুডেন্টস অ্যাসোসিয়েশন অব আখাউড়া</strong>-র পক্ষ থেকে সকল শিক্ষার্থীদের অভিনন্দন এবং শুভেচ্ছা। আমাদের সংগঠনের ওয়েবসাইটে আপনাদের স্বাগতম। এখানে আমাদের সংগঠনের সকল তথ্য পাবেন।
        </Marquee>
    );
};

export default AnnouncementBar;