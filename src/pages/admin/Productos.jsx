import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { Dialog, Tooltip } from '@material-ui/core';
import { obtenerProductos, crearProducto, editarProducto, eliminarProducto } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css'
//import ReactLoading from 'react-loading';

const Productos = () => {
    const [mostrarTabla,setMostrarTabla ] = useState(true);
    const [productos,setProductos] = useState([])
    const [textoBoton,setTextoBoton] = useState('Crear nuevo Producto');
    const [colorBoton, setColorBoton]= useState('indigo')
    const [ejecutarConsulta, setEjecutarConsulta]=useState(true)
    //const [loading, setLoading] = useState(false);

    useEffect(()=>{
        console.log('consulta', ejecutarConsulta)
        if (ejecutarConsulta) {
            obtenerProductos(
                (response) => {
                    setProductos(response.data);
                },
                (error)=> {
                    console.error(error)
                }
            )      
            setEjecutarConsulta(false)
        }
    },[ejecutarConsulta])

    
    
    useEffect(()=>{    
        //obtener lista de productos desde el backend
    if(mostrarTabla){
        setEjecutarConsulta(true)
    }
    },[mostrarTabla])


    useEffect(()=>{    
        //obtener lista de productos desde el backend
    if(mostrarTabla){  
        setEjecutarConsulta(true)    
    }
    },[mostrarTabla])

    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Crear nuevo Producto');
            setColorBoton('gray');
        }
        else{
            setTextoBoton('Mostrar todos los Productos');
            setColorBoton('indigo');
        }
    },[mostrarTabla])
    
    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
            <h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de Productos</h2>
            <button 
                onClick={() => {
                    setMostrarTabla(!mostrarTabla)
                    }} 
                    className={`text-white bg-${colorBoton}-700 p-5 rounded-full`}
                >
                    {textoBoton}                       
            </button>
            </div>
            
            {mostrarTabla ? (
            <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} /> 
            ): (
            <FormularioCreacionProductos 
            setMostrarTabla={setMostrarTabla}
            listaProductos={productos} 
            setProductos={setProductos}/>
            )}  
            <ToastContainer position='bottom-center' autoClose={5000}/> 
        </div>  
    )
}

const TablaProductos = ({listaProductos, setEjecutarConsulta})=>{
    useEffect(()=>{
        console.log('este es el listado de productos en el componente tabla', listaProductos)
    },[listaProductos])
    
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-2xl font font-extrabold text-gray-800'>Todos los Productos</h2>
            
            <table className='tabla'>
            <thead>
                <tr>    
                <th>Identificador único</th>
                <th>Descripción</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos.map((producto)=>{
                    return (
                        <FilaProducto  
                        key={nanoid()} 
                        producto={producto} 
                        setEjecutarConsulta={setEjecutarConsulta}/>   
                    )               
                })}
            </tbody>
        </table>
       
        </div>
        
    )
    
}


