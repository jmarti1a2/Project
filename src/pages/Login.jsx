import React from 'react'
import Google from 'media/google.png';
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
                            <button type='submit' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>Iniciar Sesión</button>
                        </Link>                   
                    </div>
                                       
                    <div className='flex items-center justify-center'>
                            <span className='mx-4'>------------------------</span>
                            <h2 className='my-4 text-center text-sm font-extrabold text-gray-900'>O</h2>
                            <span className='mx-4'>------------------------</span>
                    </div>
                    <div className='max-w-md w-full'>
                          <div>
                          <button
                                type='submit'
                                className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
                            >
                                <div className='flex items-center justify-start'>
                                <img src={Google} alt='Logo Google' className='h-6 w-6' />
                                <span className='mx-4'>Continúa con Google</span>
                                </div>
                            </button>
                            </div>
                        </div>
                </div>
            </form>
        </div>
    )
}

export default Login
