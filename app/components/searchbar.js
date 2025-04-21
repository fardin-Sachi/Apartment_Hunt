"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import '@fontsource-variable/montserrat';

export default function Searchbar() {
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState('Search.....')

  const handleInputChange = (e) => {
    setQuery(e.target.value)
  }
  const handleSearch = () => {
    onSearch(query)
  }
  
  return (
    <div className="bg-scroll bg-[url('/bg.png')] h-[446px] w-full">
      <div className="relative">
        <img src="/images/house.png" alt="House" className="w-full h-[446px]"  width={1441} height={554}/>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div> {/* Black Overlay */}
          
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
          
          <p className="text-white text-5xl font-bold font-Montserrat z-10 w-[90%] mb-8 h-[59px] text-center">FIND YOUR HOUSE RENT</p>{/* md:w-[70%] lg:w-[50%] xl:w-[40%]  */}
         
          <div className="flex flex-col  h-[50px] sm:flex-row w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] mx-auto py-3.5 rounded-[5px]">
            <input
              type="text"
              placeholder={searching}
              // value={query}
              onChange={handleInputChange}
              className="p-2 mb-2 sm:mr-2 sm:mb-0 border border-gray-300 rounded w-full sm:w-[65%] h-[50px]"
              onClick={()=> setSearching('')}
              onBlur={()=>setSearching("Search.....")}
            />
            <div className=''>
              <button
                onClick={handleSearch}
                className="bg-green-900 text-white px-[46px] py-[14px] rounded w-full sm:ml-2"
              >
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}