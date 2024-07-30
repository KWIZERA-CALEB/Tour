import React from 'react'
import PlaceCard from '../molecules/PlaceCard'
import Button from '../atoms/Button'

const VisitedPlaces = () => {
  return (
    <div className="mt-[40px]">
      <div><h3 className="custom font-black select-none text-gray-400 cursor-pointer text-center">WHERE TO TOUR</h3></div>
      <div><h3 className="logo font-black text-[32px] select-none text-center text-customGray-300 cursor-pointer">MOST VISITED PLACES</h3></div>
      <div className="grid gap-[12px] mt-[20px] grid-cols-1 pr-[65px] pl-[65px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <PlaceCard />
      </div>
      <div className="flex justify-center mt-[15px]">
            <Button />
      </div>
    </div>
  )
}

export default VisitedPlaces
