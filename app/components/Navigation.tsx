import React from 'react'
import { Button, Dialog, Text, TextField, Flex, Box, Card, Avatar } from '@radix-ui/themes';
import CoursesDrop from './CoursesDrop';


const Navigation = () => {
  return (
    <div className="flex flex-row justify-between items-center border-b border-[2px] border-solid bg-white text-slate-400 h-[90px] p-[16px]">
        <div className="flex flex-row items-center space-x-[60px]">
            <div><img src="/logo.svg" alt="Logo" className='w-[100px] md:w-[150px]' /></div>
            <CoursesDrop />
            <div className='cursor-pointer'>Invite a friend</div>
        </div>
        <div className="flex flex-row space-x-[20px] items-center">
            <div className="hidden md:flex">
                <form>
                    <input type="text" placeholder="Search.." className="border-[2px] w-[400px] rounded-[8px] outline-none border-solid border-gray-300 pl-[20px] pt-[12px] pb-[12px] pr-[10px]" />
                </form>
            </div>
            <div className="bg-gray-300 w-[50px] h-[50px] rounded-full flex justify-center items-center p-[12px]"></div>
        </div>
    </div>
  )
}

export default Navigation
