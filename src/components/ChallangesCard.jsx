import { useNavigate } from 'react-router';

const ChallangesCard = ({data}) => {
    const navigate = useNavigate();
    return (
        <div className='bg-white rounded-xl p-4 border-2 border-gray-200'>
            <div className='relative rounded-xl overflow-hidden aspect-3/2'>
                <div className='absolute w-full h-full bg-linear-to-b from-transparent to-black'></div>
                <img src={data.imageUrl} className='h-full w-full bg-cover'/>
                <div className='absolute bottom-0 w-full text-center p-6'>
                    <div className='text-gray-200'>
                        <h1 className='text-2xl mb-2'>{data.title}</h1>
                        <p className='text-xs'>{data.description}</p>
                    </div>
                </div>
            </div>

            <div className='mt-4 flex flex-col gap-8'>
                <div className='flex items-center justify-between'>
                <div>
                    <div className='bg-[#05a14e17] text-(--primary-color) py-1 px-2 rounded-full font-bold'>{data.category}</div>
                </div>
                <h1 className='font-bold'>{data.impactMetric}</h1>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='text-center w-full'>
                        <h1 className='text-(--primary-color) font-bold mb-0.5'>{data.participants}</h1>
                        <h1 className='text-xs text-gray-600 font-bold'>Participants</h1>
                    </div>
                    <div className='text-center border-x-2 border-gray-400 w-full'>
                        <h1 className='text-(--primary-color) font-bold mb-0.5'>{data.duration} days</h1>
                        <h1 className='text-xs text-gray-600 font-bold'>Duration</h1>
                    </div>
                    <div className='text-center w-full'>
                        <h1 className='text-(--primary-color) font-bold mb-0.5'>{data.startDate}</h1>
                        <h1 className='text-xs text-gray-600 font-bold'>Started At</h1>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4'>
                    <button className='primary-btn w-full text-xs lg:text-sm' onClick={() => navigate(`/challanges/${data._id}`)}>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ChallangesCard;