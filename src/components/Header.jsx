import React from 'react'

import { Terminal , Github } from 'lucide-react';

export default function Header() {
  return (
    <>
       <div className='border-b-4 border-black bg-white p-4 md:p-8 sticky top-0 z-50 flex justify-between items-center '>
        <div className="flex items-center gap-2 md:gap-3 hover:scale-105 transition-transform cursor-pointer">
          <div className='bg-black p-2 text-white  md:ml-24'>
            <Terminal className='w-5 h-5 md:w-6 md:h-6'/>
          </div>    
            <h1 className='text-xl md:text-4xl font-bold text-black '>
              <span className='hidden sm:inline'>GH_EXPLORER</span>
              <span className='sm:hidden'>GH_EX</span>
              <span className='text-[#FF00FF]'>.EXE</span> 
            </h1>      
        </div>
        <div className="flex items-center gap-3 md:gap-6 md:mr-24">
           
            <div className="flex gap-1.5 md:gap-2">
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-[#ef2525]"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-black bg-[#28C840]"></div>
          </div>
          <div className="text-black hover:text-gray-600 hover:scale-105 transition-transform cursor-pointer">
               <Github 
               onClick={() => window.open('https://github.com/Rayan-Taibi/Github-repos-Explorer')}
               target='_blank'
               className='w-8 h-8 md:w-12 md:h-12'
               />
           </div>
        </div>
       </div>
          
    </>
  )
}
