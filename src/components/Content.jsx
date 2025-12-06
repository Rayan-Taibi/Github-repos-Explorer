import React from 'react'
import { Github , Calendar ,MapPin , LinkIcon ,Code , ExternalLink , GitFork , Star , AlertTriangle} from 'lucide-react';

export default function Content({userInfo, repos, loading, error}) {
  
  
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).toUpperCase();
  };

  
  return (
   <>
        
    {userInfo && 
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 animate-in slide-in-from-bottom-10 fade-in duration-500 max-w-7xl mx-auto px-4 py-6 bg-[#FFFDF5]'>
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
            {userInfo.bio &&
            <div className='bg-[#F3F4F6] p-3 border-2 mb-6 border-black text-lg font-bold'>
              "{userInfo.bio}"
            </div>}  
             <div className="space-y-3 font-bold text-lg">
                  {userInfo.location && (
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      {userInfo.location.toUpperCase()}
                    </div>
                  )}
                  {userInfo.blog && (
                    <div className="flex items-center gap-2">
                      <LinkIcon className="w-5 h-5" />
                      <a href={userInfo.blog} className="hover:bg-[#A3E635] truncate">
                        {userInfo.blog}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-2 ">
                    <Calendar className="w-5 h-5" />
                    JOINED: {formatDate(userInfo.created_at)}
                  </div>
                </div>
                <div className='grid grid-cols-3 gap-2 mt-6 pt-6 border-t-4 border-black'>
                  <div className='text-center'>
                     <div className='text-center text-2xl font-bold '>{userInfo.public_repos}</div>
                     <div className='text-center text-sm  uppercase '>Repos</div>
                  </div>   
                  <div className='text-center border-r-2 border-l-2 border-black px-2'>
                     <div className='text-center text-2xl font-bold '>{userInfo.following}</div>
                     <div className='text-center text-sm  uppercase '>following</div>
                  </div>   
                  <div className='text-center'>
                     <div className='text-center text-2xl font-bold '>{userInfo.followers}</div>
                     <div className='text-center text-sm  uppercase '>Followers</div>
                  </div>   
                </div>
         </div>
        </div>
          
        {/* Right Column: Repos */}
        <div className='lg:col-span-8'>
           <div className="bg-black text-white p-4 border-4 border-black mb-6 flex justify-between items-center shadow-[4px_4px_0px_0px_#A3E635]">
                <h3 className="text-xl font-black uppercase">Repository_Index</h3>
                <Code className="w-6 h-6" />
           </div> 
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {repos.map((repo , index) =>(
              <div
               key={repo.id}
               className='group bg-white border-black border-4 p-4 hover:shadow-[8px_8px_0px_0px_#00E0FF] hover:translate-x-1 hover:translate-y-1 transition-all duration-200 flex flex-col'
               >
                <div className='flex justify-between items-start'>
                  <h4 className=' font-black text-xl leading-tight group-hover:text-[#00E0FF] transition-colors break-all'>
                    {index + 1}. {repo.name}
                  </h4>
                  <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-black text-white p-1 hover:bg-[#00E0FF] hover:text-black transition-colors"
                  >
                        <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
                <p className='text-lg font-bold text-gray-600 mb-4 flex-grow line-clamp-3'>
                    {repo.description ? repo.description : "No description provided."}
                </p>
                <div className="flex items-center justify-between text-s font-black pt-3 border-t-2 border-black mt-auto">
                      <div className="flex gap-3">
                        <span className="flex items-center gap-1 bg-[#FFBD2E] px-1 border border-black">
                          <Star className="w-3 h-3" /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1 bg-[#F3F4F6] px-1 border border-black">
                          <GitFork className="w-3 h-3" /> {repo.forks_count}
                        </span>
                      </div>
                      
                      {repo.language && (
                        <span className="bg-[#FF90E8] px-2 py-0.5 border border-black uppercase">
                          {repo.language}
                        </span>
                      )}
                 </div>

              </div>
            ))}
              
           </div>
        
        </div>   
      </div>}



    {/* Placeholder Content Section */}
      {!userInfo && !loading && !error && <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="border-4 border-gray-400 border-dashed p-6 md:p-12 text-center bg-gray-50 w-full flex flex-col items-center justify-center min-h-96">
          <div className="font-black text-2xl md:text-4xl mb-4 md:mb-6 text-gray-400">WAITING FOR INPUT...</div>
          <Github className="w-16 h-16 md:w-24 md:h-24 text-gray-400" />
        </div>
      </div>}
      
   </>
  )
}

