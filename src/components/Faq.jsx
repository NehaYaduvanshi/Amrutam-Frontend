import { FaPlus } from "react-icons/fa6";

function Faq() {
  return (
    <>
    <div className='bg-[#FFF6DD] w-full p-5'>
        <div className='flex flex-col items-center justify-center py-4 gap-2 w-full'>
            <div className='font-bold text-[#33643F]  text-[3rem] tracking-wide'>Frequently Asked Questions</div>
            <div className='text-zinc-600 font-semibold'>Find quick answers to common questions to help you navigate the app and its features easily.</div>
           <div className="w-full px-[10rem]">
                <div className="flex justify-between items-center w-full text-zinc-600  py-[1.5rem]">
                    <p>What is Amrutam?</p>
                    <FaPlus />
                </div>
                <div className="border-[1px] border-zinc-400 w-full "></div>
                <div className="flex justify-between items-center w-full text-zinc-600  py-[1.5rem]">
                    <p>How does Amrutam help me grow as a practitioner?</p>
                    <FaPlus />
                </div>
                <div className="border-[1px] border-zinc-400 w-full "></div>
                <div className="flex justify-between items-center w-full text-zinc-600  py-[1.5rem]">
                    <p>How do I become a part of Amrutam Doctor?</p>
                    <FaPlus />
                </div>
                <div className="border-[1px] border-zinc-400 w-full "></div>
                <div className="flex justify-between items-center w-full text-zinc-600  py-[1.5rem]">
                    <p>What is Amrutam Global as a platform?</p>
                    <FaPlus />
                </div>
                <div className="border-[1px] border-zinc-400 w-full "></div>
                <div className="flex justify-between items-center w-full text-zinc-600  py-[1.5rem]">
                    <p>What documents do I need to provide?</p>
                    <FaPlus />
                </div>
                <div className="border-[1px] border-zinc-400 w-full "></div>
            </div>
            <button className='mt-[3rem] bg-[#3A643B] text-white border-[1px] border-[#3A643B] rounded-lg text-[1rem]  px-[1.5rem] py-2'>See more</button>
            <div >
                
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Faq