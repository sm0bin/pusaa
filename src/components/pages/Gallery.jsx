import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const Gallery = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_SERVER}/events`)
            .then((res) => {
                console.log(res);
                if (res.status === 200) {
                    setEvents(res.data.events);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const formatDate = (dateString) => {
        // const date = new Date(dateString);
        const options = {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div>

            <div className='grid grid-cols-4 gap-2'>
                {
                    events.map((event, index) => {
                        return (
                            <div key={index} className="card group">
                                <img className='rounded-2xl h-full w-full object-cover' src={event.image} alt={event.title} />
                                <div className="card-body bg-base-100/60 absolute bottom-0 inset-x-0 invisible group-hover:visible rounded-b-2xl">
                                    <h2 className="card-title font-bold">{event.title}</h2>
                                    <p>{event.summary}</p>
                                    <div className='flex items-center gap-8'>
                                        <div className='flex items-center gap-1.5'><FiCalendar className='text-xl' /><span> {formatDate(event.date)}</span></div>

                                        <div className='flex items-center gap-1.5'><FiMapPin className='text-xl' /><span> {event.location}</span></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};

export default Gallery;