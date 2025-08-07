import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosLink } from "react-icons/io";
import { LuGraduationCap } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { GiLindenLeaf } from "react-icons/gi";
import { SiSessionize } from "react-icons/si";
import { FaCheck } from "react-icons/fa6";
import { MdAccountBalanceWallet } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";

function About() {
   return (
    <>
    <div className='bg-[#FFF6DD]'>
        <div className='flex flex-col items-center justify-center py-4 gap-2 px-[7rem]'>
            <div className='font-bold text-[#3A643B]  text-[3rem] tracking-wide'>Why Doctors Choose Us?</div>
            <div className='text-zinc-600 font-semibold'>Unlock the Benefits of Smarter Healthcare Management and Patient Care</div>
            {/* feature 1 */}
            <div className='mt-[5rem] w-full flex justify-between  gap-[7rem]'>
                <div className="relative bg-[url('/feature/feature1/vector.png')] bg-no-repeat bg-cover w-[300px] h-[280px] ">

                    <div className="absolute flex items-center justify-center top-0 w-[84px] h-[84px] rounded-full border-[#3A643C] p-1 bg-[#DBDCC4]"><FaPhoneVolume className="w-[36px] h-[36px] text-[#3A643C]" /></div>
                    
                    <div className="absolute left-[200px] top-[50px] p-4 w-[306px] h-[94.73px] bg-white rounded-xl flex  gap-2 justify-start items-center">
                        <img  src="/feature/feature1/image.png" width={65.44} height={66.06} alt="image" />
                        <div className="flex flex-col justify-center">
                            <p className="text-zinc-800 text-[0.77rem] font-semibold mb-2">Dr. Prerna Narang</p>
                            <div className="flex justify-start items-center text-zinc-400 gap-2 mb-1">
                                <IoIosLink className=" w-[9.97px] h-[9.97px]" />
                                <div className="text-[0.63rem]  text-center"> Gynecology + 2 others</div>
                            </div>
                            <div className="flex justify-start items-center text-zinc-400 gap-2 mb-1">
                                <LuGraduationCap  className=" w-[9.97px] h-[9.97px]" />
                                <div className="text-[0.63rem] text-center">7 years of Experience</div>
                            </div>
                        </div>
                        <div className="ml-10 flex justify-center items-center text-zinc-400 rounded-full w-[26.18px] h-[26.18px] border-[1px]">
                            <FaArrowRightLong />
                        </div>
                    </div>

                    <div className="absolute bottom-0 right-[150px] p-4 w-[206px] h-[127px] bg-white rounded-xl flex flex-col gap-2 justify-center items-center">
                        <p className="text-zinc-800">Connecting...</p>
                        <div className="relative">
                            <img  src="/feature/feature1/image.png" width={35.13} height={43.43} alt="image" />
                            <div className="absolute left-1 top-1/2 translate-x-1/2 translate-y-1/2 rounded-full border-[#3A643C] border-[1px] p-1 bg-white"><FaPhoneVolume className="w-[5.24px] h-[5.24px] text-[#3A643C]" /></div>
                        </div>
                        <div className="text-[0.45rem] text-zinc-400 px-5 text-center">You'll receive a call shortly from +917314855977. This call will be recorded for you to review later.</div>
                    </div>
                </div>
                <div className='w-1/2 pl-[4rem]'>
                    <div className='text-[#3A643C] text-[1.75rem] font-semibold mb-5'>Instant <span className='font-bold'>FREE</span> 5-Mins Call</div>
                    <div className='text-zinc-600 text-[1.125rem]'>We understand the importance of building trust with your patients. That's why Amrutam offers a <span className='text-zinc-800 font-semibold'>free 5-minute call</span>, helping you connect instantly and foster lasting patient relationships with ease.</div>
                </div>
            </div>

             {/* Feature 2   */}
            <div className='mt-[5rem] w-full flex justify-start gap-[6rem]'>
                <div className='w-1/2'>
                    <div className='text-[#3A643C] text-[1.75rem] font-semibold mb-5'>Instant <span className='font-bold'>FREE</span> 5-Mins Call</div>
                    <div className='text-zinc-600 text-[1.125rem]'>We understand the importance of building trust with your patients. That's why Amrutam offers a <span className='text-zinc-800 font-semibold'>free 5-minute call</span>, helping you connect instantly and foster lasting patient relationships with ease.</div>
                </div>
                <div className="relative bg-[url('/feature/feature2/vector.png')] bg-no-repeat bg-cover w-[300px] h-[280px] ">

                    <div className="absolute flex items-center justify-center top-0 w-[84px] h-[84px] rounded-full border-[#3A643C] p-1 bg-[#DBDCC4]"><GiLindenLeaf  className="w-[36px] h-[36px] text-[#3A643C]" /></div>
                    
                    <div className="absolute left-[190px]  p-4 w-[277px] h-[170.64px] bg-white rounded-xl flex flex-col gap-2 justify-start items-center">
                        <div className="flex justify-between items-center gap-[5rem]">
                            <button className="rounded-sm text-[0.35rem] px-[1rem] py-[1px] text-[#3A643B] font-bold">Questions</button>
                            <button className=" rounded-sm text-[0.35rem] px-[1rem] py-[1px] text-zinc-400 font-bold">Thoughts</button>
                        </div>
                        <div className="border-zinc-300  border-[0.5px] w-full"></div>
                       
                        <div className="flex justify-between items-start w-full">
                            <div className="flex justify-center items-center gap-1">
                                <img  src="/feature/feature2/image.png" width={20.35} height={20.35} alt="image" />
                                <p className="text-[0.38rem] text-[#3A643B] font-bold">Priya Singh</p>
                            </div>
                            <div>
                                <button className="text-[0.34rem] bg-[#3A643B] px-8 py-1 rounded-sm text-white">Ask Question</button>
                            </div>
                        </div>
                        <div className="border-zinc-300  border-[0.2px] w-full"></div>
                        <div className="flex justify-start gap-1 items-start w-full">
                            <div className="px-1 py-[0.7px] border-[1px] border-zinc-700 rounded-full">
                                <img className="rounded-full"  src="/feature/feature2/admin_logo.png" width={10.13} height={15.97}  alt="image" />
                            </div>
                            <div>
                                <div className="text-[0.50rem] ">Anonymous</div>
                                <div className="text-[0.30rem] text-zinc-400 font-bold">5 days ago</div>
                            </div>
                            
                        </div>
                        <div className="text-[0.50rem]">Question: Can Ayurveda help with stress and mental health issues? </div>
                        <div className="text-[0.30rem] text-zinc-600">Explores the potential benefits of traditional Ayurvedic practices in managing stress and improving mental well-being, examining holistic approaches like herbal remedies, meditation, and lifestyle adjustments.</div>
                        
                    </div>

                    <div className="absolute top-[130px] bottom-0 right-[150px] w-[151.26px] h-[243.23px] bg-white rounded-xl flex flex-col gap-2 justify-start items-center">
                        <div className="bg-[linear-gradient(to_right,#CFEBCF80,#EAF2EA)] w-full p-5 rounded-b-[2rem]">
                            <p className="text-zinc-800">Forum</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <button className="rounded-sm text-[0.35rem] px-[1rem] py-[1px]">Questions</button>
                            <button className="bg-black text-white rounded-sm text-[0.35rem] px-[1rem] py-[1px]">Thoughts</button>
                        </div>
                        <div className="flex justify-between items-center gap-1">
                            <img className="rounded-full"  src="/feature/feature2/image1.png" width={17.75} height={17.75}  alt="image" />
                            <div>
                                <div className="text-[0.40rem] ">Dr. Marium Roy</div>
                                <div className="text-[0.30rem] text-zinc-400">5 days ago</div>
                            </div>
                            <CiMenuKebab className="text-[0.60rem] ml-10"/>
                        </div>
                        <div className="text-[0.39rem] text-zinc-700 px-4"><span className="text-zinc-800 font-bold">Thought: </span>Can Ayurveda help with stress and mental health issues? </div>
                        <div className="text-[0.39rem] text-zinc-700 px-2 mt-2 overflow-hidden">Ayurveda, one of the world's oldest holistic healing systems, originated in India over 3,000 years ago and is still widely practiced today. It is based on the belief that health and wellness depend on a delicate balance between the mind, body, and spirit. Unlike conventional medicine, Ayurveda emphasizes prevention and the personalized treatment of diseases through a combination of diet, herbal remedies, exercise.</div>
                    </div>
                </div>
                
            </div>

            {/* Feature3 */}
            <div className='mt-[7rem] w-full flex justify-between items-start'>
                <div className="relative bg-[url('/feature/feature1/vector.png')] bg-no-repeat bg-cover w-[300px] h-[280px] ml-[5rem]">

                    <div className="absolute flex items-center justify-center left-[250px] top-[20px]  w-[84px] h-[84px] rounded-full border-[#3A643C] p-1 bg-[#DBDCC4]"><SiSessionize className="w-[36px] h-[36px] text-[#3A643C]" /></div>
            
                    <div className="absolute  bottom-0 left-[200px]  px-3 py-2 w-[208px] h-[123px] bg-white rounded-xl flex  gap-2 justify-start items-center">
                        <div className="text-[0.57rem] text-zinc-600"> <span className="text-[0.77rem] text-zinc-800">Hi, Dr. Prerna, here are my details:</span> <br /> Name: Geetanjali Shah <br />Age: 34 <br />Gender:  Female <br />Height:   134 cm <br />Weight:   64 kg <br />Concern:  Immunity</div>
                    </div>

                    <div className="absolute bottom-[80px] right-[150px] p-4 w-[288px] h-[106px] bg-white rounded-xl flex  gap-2 flex-col justify-center items-center">
                        <div className="flex justify-between items-center w-full">
                            <p className="text-zinc-800 text-[0.75rem]">Select your mode of session</p>
                            <div className="w-1/3 border-[1px] border-zinc-600"></div>
                        </div>
                        <div className="flex justify-between items-center w-full gap-3 text-[7.89px]">
                            <div className="flex flex-col justify-center items-center w-full border-[1px] py-2 rounded-lg">
                                <div>Free Call</div>
                                <div>₹15 / Min</div>
                            </div>
                            <div className="flex flex-col justify-center items-center w-full border-[1px] py-2 rounded-lg text-[#3A643B] bg-[#F2FBF2]">
                                <div className="flex justify-center items-center gap-1">
                                    <div>Vedio </div>
                                    <div className="p-[0.1rem] bg-[#3A643B] rounded-full"><FaCheck className="text-white" /></div>
                                </div>
                                <div>₹15 / Min</div>
                            </div>
                            <div className="flex flex-col justify-center items-center w-full border-[1px] py-2 rounded-lg">
                                <div>Chat</div>
                                <div>₹15 / Min</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 pl-[4rem] mt-[5rem]'>
                    <div className='text-[#3A643C] text-[1.75rem] font-semibold mb-5'>Choose Your Session Mode</div>
                    <div className='text-zinc-600 text-[1.125rem]'>Amrutam offers you to connect with patients via Instant Chat, Instant Call, or Schedule Video call. Each option offers flexibility and personalized care to suit individual needs.</div>
                </div>
            </div>

             {/* Feature 2   */}
            <div className='mt-[5rem] w-full flex justify-start gap-[6rem]'>
                <div className='w-1/2'>
                    <div className='text-[#3A643C] text-[1.75rem] font-semibold mb-5'>Smart Wallet</div>
                    <div className='text-zinc-600 text-[1.125rem]'>We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.</div>
                </div>
                <div className="relative bg-[url('/feature/feature2/vector.png')] bg-no-repeat bg-cover w-[300px] h-[280px] ">

                    <div className="absolute flex items-center justify-center top-0 w-[84px] h-[84px] rounded-full border-[#3A643C] p-1 bg-[#DBDCC4]"><MdAccountBalanceWallet   className="w-[36px] h-[36px] text-[#3A643C]" /></div>
                    
                    <div className="absolute left-[190px]  p-4 w-[253px] h-[95px] bg-white rounded-xl flex flex-col gap-2 justify-start ">
                        <div className="text-[0.75rem]">Recent Withdrawls</div>
                        <div className="flex justify-start items-center w-full ">
                            <div className="flex flex-col justify-start items-start w-full gap-1">
                                <button className="rounded-sm text-[0.65rem] px-[1rem] py-[1px] text-zinc-600 font-bold">28th July 2024</button>
                                <button className=" rounded-sm text-[0.55rem] px-[1rem] py-[1px] text-zinc-400 font-semibold">Money withdrawal</button>
                            </div> 
                            <div className="text-[0.55rem]"><LiaRupeeSignSolid className="inline"/>44,000.00</div>
                        </div>
                    </div>

                    <div className="absolute top-[130px] bottom-0 right-[150px] p-4 w-[271.26px] h-[126.23px] bg-white rounded-xl flex flex-col justify-start items-start ">
                       <p className="text-[0.75rem] text-[#3A643B]">Amratum Account</p> <br />
                        <p className="font-bold text-[#3A643B] "><LiaRupeeSignSolid className="inline" />12,000.00</p> 
                        <button className="mt-5 bg-[#3A643B] rounded-lg text-[0.75rem] text-white px-[1rem] py-2">Request Withdrawal</button>
                    </div>
                </div>
                
            </div>
        </div>    
    </div>
    </>
  )
}

export default About