import React from 'react'

function Join() {
  return (
    <>
    <div className='flex flex-col bg-[#FFF6DD] justify-center items-center'>
        <div className='font-bold text-[#3A643B]  text-[3rem] tracking-wide'>Why Doctors Choose Us?</div>
            <div className='text-zinc-600 font-semibold'>Unlock the Benefits of Smarter Healthcare Management and Patient Care</div>
        </div>
    <div className='flex flex-col justify-center items-center w-full bg-[#FFF6DD] p-[4rem]'>
        <div>
            <img src="/join/image1.png" alt="" />
        </div>

        <div className='flex justify-center items-center gap-[2rem]'>
            <button className="mt-5 bg-[#3A643B] rounded-lg text-[1rem] text-white px-[1rem] py-2">Consultations</button>
            <button className="mt-5 text-[#3A643B] border-[1px] border-[#3A643B] rounded-lg text-[1rem]  px-[1rem] py-2">Payment withdrawal</button>
            <button className="mt-5 text-[#3A643B] border-[1px] border-[#3A643B] rounded-lg text-[1rem]  px-[1rem] py-2">Schedule</button>
        </div>
        <div className='flex justify-center items-center gap-[5rem]'>
           <div className='flex flex-col justify-center items-center mt-[5rem] gap-4'>
                <p className='text-[#3A643B] text-xl font-semibold'>Value Your Practice</p>
                <img src="/join/phone1.png" width={216} height={435} alt="" />
           </div>
           <div className='flex flex-col justify-center items-center gap-4'>
                <img src="/join/phone1.png" width={216} height={435} alt="" />
                <p className='text-[#3A643B] text-xl font-semibold'>Today's Healing Journey</p>
           </div>
           <div className='flex flex-col justify-center items-center mt-[5rem] gap-4'>
                <p className='text-[#3A643B] text-xl font-semibold'>Consultation Details</p>
                <img src="/join/phone1.png" width={216} height={435} alt="" />
           </div>
        </div>
        <button className='mt-[3rem] bg-[#3A643B] text-white border-[1px] border-[#3A643B] rounded-lg text-[1rem]  px-[1.5rem] py-2'>Join Now</button>
    </div>
    </>
  )
}

export default Join