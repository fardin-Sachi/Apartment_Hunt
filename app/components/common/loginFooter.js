import Image from 'next/image'
import React from 'react'

export default function LoginFooter() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-center pb-4'>------------------------ Or ------------------------</p>
      <div className='flex w-auto rounded-[57px] max-w-[461px] ring ring-stone-300'>
        <Image 
            src={"/facebook.png"} 
            width={37} 
            height={37} 
            className='pl-2'
        />
        <p className='text-center flex-grow px-[84px] py-[13px]'>Continue with Facebook</p>

      </div>

      <div className='flex justify-center w-auto rounded-[57px] max-w-[461px] ring ring-stone-300 mt-2 mb-[93px]'>
        <Image 
            src={"/google.svg"} 
            width={37} 
            height={37} 
            className='pl-2'
        />
        <p className='text-center flex-grow px-[84px] py-[13px]'>Continue with Google</p>

      </div>
    </div>
  )
}
