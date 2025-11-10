
const TipsCard = () => {
    return (
        <div className='p-4 bg-white rounded-xl border-2 border-gray-200'>
            <div className='flex flex-col md:flex-row gap-6 items-center justify-between'>
                <div className='max-w-[300px]'>
                    <h1 className='text-2xl mb-2 font-bold'>How to compost at home</h1>
                    <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ea reprehenderit culpa animi eveniet enim voluptatibus. Fuga veritatis quas, consequatur soluta reiciendis debitis repellat tempore non, ratione officia fugit nam?</p>
                </div>
                <div>
                    <h1><span className='font-bold'>By:</span> user@gmail.com</h1>
                    <h1><span className='font-bold'>Upvotes:</span> 26</h1>
                    <h1><span className='font-bold'>Created At:</span> 24-09-2025</h1>
                </div>
            </div>
            <h1 className='text-(--primary-color) underline cursor-pointer text-center mt-4'>Read Article</h1>
        </div>
    );
};

export default TipsCard;