import React from 'react'
import { Link } from 'react-router-dom'
import ImagenLogo from './ImagenLogo'

const Sidebar = () => {
    return (
    <nav className='w-72 border border-gray-300 h-full flex flex-col bg-gray-300 p-5'>
        <Link to='/admin'>
            <ImagenLogo/>
         </Link>

        <div className='my-4'>
        <Ruta icono='fas fa-car' ruta='/admin/perfil' nombre='Perfil'/>
        <Ruta icono='fas fa-car' ruta='/admin/productos' nombre='Productos'/>
        <Ruta icono='fas fa-car' ruta='/admin/ventas' nombre='Ventas'/>
        <Ruta icono='fas fa-car' ruta='/admin/usuarios' nombre='Usuarios'/>

        </div>
        <button>Cerrar sesión</button>  
    </nav>

    )}

    const Ruta=({icono,ruta,nombre})=> {
        return (
            <Link to={ruta}>
                <button className='p-1 my-3 bg-indigo-700 hover:bg-indigo-900 flex w-full items-center text-white rounded-md'>
                    <i className={`${icono} w-10`} />
                    {nombre}
                </button>   
            </Link>
        )
    }

export default Sidebar
