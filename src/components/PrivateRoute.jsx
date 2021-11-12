import { useUser } from 'context/userContext';
import React from 'react';

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol)) {
    return children;
  }

  return  <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio</div> 
};


    
   /*  return isAuthenticated ? (
    <>{children}</>
    ) : ( 
        <div>
            <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio</div> 
            <Link to ='/'>
            <span className='text-indigo-500 font-bold'>Llevame al home</span>          
            </Link>               
        </div>
    )       
} */

export default PrivateRoute;
