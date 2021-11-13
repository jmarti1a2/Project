import React from 'react'
import imagenFondo2 from 'media/imagenFondo2.jpg';
import { useAuth0 } from "@auth0/auth0-react";


function Index() {
    const { loginWithRedirect } = useAuth0();
    return <div className="h-full">
        <div className='flex flex-row h-full justify-center'>
            <div className="bg-white w-2/5 flex flex-col justify-center text-center" > 

                <div>
                    <h1 className='m-3 text-center text-5xl font-extrabold text-gray-900' >
                    Bienvenidos 
                    </h1>
                    <div className='m-3 text-center text-2xl font-extrabold text-gray-900' >
                    Aplicación de Gestión de Ventas
                    <br />  
                    Team Des-Arrolladores
                    </div>

                    <div className="pd-4 m-5">
                    <button 
                    onClick={() => loginWithRedirect()}
                    className='bg-indigo-500 my-2 p-2 text-2xl text-white rounded-lg shadow-md hover:bg-indigo-800 font-medium '>
                        Iniciar Sesión
                    </button>
                </div>

                </div>  

            </div>

            <div className="bg-white w-3/5 flex flex-col justify-center text-center">
                <div>
                    <img src={imagenFondo2} alt='imagen' className='rounded-full p-15' />
                </div>
            </div>
        </div>

        
        </div>
}

export default Index

