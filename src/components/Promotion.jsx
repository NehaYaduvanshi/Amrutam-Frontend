import { MdOutlineDateRange } from "react-icons/md";
import { FiClock } from "react-icons/fi";
import { MdPhotoCameraFront } from "react-icons/md";
import { LuReceiptIndianRupee } from "react-icons/lu";

function Promotion() {
  return (
    <>
    <div className='relative p-[2rem] flex justify-start items-start w-full bg-[#FFEDBF] min-h-screen gap-[8rem]'>
        <div className=' relative w-1/2'> 
            <div className="text-[#3A643C] text-[40px] font-semibold">Get Started Today - <br /> Download the App Now!</div>
            <div className="text-[#666666] mt-4">Simplify consultations, manage patients, and <br /> grow your practice—all in one place.</div>
            <div className="mt-[2rem] grid grid-cols-2 gap-3 w-[80%]">
                    <div className="flex justify-center items-center text-[1rem] gap-4">
                        <MdOutlineDateRange className="text-[3rem] inline text-[#4E7C43]"/>
                        <span className="text-[#33643F]  ml-2">Build Trust and Community with Forum</span>
                    </div>
                    <div className="flex justify-center items-center text-[1rem] gap-4" >
                        <FiClock  className="inline text-[3rem] text-[#4E7C43]"/>
                        <span className="text-[#33643F] text-[1rem] ml-2">Earn More with Pay Per Conversation</span>
                    </div>
                    <div className="flex justify-center items-center text-[1rem] gap-4">
                        <LuReceiptIndianRupee className="inline text-[3rem] text-[#4E7C43]"/>
                        <span className="text-[#33643F] text-[1rem] ml-2">Attract Patients with 5-Minute Free Call</span>
                    </div>
                    <div className="flex justify-center items-center text-[1rem] gap-4">
                        <MdPhotoCameraFront   className="inline text-[3rem] text-[#4E7C43]"/>
                        <span className="text-[#33643F] text-[1rem] ml-2">Instant Access to Your Earnings with Wallet</span>
                    </div>
                </div>

            <div className="flex justify-center items-center mt-[10rem] gap-5">
                <img src="/promotion/image6.png" width={250} height={75} alt="" />
                <img src="/promotion/image7.png" width={250} height={75} alt="" />
            </div>
        </div>
        <div className='relative w-1/2 bg-[#FFEDBF] min-h-[700px]'>
            <img className='absolute z-10' src="/promotion/image1.png" width={353.92} height={515.14} alt="" />
            <div className='absolute top-[180px] left-[15px]  p-[1rem]  z-20 w-[326.92px] h-[215.14px] bg-white rounded-[1rem]'>
                <div className='flex justify-between items-center'>
                    <div className='flex flex-col gap-2'>
                        <p className='text-[12px] text-[#2E2F2E]'>Aliana Sen</p>
                        <p className='text-[#646665] text-[10px]'>Hairfall <span className='ml-5 text-[#B26B17] p-2 bg-[#FEF6ED] font-semibold rounded-xl'>Upcoming</span></p>
                    </div>
                    <div>
                        <img src="/promotion/image2.png" height={48} width={48} alt="" />
                    </div>
                </div>
                <div className="mt-[2rem] grid grid-cols-2 gap-3">
                    <div>
                        <MdOutlineDateRange className="inline text-[#4E7C43]"/>
                        <span className="text-[#646665] text-[10px] ml-2">Tuesday, 13/09/2023</span>
                    </div>
                    <div>
                        <FiClock  className="inline text-[#4E7C43]"/>
                        <span className="text-[#646665] text-[10px] ml-2">10:30 AM</span>
                    </div>
                    <div>
                        <LuReceiptIndianRupee className="inline text-[#4E7C43]"/>
                        <span className="text-[#646665] text-[10px] ml-2">INR 800</span>
                    </div>
                    <div>
                        <MdPhotoCameraFront   className="inline text-[#4E7C43]"/>
                        <span className="text-[#646665] text-[10px] ml-2">Vedio</span>
                    </div>
                </div>
                <div className=" mt-5 flex justify-between items-center w-full">
                    <button className="px-[3rem] py-1 text-[12px] border-[1px] rounded-lg">Cancel</button>
                    <button className="px-[3rem] py-1 text-[12px] bg-[#E7E7E7] rounded-lg">Reschedule</button>
                </div>
            </div>
            <img className="absolute right-[600px] top-[130px] rounded-full" src="/promotion/image3.png" width={112} height={112} alt="" />
            <img className="absolute right-[70px] top-[180px] rounded-full" src="/promotion/image4.png" width={100} height={100} alt="" />
            <img className="absolute right-[560px] top-[380px] rounded-full " src="/promotion/image5.png" width={60} height={60} alt="" />
        </div>
    </div>
    </>
  )
}

export default Promotion