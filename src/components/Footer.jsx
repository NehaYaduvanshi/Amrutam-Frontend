import React from 'react'

function Footer() {
  return (
    <>
    <div className='px-[6rem] py-[4rem] w-full h-[442px] bg-[#DBDCC4] flex justify-between items-start gap-[8rem]'>
        <div className='w-1/3'>
            <div className='font-bold text-[#3A643B] uppercase text-[2rem] tracking-wide mb-[3rem]'>
                Amrutam
            </div>
            <div>
                <div className='font-semibold text-[#3A643B] uppercase text-xl tracking-wide mb-[1.5rem]'>Get in touch</div>
                <div className='text-[20px] text-[#4C4C4C] mb-2'>support@amrutam.global</div>
                <div className='text-[20px] text-[#4C4C4C]'>Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar, Gwalior - 474001</div>
                <div className='text-[20px] text-[#4C4C4C]'>+91 9713171999</div>
            </div>
        </div>
        <div className='w-1/3'>
            <div className='font-semibold text-[#3A643B] uppercase text-xl tracking-wide mb-5'>Information</div>
            <div className='text-[20px] text-[#4C4C4C]'>About</div>
            <div className='text-[20px] text-[#4C4C4C]'>Terms and conditions</div>
            <div className='text-[20px] text-[#4C4C4C]'>Privacy Policy</div>
            <div className='text-[20px] text-[#4C4C4C]'>Privacy Policy for Mobile App</div>
            <div className='text-[20px] text-[#4C4C4C]'>Shipping and Return Policy</div>
            <div className='text-[20px] text-[#4C4C4C]'>International Delivery</div>
            <div className='text-[20px] text-[#4C4C4C]'>For Business, Hotels and Resorts</div>
        </div>
        <div className='w-1/3'>
            <div className='font-semibold text-[#3A643B] uppercase text-xl tracking-wide mb-[1.8rem]'>Follow us</div>
            <div className='text-[20px] text-[#4C4C4C]'>support@amrutam.global</div>
        </div>
    </div>
    </>
  )
}

export default Footer