import React from 'react'
import imagenFondo2 from 'media/imagenFondo2.jpg';

function Index() {
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