const FilaProducto = ({producto, setEjecutarConsulta})=> {
    const [edit, setEdit] = useState(false)
    const [openDialog,setOpenDialog] = useState(false)
    const [infoNuevoProducto, setInfoNuevoProducto]= useState({
        _id:producto._id,
        descripcion:producto.descripcion,
        valorUnitario:producto.valorUnitario,
        estado:producto.estado
    })

    const actualizarProducto =async()=>{ 
        
        await editarProducto(
            producto._id, 
            {
                descripcion:infoNuevoProducto.descripcion, 
                valorUnitario:infoNuevoProducto.valorUnitario, 
                estado:infoNuevoProducto.estado,
            }, 
            (response)=>{
                console.log(response.data);
                toast.success('producto editado con éxito')
                setEdit(false)
                setEjecutarConsulta(true)
            },
            (error) =>{
                toast.error('error modificando el producto')
                console.error(error);
            } 
          )
    }

    const deleteProducto =async()=>{
        await eliminarProducto(
            producto._id,
            (response) => {
                console.log(response.data)
                toast.success('producto eliminado con exito')
                setEjecutarConsulta(true)
        },error=>{
            console.error(error)
            toast.error('error eliminando el producto')

        })
        setOpenDialog(false)    
    } 

    return(
        <tr>
            {edit?(
                <>
                    <td>{infoNuevoProducto._id}</td>             
                    <td><input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                    type="text" 
                    value={infoNuevoProducto.descripcion}
                    onChange={e=>
                        setInfoNuevoProducto({...infoNuevoProducto, descripcion: e.target.value})}

                    />
                    </td>

                    <td><input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                    type="text" 
                    value={infoNuevoProducto.valorUnitario}
                    onChange={e=>
                        setInfoNuevoProducto({...infoNuevoProducto, valorUnitario: e.target.value})}
                    />
                    </td>

                    <td><input 
                    className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                    type="text" 
                    value={infoNuevoProducto.estado}
                    onChange={e=>
                        setInfoNuevoProducto({...infoNuevoProducto, estado: e.target.value})
                    }
                    />
                    </td>
                </>
                         
            ):(
            <>  
            <td>{producto._id.slice(18)}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.valorUnitario}</td>
            <td>{producto.estado}</td>
            </>
            )}
            
            <td>
                <div className='flex w-full justify-around'>
                    {edit? (
                    <>
                    <Tooltip title='Confirmar Edición'arrow placement='top'>
                        <i 
                        onClick={()=> actualizarProducto()}
                        className='fas fa-check text-blue-100 hover:text-blue-400'
                        />                   
                    </Tooltip> 
                    <Tooltip title='Cancelar Edición' arrow placement='top'>
                        <i 
                        onClick={()=> setEdit(!edit)} 
                        className='fas fa-ban text-gray-900 hover:text-white' 
                        />
                    </Tooltip>

                    </>  
                    ):(
                    <>
                    <Tooltip title='Editar producto' arrow placement='top'>
                        <i 
                        onClick={()=> setEdit(!edit)} 
                        className='fas fa-edit text-gray-900 hover:text-white' 
                        />
                    </Tooltip>
                    <Tooltip title='Eliminar producto' arrow placement='top'>
                    <i 
                    onClick={()=>setOpenDialog(true)} 
                    className='fas fa-trash-alt text-red-600 hover:text-red-300' 
                    />
                    </Tooltip>
                    </>
                    )}
                </div>
                <Dialog open={openDialog}>
                                    
                    <div className='p-8 flex flex-col'>
                        <h1 className='text-gray-900 text-2xl font-bold'>
                            ¿Está seguro de eliminar el producto?
                        </h1>
                        <div className='flex w-full items-center justify-center my-4'>
                        <button 
                        onClick={()=> deleteProducto()}
                        className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700'
                        >
                            Si
                        </button>
                        <button onClick={()=>setOpenDialog(false)} 
                        className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700'
                        >
                            No
                        </button>

                        </div>
                    </div>
                    
                </Dialog>
            

            </td>
            
        </tr>

    )
}

const FormularioCreacionProductos = ({setMostrarTabla,listaProductos,setProductos})=>{
    const form= useRef(null)
        
    const submitForm= async (e)=>{
        e.preventDefault()
        const fd = new FormData(form.current)

        const nuevoProducto = {}    
        fd.forEach((value, key) => {
            nuevoProducto[key]=value
        })          
        
       await crearProducto(
           {
           descripcion: nuevoProducto.descripcion,
           valorUnitario: nuevoProducto.valorUnitario,
           estado: nuevoProducto.estado,
       },     
       (response)=>{
           console.log(response.data)
            toast.success('Producto agregado con exito')
       },
       (error)=>{
            console.error(error)
            toast.error('Error creando un producto')
       }
       )

        setMostrarTabla(true)
    }
        //identificar el caso de exito y mostrar un toast de exito
        //identificar el caso de error y mostrar un toast de error
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font font-extrabold text-gray-800'>CREAR NUEVO PRODUCTO</h2>
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>

                <label className='flex flex-col' htmlFor='descripcion'>
                    Descripción
                    <input
                        name='descripcion'
                        className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2'
                        type='text '
                        placeholder='decripción del producto'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='valorUnitario'>
                    Valor Unitario
                    <input
                        name='valorUnitario'
                        className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2'
                        type='number'
                        placeholder='valor unitario'
                        required
                    />
                </label>
                <label className='flex flex-col' htmlFor='estado'>
                    Estado
                    <select
                        className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2'
                        name='estado'
                        required
                        defaultValue={0}
                    >
                        <option disabled value={0}>
                            Seleccione una opción</option>
                        <option>Disponible</option>
                        <option>No disponible</option>

                    </select>

                </label>
                <button
                    type='submit'
                    className='col-span-2 bg-indigo-700 p-2 rounded-full shadow-md text-white'
                >
                    Guardar Producto
                </button>
            </form>
        </div>
    )
}

export default Productos