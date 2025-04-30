import React from 'react'
import logo from '../assets/sysnova broadcast logo.png'; 

const Footer = () => {
  return (
    <div>
        <footer className="footer sm:footer-horizontal bg-gray-100 opacity-90 text-gray-800 justify-center p-4">
            
                
            <div className='flex flex-row'><span>Developed by:</span> <img src={logo} alt="" className='h-7 w-30'/></div>
        
        
    </footer>
    </div>
  )
}

export default Footer