import React from 'react'
import { DropdownMenu } from '@radix-ui/themes'

const CoursesDrop = () => {
  return (
    <div>
      <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <div className='cursor-pointer flex flex-row space-x-[12px]'>
                    Browse Courses
                </div>
            </DropdownMenu.Trigger>

            
            <DropdownMenu.Content>
                <div className="w-[450px] p-[10px] flex flex-col space-y-[8px]">
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-slate-400 cursor-pointer">Web Development</div>
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-slate-400 cursor-pointer">Web Development</div>
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-slate-400 cursor-pointer">Web Development</div>
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-slate-400 cursor-pointer">Web Development</div>
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-slate-400 cursor-pointer">Web Development</div>
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-slate-400 cursor-pointer">Web Development</div>
                    <div className="hover:bg-gray-300 pt-[13px] pl-[14px] pb-[13px] font-bold text-[16px] text-sky-400 cursor-pointer">View More</div>
                </div>
            </DropdownMenu.Content>
            
            
        </DropdownMenu.Root>
    </div>
  )
}

export default CoursesDrop
