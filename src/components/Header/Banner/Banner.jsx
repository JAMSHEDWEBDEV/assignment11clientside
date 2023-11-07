
const Banner = () => {
    return (
            <div className="relative mb-10">
                <img src="https://i.ibb.co/bgx8KFK/Banner.jpg" className="h-[500px] w-full" />
                <div className="absolute top-0 flex items-center  h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
                    <div className='w-full lg:w-1/2 px-8 lg:pl-12 space-y-5'>
                        <h1 className='text-3xl lg:text-6xl text-white font-bold'>Hire Experts & Get Your Any Job</h1>
                        <p className='my-5 text-white'>Connect with the largest and the most papular network of trusted people to get the best possibilities for your business.</p>
                        <button className='btn bg-red-500 border-transparent mr-5 font-bold text-white hover:text-black'>Search Job</button>
                        <button className='btn btn-outline border-red-700 border-2 text-white font-bold'>Latest Job</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;