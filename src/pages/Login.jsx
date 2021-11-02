import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='flex flex-col w-full justify-center items-center '>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesión en tu cuenta</h2>
            <form className='mt-8 max-w-md'>
                <div>
                <input className='appearance-none relative-block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-indigo-300 focus:outline-none' type='email' placeholder='example@direccion.com' required/>
                <input className='appearance-none relative-block w-full px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:ring-indigo-300 focus:outline-none' required type='password' required/>
                </div>
                <div className='flex justify-between py-2'>
                    <div>
                        <label htmlFor='recuerdáme'>
                        <input type='checkbox' name='recuerdame' />
                            Recuerdame
                        </label>
                    </div>
                    
                    <div>
                        <Link to='/'>¿Olvidaste tu contraseña?</Link>
                    </div>
                </div>
                <div className='flex-col justify-center items-center text-center py-6'>
                    <div className='py-1'>
                        <Link to='/admin'>
                            <button type='submit'>Iniciar Sesión</button>
                        </Link>                   
                    </div>
                    <div>
                        o
                    </div>
                    <div className='py-1'>
                        <button>Continua con Google</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
