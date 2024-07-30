"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const currentPath = usePathname()
    const [showScroll, setShowScroll] = useState(false)

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 100) {
          setShowScroll(true);
        } else if (showScroll && window.pageYOffset <= 100) {
          setShowScroll(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
          window.removeEventListener('scroll', checkScrollTop);
        };
    }, [showScroll]);

    const menuLinks = [
        {label: 'Home', href: '/'},
        {label: 'About Us',href: '/about'},
        {label: 'Gallery', href: '/gallery'},
        {label: 'Contact Us', href: '/contact'},
    ]

    const renderedMenuLinks = menuLinks.map((menuLink, index)=> (
        <div key={index} className={menuLink.href === currentPath ? 'custom text-[18px] text-green-500 font-bold' : 'custom text-[18px] font-bold'}><Link href={menuLink.href}>{menuLink.label}</Link></div>
    ))


  return (
    <div className={showScroll ? "flex justify-between fixed z-50 items-center pr-[65px] pl-[65px] bg-primary h-[90px] w-full" : "flex justify-between z-50 fixed items-center pr-[60px] pl-[60px] h-[90px] w-full"}>
      <div><h3 className={showScroll ? 'font-black text-[20px] text-customGray-200 logo cursor-pointer' : 'font-black text-[20px] text-primary logo cursor-pointer'} title="Tour">Tour</h3></div>
      <div className="flex flex-row items-center space-x-[60px]">
        {renderedMenuLinks}
      </div>
    </div>
  )
}

export default Navbar
