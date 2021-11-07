//import React from 'react'
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css'


const Ventas = () => {
    const [mostrarTabla,setMostrarTabla ] = useState(true);
    const [ventas,setVentas] = useState([])
    const [textoBoton,setTextoBoton] = useState('Registrar una Venta');
    const [colorBoton, setColorBoton]= useState('indigo')

    useEffect(()=>{

        const obtenerVentas = async()=>{
            const options = {method: 'GET', url: 'http://localhost:5000/ventas/'};
        await axios
        .request(options)
        .then(function (response) {
            setVentas(response.data)
        })
        .catch(function (error) {
            console.error(error);
        });
        }
        //obtener lista de productos desde el backend
    if(mostrarTabla){
        obtenerVentas()

    }
    },[mostrarTabla])


    useEffect(()=> {
        if(mostrarTabla){
            setTextoBoton('Registrar una Venta');
            setColorBoton('gray');
        }
        else{
            setTextoBoton('Mostrar las Ventas registradas');
            setColorBoton('indigo');
        }
    },[mostrarTabla])
    return (
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
            <div className='flex flex-col'>
            <h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de Ventas</h2>
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
            <TablaVentas listaVentas={ventas} /> 
            ): (
            <FormularioCreacionVentas
            setMostrarTabla={setMostrarTabla}
            listaVentas={ventas} 
            setVentas={setVentas}/>
            )}  
            <ToastContainer position='bottom-center' autoClose={5000}/> 
        </div>
    )
}

const TablaVentas = ({listaVentas})=>{
    useEffect(()=>{
        console.log('este es el listado de ventas en el componente tabla', listaVentas)
    },[listaVentas])
    
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-2xl font font-extrabold text-gray-800'>Todas las Ventas</h2>
            <table className='tabla'>
            <thead>
                <tr>    
                <th>Identificador único</th>
                <th>Valor Total de la Venta</th>
                {/* <th>Identificador</th> */}
                <th>Cantidad</th>
                <th>Valor Unitario</th>
                <th>Fecha de Venta</th>
                <th>Documento de Identificación</th>
                <th>Nombre del Cliente</th>
                <th>Vendedor</th>
                </tr>
            </thead>
            <tbody>
                {listaVentas.map((ventas)=>{
                    return (
                        <tr>
                            <td>{ventas._id}</td>
                            <td>{ventas.valorTotal}</td>
                            <td>{ventas.cantidad}</td>
                            <td>{ventas.valorUnitario}</td>
                            <td>{ventas.fechaVenta}</td>
                            <td>{ventas.documentoIdentidad}</td>
                            <td>{ventas.cliente}</td>
                            <td>{ventas.vendedor}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </div>
        
    )
    
}
const FormularioCreacionVentas = ({setMostrarTabla,listaVentas,setVentas})=>{
    const form= useRef(null)
        

    const submitForm= async (e)=>{
        e.preventDefault()
        const fd = new FormData(form.current)

        const nuevoVenta= {}    
        fd.forEach((value, key) => {
            nuevoVenta[key]=value
        })

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas/nuevo',
            headers: {'Content-Type': 'application/json'},
            data: {id: nuevoVenta.id, valorTotal: nuevoVenta.valorTotal, cantidad: nuevoVenta.cantidad, valorUnitario: nuevoVenta.valorUnitario, fechaVenta: nuevoVenta.fechaVenta,documentoIdentidad: nuevoVenta.documentoIdentidad,cliente: nuevoVenta.cliente,vendedor: nuevoVenta.vendedor}
          };

        await axios
            .request(options)
            .then(function (response) {
            console.log(response.data);
            toast.success('venta registrada con éxito')
          })
            .catch(function (error) {
                console.error(error);
                toast.error('Error registrando una venta')
          });


        setMostrarTabla(true)
    }
        //identificar el caso de exito y mostrar un toast de exito
        //identificar el caso de error y mostrar un toast de error
    return (
    <div className='flex flex-col items-center justify-center'>
        <h2 className='text-2xl font font-extrabold text-gray-800'>REGISTRAR NUEVA VENTA</h2>
        <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <label  className='flex flex-col' htmlFor='id'>
                Identificador Unico
                <input 
                name='id'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                placeholder='Id automatico'
                
                />
            </label>
            <label className='flex flex-col' htmlFor='valorTotal'>
                Valor Total de la Venta
                <input 
                name='valorTotal'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='number ' 
                placeholder='valor total de la venta'
                required
                />
            </label>
            <label className='flex flex-col' htmlFor='cantidad'>
                Cantidad
                <input 
                name='cantidad'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='number' 
                placeholder='cantidad'
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
            <label className='flex flex-col' htmlFor='fechaVenta'>
                Fecha de Venta
                <input 
                name='fechaVenta'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='number' 
                placeholder='fecha de la venta'
                required
                />
            </label>
            <label className='flex flex-col' htmlFor='documentoIdentidad'>
                Documento de Identificación
                <input 
                name='documentoIdentidad'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='number' 
                placeholder='documento de identidad'
                required
                />
            </label>
            <label className='flex flex-col' htmlFor='cliente'>
                Nombre del Cliente
                <input 
                name='cliente'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                placeholder='cliente'
                required
                />
            </label>
            <label className='flex flex-col' htmlFor='vendedor'>
                Vendedor
                <input 
                name='vendedor'
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type='text' 
                placeholder='vendedor'
                required
                />
            </label>
           
            <button 
            type='submit'
            className='col-span-2 bg-indigo-700 p-2 rounded-full shadow-md text-white'         
        >                
            Guardar Venta
            </button>
        </form>
    </div>
    )
}
function ventas() {
    return (
        <div>
            Ventas
        </div>
    )
}

export default Ventas