import React from 'react'
import { AlertTriangle } from 'lucide-react';
export default function Search({username, setUsername, fetchRepos,loading , error}) {
  return (
    <>
     <div className="max-w-6xl mx-auto px-4 py-6">
      <div className='mb-16 mt-16' >
        <div className="bg-[#A3E635] border-4 border-black px-6 py-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:">
            <h2 className='text-4xl md:text-5xl font-bold '>FIND USER</h2>
          <div className='flex flex-col gap-4 mt-4 md:flex-row'> 
            <input 
            type="text"
            value={username}
            onKeyPress={(e) =>e.key === 'Enter' && fetchRepos() }
            onChange={(e) => setUsername(e.target.value)}
             placeholder="USER NAME HERE ..." 
             className="w-full h-16 bg-white border-4 border-black px-4 text-xl font-bold placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-[#FF90E8] transition-all"
             />
           <button
           onClick={fetchRepos}
           disabled={loading}
            className="h-16 px-8 bg-black text-white font-black text-xl border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all active:translate-y-1 active:translate-x-1 disabled:opacity-50 disabled:cursor-not-allowed shadow-[4px_4px_0px_0px_rgba(255,255,255,0.5)] cursor-pointer">
             { loading ? 'SEARCHING...' : 'SEARCH_DB' }
           </button>
          </div>
        </div>
      </div>
       {error && (
        <div className="bg-[#FF5D5D] border-4 border-black p-4 md:p-6 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex justify-center items-start md:items-center gap-3 md:gap-4 animate-bounce">
          <AlertTriangle className="w-6 h-6 md:w-8 md:h-8 text-black" />
          <span className="font-black text-base md:text-xl uppercase break-words">{error}</span>
        </div>
      )}
    </div>
       
    </>
  )
}
