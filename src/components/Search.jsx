import React from 'react'

export default function Search() {
  return (
    <>
     <div className="max-w-6xl mx-auto px-4 py-6">
      <div className='mb-16 mt-16' >
        <div className="bg-[#A3E635] border-4 border-black px-6 py-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className='text-4xl md:text-5xl font-bold '>FIND USER</h2>
            <div className='flex gap-4 mt-4'>
            <input 
            type="text"
             placeholder="USER NAME HERE ..." 
             className="flex-1 h-14 md:h-16 px-4 border-4 border-black bg-white text-lg md:text-xl font-bold placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF00FF] transition-all"
             />
           <button
            className="h-14 md:h-16 px-6 md:px-8 bg-black text-white font-bold text-lg md:text-2xl border-4 border-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-white hover:text-black transition-all whitespace-nowrap active:translate-y-1 active:translate-x-1 hover:cursor-pointer">
             SEARCH USER
           </button>
           </div>
        </div>
      </div>
    </div>
    </>
  )
}
