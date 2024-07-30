import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Footer = () => {
  return (
    <div className="mt-[40px] w-full h-[90px] p-[20px] flex flex-col justify-center items-center border-t border-solid border-gray-300">
        <div className="flex space-x-[15px] mb-[10px] items-center">
            <div className="border-[2px] border-solid border-customGray-200 p-[8px] rounded-full flex justify-center items-center font-md text-customGray-200 text-[20px]" title="Tor Trips">
                <FaYoutube />
            </div>
            <div className="border-[2px] border-solid border-customGray-200 p-[8px] rounded-full flex justify-center items-center font-md text-customGray-200 text-[20px]" title="info@tortrips.com">
                <IoMdMail />
            </div>
            <div className="border-[2px] border-solid border-customGray-200 p-[8px] rounded-full flex justify-center items-center font-md text-customGray-200 text-[20px]" title="0798205731">
                <IoLogoWhatsapp />
            </div>
        </div>
        <div><h3 className="text-customGray-300 font-bold select-none cursor-pointer">Copyright Tour Trips</h3></div>
    </div>
  )
}

export default Footer
