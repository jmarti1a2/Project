import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const productosBackend = [
    {
        id:"id1",
        descripcion:"tornillo",
        valorUnitario:"500",
        estado:"no disponible",
    },
    {
        id:"id2",
        descripcion:"cemento",
        valorUnitario:"28000",
        estado:"disponible",
    },
    {
        id:"id3",
        descripcion:"arena",
        valorUnitario:"15000",
        estado:"disponible",
    },
    {
        id:"id4",
        descripcion:"metro",
        valorUnitario:"5000",
        estado:"disponible",
    }
]

const Productos = () => {
    const [mostrarTabla,setMostrarTabla ] = useState(true);
    const [productos,setProductos] = useState([])
    const [textoBoton,setTextoBoton] = useState('Crear nuevo Producto');
    const [colorBoton, setColorBoton]= useState('indigo')

    useEffect(()=>{
        //obtener lista de productos desde el backend
        setProductos(productosBackend)

    },[])


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
            <TablaProductos listaProductos={productos} /> 
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

const TablaProductos = ({listaProductos})=>{
    useEffect(()=>{
        console.log('este es el listado de productos en el componente tabla', listaProductos)
    },[listaProductos])
    
    return (
        <div className='flex flex-col items-center justify-center'>
            <h2 className='text-2xl font font-extrabold text-gray-800'>Todos los Productos</h2>
            <table>
            <thead>
                <tr>
                <th>Identificador único</th>
                <th>Descripción</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                </tr>
            </thead>
            <tbody>
                {listaProductos.map((producto)=>{
                    return (
                        <tr>
                            <td>{producto.id}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valorUnitario}</td>
                            <td>{producto.estado}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        
    )
    
}
const FormularioCreacionProductos = ({setMostrarTabla,listaProductos,setProductos})=>{
    const form= useRef(null)
        

    const submitForm=(e)=>{
        e.preventDefault()
        const fd = new FormData(form.current)

        const nuevoProducto = {}    
        fd.forEach((value, key) => {
            nuevoProducto[key]=value
        })
        setMostrarTabla(true)
        setProductos([...listaProductos, nuevoProducto])}
        //identificar el caso de exito y mostrar un toast de exito
        toast.success('producto agregado con éxito')
        //identificar el caso de error y mostrar un toast de error
        //  toast.error('Error creando un producto')
    return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font font-extrabold text-gray-800'>CREAR NUEVO PRODUCTO</h2>
        <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <label  className='flex flex-col' htmlFor='id'>
                Identificador Unico
                <input 
                name='id'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                placeholder='Id'
                required
                />
            </label>
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
