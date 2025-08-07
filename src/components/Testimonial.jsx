import { IoStarSharp } from "react-icons/io5";

function Testimonial() {
  return (
    <>
    <div className='flex flex-col bg-[#FFF6DD] justify-center items-center'>
        <div className='font-bold text-[#3A643B]  text-[3rem] tracking-wide'>What other Ayurvedic Doctors are Saying</div>
        <div className='text-zinc-600 font-semibold'>Trusted by experts - Hear what Ayurvedic doctors say about Amrutam!</div>

        <div className=' mt-[3rem] flex justify-center items-center gap-5'>
            <div className='px-[2rem] py-[1.5rem] w-[347px] h-[190px] bg-[#FFEEC3] rounded-lg'>
                <div className="flex justify-start items-center w-full gap-2">
                    <img src="/testimonial/image1.png" width={68} height={68} alt="" />
                    <div>
                        <p className="text-zinc-800 text-[0.8rem] font-semibold">Dr. Rajesh Iyer, <span className="text-zinc-500">Ayurvedic Practitioner</span></p>
                        <IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-zinc-400 "/>
                    </div>
                </div>
                <div className="text-zinc-500 mt-2  text-[0.65rem]">
                    "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."
                </div>
            </div>

             <div className='px-[2rem] py-[3rem] w-[480px] h-[283px] bg-[#FFEEC3] rounded-lg'>
                <div className="flex justify-start items-center w-full gap-2">
                    <img src="/testimonial/image1.png" width={68} height={68} alt="" />
                    <div>
                        <p className="text-zinc-800 font-semibold">Dr. Rajesh Iyer, <span className="text-zinc-500">Ayurvedic Practitioner</span></p>
                        <IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-zinc-400 "/>
                    </div>
                </div>
                <div className="text-zinc-500 mt-[2rem]">
                    "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."
                </div>
            </div>

             <div className='px-[2rem] py-[1.5rem] w-[347px] h-[190px] bg-[#FFEEC3] rounded-lg'>
                <div className="flex justify-start items-center w-full gap-2">
                    <img src="/testimonial/image1.png" width={68} height={68} alt="" />
                    <div>
                        <p className="text-zinc-800 text-[0.8rem] font-semibold">Dr. Rajesh Iyer, <span className="text-zinc-500">Ayurvedic Practitioner</span></p>
                        <IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-[#FFB800]"/><IoStarSharp  className="inline text-zinc-400 "/>
                    </div>
                </div>
                <div className="text-zinc-500 mt-2  text-[0.65rem]">
                    "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle."
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Testimonial