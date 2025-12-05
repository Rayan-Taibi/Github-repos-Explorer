import React from 'react'
import { Github } from 'lucide-react';

export default function Content({userInfo, repos, loading, error}) {
  
  

  
  return (
   <>
    {userInfo && 
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 animate-in slide-in-from-bottom-10 fade-in duration-500'>
        {/* Left Section - User Info */}
        <div className="lg:col-span-4">
          <div className="bg-white border-4 border-black p-6 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sticky top-24">
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2"></div>
                <img 
                src={userInfo.avatar_url}
                 alt={userInfo.login}
                 className=' w-full aspect-square object-cover border-4 border-black grayscale hover:grayscale-0 transition-all duration-300'
                />
            </div>
            <h2 className='font-bold text-3xl leading-none mb-0.5'>{userInfo.name}</h2>
            <a 
            href={userInfo.html_url}
            className=' text-lg font-bold text-[#FF00FF]'

            >
              @{userInfo.login}
            </a>
          </div>
        </div>
      </div>}



    {/* Placeholder Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-4 border-gray-400 border-dashed p-6 md:p-12 text-center bg-gray-50 w-full flex flex-col items-center justify-center min-h-96">
          <div className="font-black text-2xl md:text-4xl mb-4 md:mb-6 text-gray-400">WAITING FOR INPUT...</div>
          <Github className="w-16 h-16 md:w-24 md:h-24 text-gray-400" />
        </div>
      </div>
      
   </>
  )
}

