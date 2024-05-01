import React from 'react';
import Marquee from 'react-fast-marquee';

const AnnouncementBar = () => {
    return (
        <div className='bg-yellow-400 text-black py-3'>
            <Marquee>
                সকল শিক্ষার্থীদের অভিনন্দন এবং শুভেচ্ছা। আমাদের সংগঠনের ওয়েবসাইটে আপনাদের স্বাগতম। এখানে আমাদের সংগঠনের সকল তথ্য পাবেন।
            </Marquee>
        </div>
    );
};

export default AnnouncementBar;