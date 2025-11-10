import React from 'react';

const ChallangesCard = () => {
    return (
        <div className='bg-white rounded-xl p-4 border-2 border-gray-200'>
            <div className='relative rounded-xl overflow-hidden aspect-4/3'>
                <div className='absolute w-full h-full bg-linear-to-b from-transparent to-[#000000c5]'></div>
                <img src='https://picsum.photos/id/1018/800/800'/>
                <div className='absolute bottom-0 w-full text-center p-6'>
                    <div className='text-gray-200'>
                        <h1 className='text-2xl mb-2'>Plastic Free July</h1>
                        <p className='text-xs'>Avoid single-use plastics for an entire month to reduce landfill waste and pollution.</p>
                    </div>
                </div>
            </div>

            <div className='mt-4 flex flex-col gap-8'>
                <div className='flex items-center justify-between'>
                <div>
                    <div className='bg-[#05a14e17] text-(--primary-color) py-1 px-2 rounded-full font-bold'>Category</div>
                </div>
                <h1 className='font-bold'>5kg Plastic Saved</h1>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-center w-full'>
                        <h1 className='text-(--primary-color) font-bold mb-0.5'>0</h1>
                        <h1 className='text-xs text-gray-600 font-bold'>Participants</h1>
                    </div>
                    <div className='text-center border-x-2 border-gray-400 w-full'>
                        <h1 className='text-(--primary-color) font-bold mb-0.5'>0 days</h1>
                        <h1 className='text-xs text-gray-600 font-bold'>Duration</h1>
                    </div>
                    <div className='text-center w-full'>
                        <h1 className='text-(--primary-color) font-bold mb-0.5'>25-06-2025</h1>
                        <h1 className='text-xs text-gray-600 font-bold'>Started At</h1>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <button className='primary-btn w-full text-xs lg:text-sm'>View Details</button>
                    <button className='secondery-btn w-full text-xs lg:text-sm'>Participate</button>
                </div>
            </div>
        </div>
    );
};

export default ChallangesCard;