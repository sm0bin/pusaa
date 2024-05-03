import React from 'react';

const Notice = () => {
    return (
        <section>
            <div className='border max-w-7xl mx-auto p-6 rounded-xl bg-warning/20 font-bengali'>
                <h2 className=' font-bold text-2xl text-center'>গুরুত্বপূর্ণ নোটিশ</h2>
                <div className="divider"></div>
                <p>পাবলিক ইউনিভার্সিটি স্টুডেন্টস অ্যাসোসিয়েশন অব আখাউড়া-র সকল সদস্যদের প্রোফাইল শীঘ্রই আপডেট করার জন্য বলা হলো। কোনো সমস্যা যেমন বিশ্ববিদ্যালয় নামের অপশন না থাকলে এই ইমেইলে যোগাযোগের জন্য বলা হলোঃ <a target="_blank" href="mailto:shehjad0mobin@gmail.com?subject=PUSAA Website Issue!&body=I have a problem, please have a look." className='link link-hover link-info font-semibold'>shehjad0mobin@gmail.com</a></p>
            </div>
        </section>
    );
};

export default Notice;