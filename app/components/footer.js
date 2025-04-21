import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='xl:flex xs:sm:md:grid w-full lg:xl:h-[370px] bg-[#275A53] md:h-[588px] sm:xs:h-[1000px]'>
      
      {/* Location */}
      <div className='flex justify-end lg:xl:pl-[300px] pt-[77px] pr-[0px] md:sm:xs:justify-center gap-x-[14px]'>
        
        <div className=''> {/* Map Marker */}
          <Image src="/map-marker2.svg" alt="Map Marker" width={24} height={24} />
        </div>
        <div className='h-[96px] w-[346px]'>
            <p className='text-white text-base font-medium font-poppins leading-normal tracking-tight'>
            H#340 (4th Floor), Road #24,<br />New DOHS, Mohakhali, Dhaka, Bangladesh <br />Phone: 018XXXXXXXX<br/>E-mail: info@company.com
            </p>
        </div>

      </div>

      <div className='lg:flex lg:flex-row lg:gap-x-[60px] lg:mt-[58px] lg:h-[300px] md:flex md:flex-row md:justify-center md:mx-[100px] md:h-[300px] xs:sm:grid xs:sm:grid-flow-row xs:sm:grid-rows-3 xs:sm:mx-[240px] xs:sm:mt-[30px] xs:sm:mb-[20px] xs:sm:h-[790px]'>
        {/* Company */}
        <div className='w-[140px] flex flex-col gap-y-[14px]'>
          
          <div className='w-[102px] h-[34px]'>
              <p className='text-white text-xl font-semibold font-poppins leading-[34px] tracking-tight'>Company</p>
          </div>
          <div className='w-[140px] h-[170px]'>
            <p className='text-white text-base font-normal font-poppins leading-[34px] tracking-tight'>About<br/>Site Map <br/> Support Center <br/> Terms Conditions <br/> Submit Listing</p>
          </div>

        </div>

        {/* Quick Links */}
        <div className='w-[140px] flex flex-col gap-y-[14px]'>
          <div className='w-[113px] h-[34px]'>
              <p className='text-white text-xl font-semibold font-poppins leading-[34px] tracking-tight'>Quick Links</p>
          </div>
          <div className='w-[91px] h-[34px]'>
            <p className='text-white text-base font-normal font-poppins leading-[34px] tracking-tight'>Quick Links <br/> Rentals <br/> Sales <br/> Terms Conditions <br/> Our Blog</p>
          </div>
        </div>

        {/* About us */}
        <div className='w-[140px] flex flex-col gap-y-[14px]'>
          
          <div className='w-[102px] h-[34px]'>
              <p className='text-white text-xl font-semibold font-poppins leading-[34px] tracking-tight'>About us</p>
          </div>
          <div className='w-[246px] h-[112px]'>
            <p className='text-white text-base font-normal font-poppins leading-[34px] tracking-tight'>We are the top real estate 
agency in Sydney, with agents 
available to answer any 
question 24/7.</p>
          </div>
          <div className='flex gap-x-[30px]'> {/* Social Media Links */}
            <Image src="/facebook.svg" alt="Facebook" width={22} height={22} />
            <Image src="/instagram.svg" alt="Instagram" width={22} height={22} />
            <Image src="/linkedin.svg" alt="Linkedin" width={22} height={22} />
            <Image src="/youtube.svg" alt="YouTube" width={22} height={22} />

          </div>

        </div>
      </div>

    </div>
  )
}
