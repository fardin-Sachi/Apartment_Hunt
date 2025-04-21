"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Button from './button'
import Link from 'next/link'

export default function Card({id, imgsrc, altText, price}) {
  const [houseData, setHouseData] = useState([])
  return (
    <div className='w-[370px] h-[441px] lg:w-auto md:w-auto bg-white border'> {/* Whole Card */}
      <Image src={imgsrc} alt={altText} width={370} height={209} />
      <div className='ml-[22px]'>
        <p className='mt-[18px] mb-[8px] text-HouseName text-xl font-bold font-poppins tracking-tight'>{altText}</p>
        <div className='flex flex-row mb-[8px]'> {/* House Location */}
            <Image src="/map-marker.svg" alt="Map Marker" width={15} height={20} />
            <p className='ml-[8px] text-HouseLocation text-base font-normal font-poppins tracking-tight'>Nasirabad H/S, Chattogram</p>
        </div>
        <div className='flex flex-row mb-[42px]'> {/* Bed & Bath */}
            <Image src="/bed.svg" alt="Bed" width={24} height={24} />
            <p className='text-base text-HouseLocation font-normal font-poppins tracking-tight ml-[8px] mr-[43px]'>3 Bedroom</p>
            <Image src="/bath.svg" alt="Bath" width={24} height={24} />
            <p className='text-base text-HouseLocation font-normal font-poppins tracking-tight ml-[8px] mr-[43px]'>2 Bathroom</p>
        </div>
        <div className='flex flex-row'>
            <p className='text-HouseRent text-4xl font-bold font-poppins leading-[30px] tracking-tight mr-[89px] mt-[10px]'>{price}</p>
            
            <Link href={`${id}`}>
              <Button title="View Details" classes="text-center bg-HouseRent text-white w-[157px] h-[50px] py-[13px] px-[29px] mb-[22px]"/>
            </Link>
        </div>  
      </div>
    </div>  )
}
