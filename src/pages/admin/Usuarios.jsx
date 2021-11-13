import PrivateComponent from 'components/PrivateComponent'
import { nanoid } from 'nanoid'
import React, { useState, useEffect} from 'react'
import { editarUsuario } from 'utils/api'
import { obtenerUsuarios } from 'utils/api'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const fetchUsuarios = async ()=>{
            await obtenerUsuarios(
                (respuesta)=>{
                        console.log('usuarios', respuesta.data)
                    setUsuarios(respuesta.data)
                },
                (err)=>{console.log(err)}
                )
        }
        fetchUsuarios()
    }, [])

    return (
    <div>
      
       <PrivateComponent roleList={['admin','vendedor']}>

            <button className='bg-red-400'></button>
       </PrivateComponent>
       <div className='text-gray-800 text-center text-3xl'>
           <h1>ADMINISTRACION DE USUARIOS</h1>
        </div>

    <table className='tabla'>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
                <th>Estado</th>
                <th>Rol</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map(user=>{
                return(
                    <tr key={nanoid()}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <EstadoUsuario user={user}/>
                    </td>
                    <td>
                        <RolesUsuario user={user}/>
                    </td>
                </tr>              
                )
            })}
        </tbody>
    </table>

    </div>
    
    )}

const RolesUsuario =({user})=>{
    const [rol, setRol]= useState(user.rol)

    useEffect(() => {
        const editUsuario =async ()=>{
            await editarUsuario(user._id,{ rol },(res)=>{console.log(res)},(err)=>{console.error(err)})
        }
        if(user.rol !== rol){
            editUsuario()         
        }
    }, [rol, user])
    return(
        <select value= {rol} onChange={e=>setRol(e.target.value)}>
            <option value="" disabled>Seleccione un Rol</option>
            <option value="admin">Admin</option>
            <option value="vendedor">Vendedor</option>
            <option value="sin rol">Sin Rol</option>
        </select>

    )
}

const EstadoUsuario =({user})=>{
    const [estado, setEstado]= useState(user.estado ?? '')
    
    useEffect(() => {
        const editUsuario =async ()=>{
            await editarUsuario(user._id,{ estado },(res)=>{console.log(res)},(err)=>{console.error(err)})
        }
        if(user.estado !== estado){
            editUsuario()         
        }
    }, [estado, user])
    return (<select value={estado} onChange={(e)=>setEstado(e.target.value)} >
             <option value='' disabled>
                seleccione un Estado
            </option>
            <option value="autorizado" >Autorizado</option>
            <option value="pendiente" >Pendiente</option>
            <option value="rechazado" >Rechazado</option>
            </select>
    )

}

export default Usuarios

