import React from 'react'
import Navbar from '../components/molecules/Navbar'
import Footer from '../components/molecules/Footer'
import { FaYoutube } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  return (
    <div>
        <Navbar />
        <div className="w-full h-[100vh] flex flex-col pt-[90px] items-center pr-[60px] pl-[60px]">
            <div className="mb-[15px]">
                <div><h3 className="custom font-black select-none text-gray-400 cursor-pointer text-center">FIND US</h3></div>
                <div><h3 className="logo font-black text-[32px] select-none text-center text-customGray-300 cursor-pointer">OUR LOCATION</h3></div>
            </div>
            <div className="w-full h-[600px] flex flex-col space-y-[20px] md:space-y-[0px] md:space-x-[20px] md:flex-row">
                <div className="w-full md:w-[50%]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31899.621698475774!2d30.086921334836454!3d-1.9731219315510113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7b00f9b3a35%3A0xe4d802466a3b4c82!2sAEE%20Rwanda%20-%20Head%20Office!5e0!3m2!1sen!2srw!4v1722359062866!5m2!1sen!2srw" className="w-full h-full" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="w-full bg-slate-100 p-[30px] md:w-[50%]">
                    <div className="border-b border-solid border-gray-300 pb-[20px]">
                        <h3 className="font-bold custom text-[20px] text-customGray-200 select-none">Our Contacts</h3>
                    </div>
                    <div className='w-full h-[150px] cursor-pointer mt-[20px] rounded-[20px] border-solid border-[2px] border-gray-300 p-[10px]'>
                        <p className="select-none">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deserunt architecto veniam perspiciatis! Suscipit omnis, possimus, enim illum voluptate rerum numquam deserunt in ipsam qui ab totam odit! Iusto, dolore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente deserunt architecto veniam perspiciatis! Suscipit omnis, possimus, enim illum voluptate rerum numquam deserunt in ipsam qui ab totam odit! Iusto, dolore.
                        </p>
                    </div>
                    <div className="mt-[50px] flex space-y-[30px] flex-col">

                        <div className='w-full h-[60px] p-[10px] rounded-[20px] border-solid border-[2px] border-gray-300 cursor-pointer'>
                            <div className="flex flex-row items-center space-x-[20px]">
                                <div className="border-[2px] border-solid border-customGray-200 p-[8px] rounded-full flex justify-center items-center font-md text-customGray-200 text-[20px]" title="Tor Trips">
                                    <FaYoutube />
                                </div>
                                <div><h3 className="custom font-md text-customGray-200 select-none">Tour trips</h3></div>
                            </div>
                        </div>

                        <div className='w-full h-[60px] p-[10px] rounded-[20px] border-solid border-[2px] border-gray-300 cursor-pointer'>
                            <div className="flex flex-row items-center space-x-[20px]">
                                <div className="border-[2px] border-solid border-customGray-200 p-[8px] rounded-full flex justify-center items-center font-md text-customGray-200 text-[20px]" title="Tor Trips">
                                    <IoMdMail />
                                </div>
                                <div><h3 className="custom font-md text-customGray-200 select-none">info@tourtrips.com</h3></div>
                            </div>
                        </div>

                        <div className='w-full h-[60px] p-[10px] rounded-[20px] border-solid border-[2px] border-gray-300 cursor-pointer'>
                            <div className="flex flex-row items-center space-x-[20px]">
                                <div className="border-[2px] border-solid border-customGray-200 p-[8px] rounded-full flex justify-center items-center font-md text-customGray-200 text-[20px]" title="Tor Trips">
                                    <IoLogoWhatsapp />
                                </div>
                                <div><h3 className="custom font-md text-customGray-200 select-none">0798205731</h3></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Contact
