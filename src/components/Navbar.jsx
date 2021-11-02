import React from 'react'
import Logo from 'media/Logo.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return <nav className='bg-purple-300'>
        <ul className='flex w-full justify-between my-3'>
            <li>
            <img src={Logo} alt='imagen' className='Logo h-8 mx-4' />

            </li>
            <li>Boton Nav1</li>
            <li>Navegacion2</li>
            <li>Navegacion3</li>
            <li className='px-3'>
                <Link to='/login'>
                    <button className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-800'>
                        Iniciar Sesión
                    </button>
                </Link>
               
            </li>
           

        </ul>


    </nav>
}

export default Navbar
