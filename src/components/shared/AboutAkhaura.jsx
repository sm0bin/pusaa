import React from 'react';
import akhauraMap from '../../assets/akhaura-map.jpg';

const AboutAkhaura = () => {
    return (
        <div>
            {/* <h1 className='text-3xl font-bold text-center my-8 capitalize font-bengali text-primary'>আখাউড়া উপজেলা</h1> */}

            <div className="hero my-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={akhauraMap} className="max-w-sm " />
                    <div className='font-bengali'>
                        <h1 className="text-5xl font-bold">আমাদের আখাউড়া</h1>
                        <div className="pt-6 pb-3 space-y-2">
                            <p>
                                আখাউড়া ব্রাহ্মণবাড়ীয়া জেলার ২য় বৃহত্তম উপজেলা, যার আয়তন ৯৮.০৪ বর্গ কিমি। আখাউড়া উপজেলার উত্তরে ব্রাহ্মণবাড়ীয়া সদর উপজেলা, দক্ষিণে কসবা উপজেলা, পূর্বে ভারতের ত্রিপুরা রাজ্য এবং পশ্চিমে ব্রাহ্মণবাড়ীয়া সদর উপজেলা ও কসবা উপজেলা। আখাউড়া এক সময় ভারতের ত্রিপুরা রাজ্যের অন্তর্গত ছিল। আখাউড়া থানা গঠিত হয় ২০ জুন ১৯৭৬ সালে এবং উপজেলায় উন্নীত হয় ১৯৮৩ সালে। আখাউড়া পৌরসভা সৃষ্টি হয় ১৯৯৯ সালে।


                            </p>
                            <p>
                                দর্শণীয় স্থানের মধ্যে রয়েছে শাহপীর কল্লাশহীদ (র) এর পবিত্র মাজার শরীফ, ছতুরা শরীফ বড় মসজিদ, গঙ্গাসাগর বদ্ধভূমি, আখাউড়া চেকপোষ্ট, গঙ্গাসাগর মহারাজের কাচারী।
                            </p>
                            <p>
                                বর্তমানে আখাউড়া বাংলাদেশের একটি গুরুত্বপূর্ণ রেলওয়ে জংশন। এ জংশনের সঙ্গে চট্টগ্রাম, সিলেট, ঢাকা ও ময়মনসিংহের রেলযোগাযোগ রয়েছে।
                            </p>
                        </div>
                        <a href='https://bn.banglapedia.org/index.php?title=%E0%A6%86%E0%A6%96%E0%A6%BE%E0%A6%89%E0%A6%A1%E0%A6%BC%E0%A6%BE_%E0%A6%89%E0%A6%AA%E0%A6%9C%E0%A7%87%E0%A6%B2%E0%A6%BE' className="btn btn-primary">আরো জানুন</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAkhaura;