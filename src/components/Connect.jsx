import React from 'react'

function Connect() {
  return (
    <>
    <div className='bg-[#FFF6DD]'>
        <div className='flex flex-col items-center justify-center py-4 gap-2'>
            <div className='font-bold text-[#3A643B]  text-[3rem] tracking-wide'>Let's Connect</div>
            <div className='text-zinc-600 font-semibold text-center'>We’re here to help you on your wellness journey. Reach out to us for any questions,<br /> product inquiries, or personalized advice.</div>
            <div className='p-[5rem] w-full flex justify-between items-center gap-[2rem]'>
                <div>
                    <img src="/connect/image.png" width={598} height={472} alt="" />
                </div>
                <div className='border-[1px] p-[2rem] border-zinc-400 rounded-lg grid grid-cols-2 gap-5 w-full'>
                    <div >
                        <p className='text-[14px] text-[#3A643B]'>Your Name</p>
                        <p className='text-[20px] text-[#7E7E7E]'>Vikas Kumar</p>
                        <div className='border-[1px] border-zinc-400'></div>
                    </div>
                    <div>
                        <p className='text-[14px] text-[#3A643B]'>Your Contact Number</p>
                        <p className='text-[20px] text-[#7E7E7E]'>8989898989</p>
                        <div className='border-[1px] border-zinc-400'></div>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-[14px] text-[#3A643B]'>Your Email</p>
                        <p className='text-[20px] text-[#7E7E7E]'>vikass@gmail.com</p>
                        <div className='border-[1px] border-zinc-400'></div>
                    </div>
                    <div className='col-span-2'>
                        <p className='text-[14px] text-[#3A643B] '>Your Message(Optional)</p>
                        <p className='text-[20px] text-[#7E7E7E] mb-[2rem]'>I want to On-board as a Doctor</p>
                        <div className='border-[1px] border-zinc-400'></div>
                    </div>
                    <div className='bg-[#315918] rounded-lg text-white   text-center'>
                        <button className='px-[0rem] py-2'>Send Message</button>
                    </div>
                </div>
            </div>
        </div>      
    </div>
    </>
  )
}

export default Connect