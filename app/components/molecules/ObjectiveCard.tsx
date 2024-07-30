import React from 'react'

const ObjectiveCard = () => {
    const objectives = [
        {
            no: "1", 
            title: "We the best Tourism Company", 
            description: "Nestled in the heart of the majestic Alps, the Serene Mountain Retreat offers a tranquil escape from the hustle and bustle of city life. Enjoy breathtaking views, crisp mountain air, and a variety of outdoor activities such as hiking, skiing, and mountain biking. This retreat is perfect for nature lovers seeking peace and rejuvenation."
        },
        {
            no: "2", 
            title: "We the best Tourism Company", 
            description: "Step back in time with the Ancient Rome Exploration tour. Wander through the cobblestone streets and marvel at the iconic Colosseum, the grandeur of the Roman Forum, and the artistry of the Sistine Chapel. This tour offers a deep dive into the rich history and culture of Rome, with knowledgeable guides bringing the past to life. Ideal for history buffs and culture enthusiasts."
        },
        {
            no: "3", 
            title: "We the best Tourism Company", 
            description: "Experience the ultimate in luxury and relaxation with the Paradise Island Escape. Located in the pristine Maldives, this tour offers crystal-clear waters, white sandy beaches, and vibrant coral reefs teeming with marine life. Enjoy world-class accommodations, indulge in spa treatments, and partake in water sports like snorkeling and diving. Perfect for honeymooners, couples, and anyone looking to unwind in paradise."
        }
    ]

    const renderedObjectives = objectives.map((objective, index)=> (
        <div key={index} className='p-[18px] transition duration-500 ease-in-out hover:bg-slate-300 rounded-[8px] cursor-pointer select-none'>
            <div className="flex space-x-[20px] items-center mb-[20px]">
                <div className="bg-green-500 w-[50px] h-[50px] text-primary p-[15px] font-bold text-[20px] rounded-full flex justify-center items-center"><h3>{objective.no}</h3></div>
                <div><h3 className="custom font-bold text-[18px] text-customGray-200 select-none">| &nbsp;{objective.title}</h3></div>
            </div>
            <div>
                <p className="text-start">{objective.description}</p>
            </div>
        </div>
    ))

  return (
    <>
      {renderedObjectives}
    </>
  )
}

export default ObjectiveCard
