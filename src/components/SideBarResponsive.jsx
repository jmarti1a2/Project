import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'

const SideBarResponsive = () => {
    const [mostrarNavegacion,setMostrarNavegacion] = useState(false)
    return (
        <div className='md:hidden' 
        onClick={()=>{setMostrarNavegacion(!mostrarNavegacion)
        }}
        >
            <i className={`mx-3 fas fa-${mostrarNavegacion?'times':'bars'} hover:text-blue-600`}/>
        {mostrarNavegacion && (
        <ul className='bg-gray-900 '>
            <ResponsiveRoute nombre='perfil' ruta='/admin/perfil'/>
            <ResponsiveRoute nombre='Productos' ruta='/admin/productos'/>
            <ResponsiveRoute nombre='Ventas' ruta='/admin/ventas'/>
            <ResponsiveRoute nombre='Usuarios' ruta='/admin/usuarios'/>
            </ul>
        )}
        
        </div>
    )
}

const ResponsiveRoute = ({ruta,nombre}) =>{
    return(
        <Link to={ruta}>
        <li className='text-gray-200 border border-gray-300 p-2' > {nombre}</li>
        </Link>

    )
}

export default SideBarResponsive
