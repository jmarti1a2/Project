import React from 'react'
import useActiveRoute from 'hooks/useActiveRoute'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import PrivateComponent from 'components/PrivateComponent';
import fondo_productos from 'media/fondo_productos.jpg'
import fondo_ventas from 'media/fondo_ventas.jpg'
import fondo_usuarios from 'media/fondo_usuarios.jpg'





const Admin = () =>{
    const { user, logout } = useAuth0();

     return (
                    
                <div className=" w-full h-full flex flex-col items-center ">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-8 mt-4 text-center">
                        Bienvenidos
                    </h1>
                    <div className='w-full h-full flex flex-row justify-between p-3 my-4 mx-2 items-center'>
                        <div className='mx-2 flex-row justify-between text-center'>
                            <h2>Ingrese al modulo de Producto</h2>
                            <img className='mx-auto h-40 w-auto' src={fondo_productos} alt='workflow'/>
                            <PrivateComponent roleList={['admin']}>
                            <Ruta icono='fas fa-shopping-basket' ruta='/admin/productos' nombre='Productos' />
                            </PrivateComponent>
                        </div>
                        <div className='mx-2 flex-row justify-items-center text-center'>
                        <h2>Ingrese al modulo de Ventas</h2>
                        <img className='mx-auto h-40 w-auto' src={fondo_ventas} alt='workflow'/>
                            <PrivateComponent roleList={['admin','vendedor']}>
                            <Ruta icono='fas fa-search-dollar' ruta='/admin/ventas' nombre='Ventas' />
                            </PrivateComponent>
                        </div>
                        <div className='mx-2 flex-row justify-items-center text-center'>
                        <h2>Ingrese al modulo de Usuarios</h2>
                        <img className='mx-auto h-40 w-auto' src={fondo_usuarios} alt='workflow'/>
                            <PrivateComponent roleList={['admin']}>
                            <Ruta icono='fas fa-users' ruta='/admin/usuarios' nombre='Usuarios' />
                            </PrivateComponent>
                        </div>
                    </div>          

                </div>
                
            
    )
}

    const Ruta=({icono,ruta,nombre, usuario})=> {
        const isActive = useActiveRoute(ruta)

        return (
            <Link to={ruta}> 
                <button
                className={`font-semibold p-5 my-3 bg-${
                    isActive?'gray':'indigo'
                    }-700 hover:bg-indigo-900 flex justify-items-center items-center text-white rounded-xl text-center `} 
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
