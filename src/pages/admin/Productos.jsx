import React, { useEffect, useState } from 'react';


const productosBackend = [
    {
        identificador_unico:"id1",
        descripcion:"tornillo",
        valor_unitario:"500",
        estado:"no disponible",
    },
    {
        identificador_unico:"id2",
        descripcion:"cemento",
        valor_unitario:"28000",
        estado:"disponible",
    },
    {
        identificador_unico:"id3",
        descripcion:"arena",
        valor_unitario:"15000",
        estado:"disponible",
    },
    {
        identificador_unico:"id4",
        descripcion:"metro",
        valor_unitario:"5000",
        estado:"disponible",
    }
]

const Productos = () => {
    const [ mostrarTabla,setMostrarTabla ] = useState(true);
    const [productos,setProductos] = useState([])
    const [textoBoton,setTextoBoton] = useState('Crear nuevo Producto');

    useEffect(()=>{
        //obtener lista de productos desde el backend
        setProductos(productosBackend)

    },[])


    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Crear nuevo Producto')
        }
        else{
            setTextoBoton('Mostrar todos los Productos')
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
                    className='text-white bg-indigo-500 p-5 rounded-full'
                >
                    {textoBoton}                       
            </button>
            </div>
            
            {mostrarTabla ? (
            <TablaProductos listaProductos={productos} /> 
            ): (
            <FormularioCreacionProductos />
            )}   
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
                            <td>{producto.identificador_unico}</td>
                            <td>{producto.descripcion}</td>
                            <td>{producto.valor_unitario}</td>
                            <td>{producto.estado}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        
    )
    


}
const FormularioCreacionProductos = ()=>{
    return <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font font-extrabold text-gray-800'>CREAR NUEVO PRODUCTO</h2>
        <form className='grid grid-cols-2'>
            <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text '/>
            <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text '/>
            <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text '/>
            <input className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' type='text '/>
            <button className='col-span-2 bg-indigo-500 p-2 rounded-full shadow-md'>Guardar Producto</button>
        </form>

    </div>
}   

export default Productos
