import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon,faSun } from '@fortawesome/free-solid-svg-icons';

export default function Navbar({handleMode,mode}) {
  
  return (
    <div className={` flex items-center justify-between px-5 sm:px-10 lg:px-10 py-5 md:py-10 lg:py-5 sm:text-2xl lg:text-xl ${mode ? 'bg-Dark-Blue text-white' : 'bg-white border-b-2 text-Very-Dark-Blue-100 '}`}>
        <h2 className='font-bold text-sm sm:text-2xl md:text-2xl lg:text-xl'>Where in the world ?</h2>
        <div 
          className='flex items-center gap-3 cursor-pointer'
          onClick={()=>handleMode()}
        >
          {mode ? 
          (<>
           <FontAwesomeIcon icon={faMoon}/>
            <p>Dark mode</p>
            
          </>)
          :
          (<>
           <FontAwesomeIcon icon={faSun}/>
            <p>Light mode</p>
          </>
          )}
            
        </div>
    </div>
  )
}
