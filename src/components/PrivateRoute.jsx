import React, { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom';
import { obtenerDatosUsuario } from 'utils/api';
import { useUser } from 'context/userContext';

const PrivateRoute = ({children}) => {
    const {isAuthenticated, isLoading, loginWithRedirect, getAccessTokenSilently  } = useAuth0();
    const {setUserData}= useUser()

    useEffect(() => {
    const fetchAuth0Token = async()=>{
       /*  if (localStorage.getItem('token')){
           //validar fecha de expiracion de token 
        } else {
            //pedir token
        } */
        const accessToken = await getAccessTokenSilently({
        audience: `api-autenticacion-aplicacion-des-arrolladores`,
    })
    localStorage.setItem('token', accessToken)
    console.log(accessToken)
    await obtenerDatosUsuario((response)=>{
        console.log('response',response)
        setUserData(response.data)
    },(err)=>{
        console.log('err',err)
    })    
    }
    if (isAuthenticated){
        fetchAuth0Token()
    }
    }, [isAuthenticated, getAccessTokenSilently])



    if (isLoading) return  <ReactLoading type='cylon' color='#ffffff' height={667} width={375}/>

    return isAuthenticated ? (
    <>{children}</>
    ) : ( 
        <div>
            <div className='text-9xl text-red-500'>No estas autorizado para ver este sitio</div> 
            <Link to ='/'>
            <span className='text-indigo-500 font-bold'>Llevame al home</span>          
            </Link>               
        </div>
    )      
}

export default PrivateRoute
