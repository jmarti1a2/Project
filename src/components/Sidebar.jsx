import React from 'react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import ImagenLogo from './ImagenLogo'


const Sidebar = () => {
    return (
            <nav className='hidden md:flex md:w-72 border border-gray-300 h-full flex-col bg-gray-300 p-5'>            
                <Link to='/admin'>
                    <ImagenLogo />  
                </Link>

                <div className='my-4'>
                    <Ruta icono='fa fa-user' ruta='/admin/perfil' nombre='Perfil' />
                    <Ruta icono='fas fa-shopping-basket' ruta='/admin/productos' nombre='Productos' />
                    <Ruta icono='fas fa-search-dollar' ruta='/admin/ventas' nombre='Ventas' />
                    <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
                </div>
                <button>Cerrar sesión</button>
            </nav>
    )}

    const Ruta=({icono,ruta,nombre})=> {
        const location = useLocation()
        const [isActive, setIsActive]= useState(false)

        useEffect(()=>{
            console.log(location, ruta)
            if(location.pathname.includes(ruta)){
                setIsActive(true)
            }
            else{
                setIsActive(false)
            }
        },[location, ruta])

        useEffect(()=> {
            console.log(isActive, ruta)
        },[isActive,ruta])


        return (
            <Link to={ruta}>
                <button
                className={`p-1 my-3 bg-${
                    isActive?'gray':'indigo'
                    }-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md`} 
                    >               
                    <i className={`${icono} w-10`} />
                    {nombre}
                </button>   
            </Link>
        )
    }

export default Sidebar
