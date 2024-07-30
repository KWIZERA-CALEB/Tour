import React from 'react'
import ObjectiveCard from '../molecules/ObjectiveCard'

const Objectives = () => {
    
  return (
    <div className="mt-[40px]">
      <div><h3 className="custom font-black select-none text-gray-400 cursor-pointer text-center">WHY TOUR</h3></div>
      <div><h3 className="logo font-black text-[32px] select-none text-center text-customGray-300 cursor-pointer">OUR OBJECTIVES</h3></div>
      <div className="grid gap-[12px] mt-[20px] grid-cols-1 pr-[65px] pl-[65px] sm:grid-cols-2 md:grid-cols-3">
            <ObjectiveCard />
      </div>
    </div>
  )
}

export default Objectives
