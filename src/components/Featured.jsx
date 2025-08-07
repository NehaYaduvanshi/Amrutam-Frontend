import React from 'react'

function Featured() {
  return (
    <>
    <div className='bg-[#FFF6DD]'>
        <div className='flex flex-col items-center justify-center py-4 gap-2'>
            <div className='font-bold text-[#3A643B]  text-[3rem] tracking-wide'>Featured</div>
            <div className='text-zinc-600 font-semibold'>Recognized and celebrated by leading publications - Amrutam in the spotlight!</div>
            <div className='mt-5 flex justify-between items-center gap-4'>
                <img className='rounded-lg' src="/feature/img1.png" width={148} height={96} alt="image" />
                <img className='rounded-lg' src="/feature/img2.png" width={109} height={70} alt="image" />
                <img className='rounded-lg' src="/feature/img3.png" width={123} height={58} alt="image" />
                <img className='rounded-lg' src="/feature/img4.png" width={105} height={68} alt="image" />
                <img className='rounded-lg' src="/feature/img5.png" width={160} height={90} alt="image" />
                <img className='rounded-lg' src="/feature/img6.png" width={87} height={46} alt="image" />
                <img className='rounded-lg' src="/feature/img7.png" width={106} height={63} alt="image" />
                <img className='rounded-lg' src="/feature/img8.png" width={121} height={35} alt="image" />
                <img className='rounded-lg' src="/feature/img9.png" width={74} height={74} alt="image" />
            </div>
        </div>
        
    </div>
    </>
  )
}

export default Featured