import axios from 'axios';
import { nanoid } from 'nanoid';
import React, {useEffect} from 'react'
import { useState, useRef } from 'react/cjs/react.development'
import { obtenerProductos, obtenerUsuarios } from 'utils/api';


const Test = ()=> {
    const [usuarios, setUsuarios] = useState([]);
    const [productos, setProductos] = useState([]);
    const form= useRef(null)

    useEffect(() => {
        obtenerProductos(setProductos)
        obtenerUsuarios(setUsuarios)
    }, [])

    useEffect(()=>{
        console.log(productos)
    }, [productos])

    useEffect(()=>{
        console.log(usuarios)
    }, [usuarios])

    const submitForm= async (e)=>{
        e.preventDefault()
        const fd = new FormData(form.current)

        const nuevaVenta = {}    
        fd.forEach((value, key) => {
            nuevaVenta[key]=value
        })
        console.log(nuevaVenta)

        const informacionConsolidada ={
            valor: nuevaVenta.cantidadVenta,
            producto:productos.filter(el=>el.id===nuevaVenta.producto)[0],
            vendedor:usuarios.filter(el=>el.id===nuevaVenta.vendedor)[0],
        }
        console.log(informacionConsolidada)
 

     const options = {
            method: 'POST',
            url: 'https://tranquil-tor-11324.herokuapp.com/ventas',
            headers: {'Content-Type': 'application/json'},
            data: nuevaVenta,
          };

        await axios
            .request(options)
            .then(function (response) {
            console.log(response.data);
            //toast.success('producto agregado con éxito')
          })
            .catch(function (error) {
                console.error(error);
                //toast.error('Error creando un producto')
          }); 

    }

    return (
        <div>
            Crear nueva venta
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>

                <label>
                Seleccionar Producto
                <select name="vendedor" >
                    {usuarios.map((u)=>{
                        return<option key={nanoid()} value={u._id}>
                        {u.email}
                        </option>
                    })}
                </select>
                </label>
                <label>
                Seleccionar Producto
                <select name="producto">
                    {productos.map((p)=>{
                    return (
                    <option key={nanoid()}value={p._id}>
                    {p.name}
                    </option>
                    )})}
                </select>
                </label>
                <input type="number" name='cantidadVenta'/>
                <button type='submit'>Enviar Venta</button>
            </form>
        </div>
    )
}

export default Test
