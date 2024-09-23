import React from 'react'
import musicLogo from "../assets/musicLogo.jpg"
const MusicCard = () => {
  return (
    <div className='h-60 w-52 border-2 border-slate-500 text-center mt-14 cursor-pointer flex flex-col items-center justify-start gap-5 ' >
      <img src={musicLogo} alt="" className='w-full' />
      <div>
      <p className='font-semibold text-lg'>Lorem, ipsum dolor.</p>
      <p className='text-sm'>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default MusicCard