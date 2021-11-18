import useActiveRoute from 'hooks/useActiveRoute'
import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './ImagenLogo'
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from './PrivateComponent';


const Sidebar = () =>{
    const { user, logout } = useAuth0();

    const cerrarSesion = () =>{
        
        logout({ returnTo:'https://lit-caverns-59267.herokuapp.com/admin'})
        localStorage.setItem('token',null)
    }
    return (
            <nav className='hidden md:flex md:w-72 border border-gray-300 h-full flex-col bg-gray-300 p-5'>            
                <Link to='/admin'>
                    <ImagenLogo />  
                </Link>

                <div className='my-4'>
                    <Ruta icono='fa fa-user' ruta='/admin/perfil' nombre='Perfil' usuario={user}/>
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
                <button className={`p-1 my-3 bg-gray-400 hover:bg-red-600 w-full items-center text-white text-center rounded-md transform hover:scale-110 motion-reduce:transform-none`}
                onClick={() => cerrarSesion()}>              
                Cerrar Sesión
                </button>              
            </nav>
    )}

    const Ruta=({icono,ruta,nombre, usuario})=> {
        const isActive = useActiveRoute(ruta)

        return (
            <Link to={ruta}> 
                <button
                className={`p-1 my-3 bg-${
                    isActive?'gray':'indigo'
                    }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md transform hover:scale-105 motion-reduce:transform-none`} 
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

export default Sidebar
