import React from 'react'

function navbar() {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50">
        <div className="h-[80px] w-full bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center max-w-7xl px-6 mx-auto shadow-lg rounded-b-lg border-b border-gray-700">
            <h2 className="text-3xl text-gray-200">Kick Exchange</h2>
        </div>
        
        {/* */}

        <div className='absolute right-6 top-1/2 -translate-y-1/2 flex gap-2 items-center'>
            {/* //make changes here */}
            <p className='text-slate-300/80 text-sm'>
                Log In
            </p>
            <p className='text-slate-300/80 text-sm'>
                Sign Up
            </p>
        </div>
    </nav>
  )
}

export default navbar