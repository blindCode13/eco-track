import React from 'react';

const EventsCard = () => {
    return (
        <div className='p-4 bg-white border-2 border-gray-200 rounded-xl flex flex-col gap-6'>
            <div className='max-w-[400px]'>
                <h1 className='font-bold text-2xl'>Community Clean-up Day</h1>
                <p className='line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae voluptate libero minus, voluptatibus est ratione, tempora sed inventore amet exercitationem esse voluptatem itaque debitis laboriosam ex at! Mollitia, quis ducimus.</p>
            </div>
            <div>
                <h1><span className='font-bold'>Date:</span> 25-08-2025</h1>
                <h1><span className='font-bold'>Location:</span> Central Park</h1>
            </div>
            <button className='primary-btn'>View Details</button>
        </div>
    );
};

export default EventsCard;