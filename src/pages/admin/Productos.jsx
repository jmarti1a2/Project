import React, { useEffect, useState } from 'react';


const Productos = () => {
    const [ mostrarTabla,setMostrarTabla ] = useState(true);
    const [textoBoton,setTextoBoton] = useState('Crear nuevo Producto');

    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Crear nuevo Producto')
        }
        else{
            setTextoBoton('Mostrar todos los Productos')
        }
    },[mostrarTabla])
    return (
        <div>
            <h2>Página de administración de Productos</h2>
            <button 
                onClick={() => {
                    setMostrarTabla(!mostrarTabla)
                    }} 
                    className='text-white bg-indigo-500 p-5 '
                >
                    {textoBoton}                       
            </button>
            {mostrarTabla ? <TablaProductos /> : <FormularioCreacionProductos />}   
        </div>
    )
}

const TablaProductos = ()=>{
    return <div>Esto es un div pero deberia ser una tabla mostrando los productos</div>
}
const FormularioCreacionProductos = ()=>{
    return <div>Esto es un div pero deberia ser un formulario para crear un nuevo producto</div>
}   

export default Productos
