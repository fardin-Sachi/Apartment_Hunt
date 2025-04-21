import React from 'react'
import Card from './common/card'
import houses from './common/rentHouse'

export default function Homepage() {
  return (
    <div className="w-full">
      <div className="flex justify-center mt-[28px] tracking-tight"> {/* House Rent Title*/}
        <p className="w-[91px] h-[24px] font-poppins text-base font-medium text-HouseRent">House Rent</p>
      </div>
      <div className='flex justify-center mt-[3px]'> {/* Discover Latest Rent Subtitle*/}
        <p className="text-center w-[414px] h-[100px] text-DiscoverLatestRent text-[34px] font-bold font-poppins leading-[50px] tracking-tight">Discover the latest Rent available today</p>
      </div>
        <div className='flex justify-around ml-[134px] mr-[134px] mt-[55px] mb-[104px]'>
            <div className='grid grid-rows-2 xl:grid-cols-3 lg:grid-cols-2 md:grid-col-1 gap-[30px]'>
                {
                    houses.map( (house) => <Card id={house.id} imgsrc={house.imgPath} altText={house.name} price={house.rent}/>)
                }
            </div>
        </div>
    </div>
  )
}