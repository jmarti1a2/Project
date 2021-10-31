import Sidebar from 'components/Sidebar';
import React from 'react'





const PrivateLayout = ({children }) => {
    return (
    <div className="flex w-screen h-screen">
        <div className='flex flex-nowrap h-full w-full'>
            <Sidebar/>
            <div className='md:hidden '>
                <i className='fas fa-bars hover:text-yellow-600'/>
            </div>   
            <main className='flex w-full bg-blue-400 overflow-y-scroll items-center justify-center'> { children}</main>
        </div>
        
        
    </div>
    )
}

export default PrivateLayout;