import React from 'react'
import Image from 'next/image'
import { services } from './common/services'

export default function Service() {
  return (
    <div className='mx-[180px] mb-[42px]'>
      <div> {/* Service Text */}
        <p className='text-center text-[#275A53] text-base font-medium font-poppins tracking-tight'>Service</p>
      </div>
      <div className='mb-[70px]'> {/* Motto Text */}
        <p className='text-center text-[#16322E] font-bold font-poppins leading-[50px] text-[34px] tracking-tight'>
        We're an agency tailored to all <br />
clients' needs that always delivers
        </p>
      </div>

      <div className='lg:xl:flex lg:xl:justify-center gap-x-[105px] md:grid md:grid-rows-2 md:content-center sm:xs:grid-rows-3 sm:xs:content-center'>
        {
            services?.map(item => 
            <div className='w-[290px] h-[242px] place-self-center'>
              <div className='flex justify-center'>
                <Image src={item.logo} alt={item.altText} width={80} height={80} className='justify-center place-self-center'/>
              </div>
              <div className='flex justify-center mt-[24px] mb-[8px]'>
                <p className='w-[255px] h-[30px] text-center text-[#16322E] text-xl font-semibold font-poppins leading-[30px] tracking-tight'>{item.title}</p>
              </div>
              <div className='flex justify-center w-[290px] h-[108px] '>
                <p className='text-center text-[#606268] text-base font-normal font-poppins leading-7 tracking-tight'>{item.descrip}</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
