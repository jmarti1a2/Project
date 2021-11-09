import React from 'react'
import Sidebar from 'components/Sidebar';
import SideBarResponsive from 'components/SideBarResponsive';
import PrivateRoute from 'components/PrivateRoute';



const PrivateLayout = ({children }) => {
    return (
        <PrivateRoute>  
    <div className="flex w-screen h-screen">
        <div className='flex flex-col md:flex-row flex-nowrap h-full w-full'>
            <Sidebar/>
            <SideBarResponsive />
            <main className='flex w-full bg-blue-400 overflow-y-scroll items-center justify-center'> 
            { children}
            </main>
        </div>     
    </div>
        </PrivateRoute>
    )
}

export default PrivateLayout;