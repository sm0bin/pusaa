import React, { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import axios from 'axios';

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/testimonials`)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setTestimonials(res.data.testimonials);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className='my-32'>
            <h1 className="text-center text-3xl font-semibold text-primary font-bengali">আমাদের অনুপ্রেরণা</h1>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    testimonials.map((testimonial) => {
                        return (
                            <SwiperSlide key={testimonial._id}>
                                <div className=" p-4 md:p-16 font-bengali">
                                    <div className="w-11/12 md:w-2/3 mx-auto">
                                        <div className="my-4 flex justify-center gap-2">
                                            <FaQuoteLeft className='self-start text-primary w-8' />
                                            <p className="text-center">
                                                {testimonial.quote}
                                            </p>
                                            <FaQuoteRight className='self-end text-primary w-8' />
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="avatar">
                                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={testimonial.image} alt={testimonial.name} />
                                                </div>
                                            </div>
                                            <div className="text-center mt-2">
                                                <h2 className='font-semibold text-lg'><span>{testimonial.name}</span>, {testimonial.designation}</h2>
                                                <p>{testimonial.position}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })
                }
            </Swiper>

        </div>
    );
};

export default Testimonials;