import React from 'react'
import Navbar from '../molecules/Navbar'
import Button from '../atoms/Button'
import { FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";


const Hero = () => {
  return (
    <div className="bg-[url('/images/image1.jpg')] bg-cover bg-no-repeat bg-center h-[900px] relative cursor-pointer w-full">
      <Navbar />
      <div className='w-full h-[900px] absolute top-0 left-0 right-0 bg-blue-300/[40%] z-30'>
            <div className="pr-[60px] flex items-center justify-between h-[100vh] pl-[60px]">
                <div>
                    <div className="mb-[40px]">
                        <h3 className="text-start text-[40px] font-black logo text-primary select-none">Explore the World with<br></br> <span className="text-green-500">Amazing</span> People</h3>
                    </div>
                    <div className="mb-[40px]">
                        <h3 className="custom text-[18px] text-primary font-bold select-none">We help people explore the world by joining our trips</h3>
                    </div>
                    <div>
                        <Button />
                    </div>
                </div>
                <div className="flex flex-col space-y-[20px]">
                    <div className="border-[2px] border-solid border-primary p-[8px] rounded-full flex justify-center items-center font-md text-primary text-[20px]" title="Tor Trips">
                        <FaYoutube />
                    </div>
                    <div className="border-[2px] border-solid border-primary p-[8px] rounded-full flex justify-center items-center font-md text-primary text-[20px]" title="info@tortrips.com">
                        <IoMdMail />
                    </div>
                    <div className="border-[2px] border-solid border-primary p-[8px] rounded-full flex justify-center items-center font-md text-primary text-[20px]" title="0798205731">
                        <IoLogoWhatsapp />
                    </div>
                </div>
            </div>
      
      </div>
    </div>
  )
}

export default Hero
