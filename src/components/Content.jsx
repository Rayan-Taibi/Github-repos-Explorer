import React from 'react'
import { Github } from 'lucide-react';

export default function Content() {
  return (
   <>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-4 border-black border-dashed p-6 md:p-12 text-center bg-gray-50 w-full flex flex-col items-center justify-center min-h-96">
          <div className="font-black text-2xl md:text-4xl mb-4 md:mb-6 text-gray-400">WAITING FOR INPUT...</div>
          <Github className="w-16 h-16 md:w-24 md:h-24 text-gray-400" />
        </div>
      </div>
   </>
  )
}
