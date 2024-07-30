import React from 'react'
import Navbar from '../components/molecules/Navbar'
import PlaceCard from '../components/molecules/PlaceCard'


const Gallery = () => {
  return (
    <div>
        <Navbar />
        <div className="pt-[90px]">
            <div className="grid gap-[12px] mt-[20px] grid-cols-1 pr-[65px] pl-[65px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <PlaceCard />
            </div>
        </div>
    </div>
  )
}

export default Gallery
