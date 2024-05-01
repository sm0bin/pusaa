import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { formatDate } from '../../../utils/functions';

const EventCard = ({ event, showModal }) => {
    const { title, summary, date, location, image } = event;

    return (
        <div onClick={() => showModal(event)} className="card group grow ">
            <img className='rounded-2xl h-[40vh] w-full object-cover' src={image} alt={title} />
            <div className="card-body bg-base-100/60 absolute bottom-0 inset-x-0 invisible group-hover:visible rounded-b-2xl">
                <h2 className="card-title font-bold">{title}</h2>
                <p>{summary}</p>
                <div className='flex items-center gap-8'>
                    <div className='flex items-start gap-1.5'><FiCalendar className='text-xl' /><span> {formatDate(date)}</span></div>

                    <div className='flex items-start gap-1.5'><FiMapPin className='text-xl' /><span> {location}</span></div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;