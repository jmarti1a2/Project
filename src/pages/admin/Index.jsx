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
                   
              <div className="w-full h-screen items-center content-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 mb-4 mt-4 text-center p-2">
                        ¡Hola!
                    </h1>

                    <div className="text-center my-2 p-2">
                    <PrivateComponent roleList={['admin','vendedor']}>
                        <p className="text-l font-semibold italic">
                            Bienvenido a la aplicación para la gestión de ventas de su organización. 
                            <br />
                            Por favor seleccione uno de los items para ingresar al módulo deseado
                        </p>
                        </PrivateComponent> 
                    </div>

                    <section className="w-full h-auto ">
                        <ul className="flex flex-wrap list-none justify-between h-auto">

                            <li className="m-10 rounded-r-lg flex flex-col justify-center items-center"> 
                             <PrivateComponent roleList={['admin']}>
                                <h2 className="text-xl font-extrabold text-gray-900 mb-2 text-center" > Módulo de Producto</h2>
                                <div className="bg-indigo-800 w-60 h-72 flex ">  
                                    <img className='object-cover rounded-xl' src={fondo_productos} alt='workflow'/>
                                </div>
                                        <Ruta ruta='/admin/productos' nombre='Productos' />
                                    </PrivateComponent> 
                            </li>
                                                              

                            <li className="m-10 rounded-r-lg flex flex-col justify-center items-center"> 
                                    <PrivateComponent roleList={['admin','vendedor']}>
                                <h2 className="text-xl font-extrabold text-gray-900 mb-2 text-center"> Módulo de Ventas</h2>
                                <div className="w-60 h-72 flex ">  
                                    <img className='object-cover rounded-xl' src={fondo_ventas} alt='workflow'/>
                                </div>
                                            <Ruta ruta='/admin/ventas' nombre='Ventas' />
                                    </PrivateComponent>
                            </li>

                            <li className="m-10 rounded-r-lg flex flex-col justify-center items-center"> 
                                    <PrivateComponent roleList={['admin']}>
                                <h2 className="text-xl font-extrabold text-gray-900 mb-2 text-center"> Módulo de Usuarios</h2>
                                <div className="w-60 h-72 flex ">    
                                    <img className='object-cover rounded-xl' src={fondo_usuarios} alt='workflow'/>
                                </div>
                                        <Ruta ruta='/admin/usuarios' nombre='Usuarios' />
                                    </PrivateComponent>
                            </li>

                        </ul>
                      </section>          
                </div>
                
            
    )
}

    const Ruta=({ruta,nombre, usuario})=> {
        const isActive = useActiveRoute(ruta)

        return (
            <Link to={ruta}> 
                <button
                className={"w-full font-semibold p-5 my-3 bg-gray-700  flex items-center justify-items-center  text-white rounded-xl text-center hover:bg-gray-900 transform hover:scale-110 motion-reduce:transform-none"} 
                    >
                    {usuario? (
                    <>
                    {usuario.name}</> 
                    ):(                  
                     <>
                     {nombre}                   
                     </>
                    )}               
                </button>   
            </Link>
        ) 
    }

export default Admin
