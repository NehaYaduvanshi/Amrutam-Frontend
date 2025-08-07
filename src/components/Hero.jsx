import React from 'react'

function Hero() {
  return (
    <>
        <div className='h-screen w-screen'>
            <div className='bg-[#373636] text-white flex items-center justify-end gap-20 p-2'>
                <div>Register Yourself As An Amrutam Doctor</div>
                <div className='mr-20'>
                    <button className='bg-[#3A643B] text-white py-2 px-[8rem] flex items-center justify-center gap-2 rounded-xl hover:bg-[#4A7B4A] transition-all duration-300'>
                        <div className='flex flex-col items-center justify-center'>
                            <span><img src="/heroImages/doctor_vector_2.png" height={10} width={10} alt="Vector2" /></span>
                            <span><img src="/heroImages/doctor_vector_1.png" height={20} width={20} alt="Vector1" /></span>
                        </div>
                        <span className='font-bold'>Join Now</span>
                    </button>
                </div>
            </div>

            <div className='bg-[#FFF6DD]'>
                <div className='flex items-center justify-center py-4'>
                    <span className='font-bold text-[#3A643B] uppercase text-xl tracking-wide'>Amrutam</span>
                </div>
                <div className='pb-3'>
                    <nav>
                        <ul className='flex items-center justify-center gap-10 text-zinc-600 font-semibold'>
                            <li className='hover:text-[#4A7B4A] transition-all duration-300'>About Us</li>
                            <li className='hover:text-[#4A7B4A] transition-all duration-300'>Onboarding</li>
                            <li className='hover:text-[#4A7B4A] transition-all duration-300'>FAQ</li>
                            <li className='hover:text-[#4A7B4A] transition-all duration-300'>Testimonials</li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='bg-[linear-gradient(to_right,#FFE6A5,#FFF6DD)] flex items-center justify-between  py-10 px-20'>
                <div className='py-[5rem]'>
                    <div className='flex flex-col items-start justify-center'>
                        <div className='text-zinc-600 font-semibold'>Namaste, Welcome to Amrutam</div>
                        <div className='text-[2rem]'><span className='text-zinc-900  font-bold'>Join Amrutam - </span> <span className='font-bold text-[#3A643B]'> Grow Your Practice</span></div>
                        <div className=' text-[0.8 rem] text-zinc-600 font-semibold text-md'>Connect with more patients, set your own schedule,<br /> and grow your Ayurvedic practice effortlessly.</div>
                        <button className='mt-10 bg-[#3A643C] text-white py-2 px-[4rem] rounded-xl text-[0.5 rem] font-bold'>
                            Join Now
                        </button>
                    </div>
                    <div className='mt-5 flex items-center justify-start gap-2 '>
                        <div className='flex flex-col items-center justify-center w-20 text-center'><span className='font-bold'>500+</span> <span className='text-[0.7rem] text-zinc-600 font-semibold'>Average Active Users</span></div>
                        <div className='h-8 border-[1px] border-[#83A78580]'></div>
                        <div className='flex flex-col items-center justify-center text-center w-20'><span className='font-bold'>40+</span> <span className='text-[0.7rem] text-zinc-600 font-semibold'>Average daily free calls</span></div>
                    </div>
                </div>
                <div >
                   <div className="relative bg-[url('/heroImages/doctor_bg_vector.png')] bg-no-repeat bg-cover bg-center w-[550px] h-[400px] overflow-hidden">
                        {/* Doctor 3 - left */}
                        <img
                            src="/heroImages/doctor_3.png"
                            width={250}
                            alt="Doctor 3"
                            className="absolute bottom-0  right-[280px] z-10"
                        />

                        {/* Doctor 1 - center/front */}
                        <img
                            src="/heroImages/doctor_1.png"
                            width={300}
                            alt="Doctor 1"
                            className="absolute bottom-0 left-[100px] z-30"
                        />

                        {/* Doctor 2 - right */}
                        <img
                            src="/heroImages/doctor_2.png"
                            width={300}
                            alt="Doctor 2"
                            className="absolute bottom-[60px] right-[30px] z-20"
                        />
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Hero


