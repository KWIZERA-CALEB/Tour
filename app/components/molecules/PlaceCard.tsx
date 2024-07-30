import React from 'react'
import Button from '../atoms/Button'

const PlaceCard = () => {
    const places = [
        {name: "Akagera", location: "Nyagatare", image: "/images/image1.jpg"},
        {name: "Akagera", location: "Nyagatare", image: "/images/image2.jpg"},
        {name: "Akagera", location: "Nyagatare", image: "/images/image3.jfif"},
        {name: "Akagera", location: "Nyagatare", image: "/images/image4.jfif"},
    ]

    const renderedPlaces = places.map((place, index)=> (
        <div key={index} className="rounded-[25px] p-[8px] bg-slate-300 relative">
            <div className='h-[400px]'>
                <img src={place.image} className="w-full image h-full rounded-[25px] cursor-pointer object-cover object-center" alt={place.name} />
            </div>
            <div className="absolute bottom-[30px] left-[30px]">
                <div className="mb-[30px]">
                    <h3 className="custom font-bold text-primary/[80%] select-none">{place.name} | {place.location}</h3>
                </div>
                <Button />
            </div>
        </div>
    ))

  return (
    <>
        {renderedPlaces}
    </>
  )
}

export default PlaceCard
