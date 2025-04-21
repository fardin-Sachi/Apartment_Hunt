"use client"
import Image from 'next/image'
import React from 'react'
import Button from '../components/common/button'
import houses from '../components/common/rentHouse'
import { useParams } from 'next/navigation'

export default function Details({img, price}) {
  const {id} = useParams()
  return (
    <div className='mt-[3.33%] md:sm:grid md:sm:grid-flow-row md:sm:justify-items-center lg:block'>
        {/* Apartment Detail Section */}
      <aside className='lg:float-left pl-[135px] pr-[30px] pb-[55px] w-[62.87%]'>
        
          {/* Apartment Images */}
        <div className='flex flex-col'>
            <Image src={id.img}
                alt='Family Apartment Three'
                width={770}
                height={376}
            />
              {/* Four Preview Images */}
            <div className='lg:flex justify-between pt-6 grid grid-flow-cols md:grid-cols-2 gap-y-3'>
                <Image src="/images/preview1.png"
                    alt="Kitchen"
                    width={117}
                    height={111}
                />
                <Image src="/images/preview2.png"
                    alt="Entrance"
                    width={117}
                    height={111}
                />
                <Image src="/images/preview3.png"
                    alt="Dining Room"
                    width={117}
                    height={111}
                />
                <Image src="/images/preview4.png"
                    alt="Living Room"
                    width={117}
                    height={111}
                />
            </div>
              {/* Title */}
            <div className='grid gap-y-[15px] pt-12'>
                <h1 className='text-[#16322E] text-4xl font-bold font-poppins'>Family Apartment Three</h1>
                <p className='text-[#747474] text-2xl font-medium font-poppins'>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>
            </div>
              {/* Price */}
            <div className='grid gap-y-[15px] pt-12'>
                <h1 className='text-[#16322E] text-4xl font-bold font-poppins'>Price Details-</h1>
                <p className='text-[#747474] text-2xl font-medium font-poppins'>Rent/Month: $550 (negotiable) <br/> Service Charge : 8,000/= Tk per month, subject to change <br/> Security Deposit : 3 month’s rent <br/> Flat Release Policy : 3 months earlier notice required</p>
            </div>
              {/* Details */}
            <div className='grid gap-y-[15px] pt-12'>
                <h1 className='text-[#16322E] text-4xl font-bold font-poppins'>Property Details-</h1>
                <p className='text-[#747474] text-2xl font-medium font-poppins'>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area. <br/> Flat Size : 3000 Sq Feet. <br/> Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit) <br/> Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet. <br/> Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished. <br/> Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
</p>
            </div>
        </div>

      </aside>

        {/* Booking Section */}
      <aside className='object-fill float-left px-5 pt-[55px] pb-7 w-[25.69%] bg-[#F4F4F4] lg:w-[37.12%}'>
        
        <div className='grid gap-y-4'>
                <input
                type="text"
                placeholder='Full Name'
                className='text-[#737373] font-medium font-poppins py-[13px] pl-[17px] bg-white'
                />
                <input
                type="tel"
                placeholder='Phone No.'
                className='text-[#737373] font-medium font-poppins py-[13px] pl-[17px] bg-white border-[#DDDDDD]'
                />
                <input
                type="email"
                placeholder='Email Address'
                className='text-[#737373] font-medium font-poppins py-[13px] pl-[17px] bg-white border-[#DDDDDD]'
                />
                {/* <div className=''> */}
                <textarea
                type="text"
                placeholder='Message'
                className='text-[#737373] font-medium font-poppins bg-white border-[#DDDDDD] pl-[17px] pr-[17px] pb-[118px] pt-4 h-auto w-full'
                />
                {/* </div> */}
                
                <div className='pb-6 lg:pb-0'>
                  <Button title="Request Booking" classes='text-base text-center font-medium font-Montserrat bg-HouseRent text-white py-[13px] w-full rounded-[5px]'/>
                </div>
        </div>
      </aside>
    </div>
  )
}
