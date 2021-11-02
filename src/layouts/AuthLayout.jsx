
import ImagenLogo from 'components/ImagenLogo'
import React from 'react'
import { Link } from 'react-router-dom'

const AuthLayout = ({children }) => {
    return (
        <div className='min-h-full flex flex-col items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8'>
           <div className='w-full h-16 flex items-start'>  
           <Link to='/'>
           <i className='fas fa-home fa-2x cursor-pointer hover:text-indigo-500' />
               </Link>
            </div>
            <div className='max-w-md w-full flex flex-col justify-center items-center'>
                <ImagenLogo/>
                {children}
            </div>
        </div> 
    )
    
}

export default AuthLayout
