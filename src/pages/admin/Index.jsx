import React from 'react'
import useActiveRoute from 'hooks/useActiveRoute'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from 'components/PrivateComponent';

const Admin = () =>{
    const { user, logout } = useAuth0();

     return (
                    
                
                <div className='max-w-xl flex flex-row justify-between my-4 mx-5'>
                    <PrivateComponent roleList={['admin']}>
                    <Ruta icono='fas fa-shopping-basket' ruta='/admin/productos' nombre='Productos' />
                    </PrivateComponent>
                    <PrivateComponent roleList={['admin','vendedor']}>
                    <Ruta icono='fas fa-search-dollar' ruta='/admin/ventas' nombre='Ventas' />
                    </PrivateComponent>
                    <PrivateComponent roleList={['admin']}>
                    <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
                    </PrivateComponent>
                </div>          
            
    )
}



    const Ruta=({icono,ruta,nombre, usuario})=> {
        const isActive = useActiveRoute(ruta)

        return (
            <Link to={ruta}> 
                <button
                className={`p-5 my-3 bg-${
                    isActive?'gray':'indigo'
                    }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`} 
                    >
                    {usuario? (
                    <>
                    
                    {usuario.name}</> 
                    ):(                  
                     <>
                     <i className={`${icono} w-10`} />
                     {nombre}                   
                     </>
                    )}               
                </button>   
            </Link>
        ) 
    }

  
export default Admin
