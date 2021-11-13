import React from 'react'
import Logo from 'media/Logo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { loginWithRedirect } = useAuth0();
    return <nav className='bg-purple-200'>
        <ul className='flex w-full my-3'>
            <li className= "w-4/5" >
            <img src={Logo} alt='imagen' className='Logo h-8 mx-4' />
            </li>


            
          {/*   
          Lo comento por que genera error link no esta definido

          <li className='px-1 w-3/5 flex justify-end'>
                <Link to='/Registro'>
                    <button className='bg-indigo-400 p-2 text-white rounded-lg shadow-md hover:bg-indigo-800'>
                        Registrarse
                    </button>
                </Link>
            </li> */}

            <li className='px-3 w-1/5 flex justify-end'>
                
                    <button 
                    onClick={() => loginWithRedirect()}
                    className='bg-indigo-500 p-2 text-white rounded-lg shadow-md hover:bg-indigo-800'>
                        Iniciar Sesión
                    </button>
               
               
            </li>
           

        </ul>


    </nav>
}

export default Navbar
