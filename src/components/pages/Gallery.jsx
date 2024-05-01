import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EventCard from '../shared/EventCard';
import { arrayToChunk } from '../../../utils/functions';
import EventModalCard from '../shared/EventModalCard';

const Gallery = () => {
    const [events, setEvents] = useState([]);
    const [modalEvent, setModalEvent] = useState(null);

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



    // const getImageLayout = (image) => {
    //     const img = new Image();
    //     img.onload = () => {
    //         console.log(img.width, img.height);
    //     }
    //     img.src = image;
    // }

    const showModal = (event) => {
        setModalEvent(event);
        document.getElementById('my_modal_2').showModal();
    }



    const chunkedEvents = arrayToChunk(events, 3);

    return (
        <div className='py-16 px-4'>
            <h1 className='text-3xl font-bold text-center my-8 capitalize'>Memories we lived together</h1>
            {/* <div className='flex flex-col gap-2'>
                {
                    chunkedEvents.map((chunk, index) => {
                        return (
                            <div key={index} className='flex gap-2'>
                                {
                                    chunk.map((event) => {
                                        return (
                                            <EventCard key={event._id} event={event} />
                                        );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div> */}

            <div className='flex flex-wrap gap-2'>
                {
                    events.map((event) => {
                        return (
                            <EventCard key={event._id} event={event} showModal={showModal} />
                        );
                    })
                }
            </div>


            {modalEvent && <dialog id="my_modal_2" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-1">
                    <EventModalCard event={modalEvent} />
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>}
        </div>
    );
};

export default Gallery;