//import React from 'react'
import React, { useEffect, useState, useRef } from 'react';
import { crearVenta } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { nanoid } from 'nanoid';

// import { ToastContainer, toast } from 'react-toastify';
// import axios from "axios";
// import 'react-toastify/dist/ReactToastify.css'


// const Ventas = () => {
//     const [mostrarTabla,setMostrarTabla ] = useState(true);
//     const [ventas,setVentas] = useState([])
//     const [textoBoton,setTextoBoton] = useState('Registrar una Venta');
//     const [colorBoton, setColorBoton]= useState('indigo')

//     useEffect(()=>{

//         const obtenerVentas = async()=>{
//             const options = {method: 'GET', url: 'http://localhost:5000/ventas/'};
//         await axios
//         .request(options)
//         .then(function (response) {
//             setVentas(response.data)
//         })
//         .catch(function (error) {
//             console.error(error);
//         });
//         }
//         //obtener lista de productos desde el backend
//     if(mostrarTabla){
//         obtenerVentas()

//     }
//     },[mostrarTabla])


//     useEffect(()=> {
//         if(mostrarTabla){
//             setTextoBoton('Registrar una Venta');
//             setColorBoton('gray');
//         }
//         else{
//             setTextoBoton('Mostrar las Ventas registradas');
//             setColorBoton('indigo');
//         }
//     },[mostrarTabla])
//     return (
//         <div className='flex h-full w-full flex-col items-center justify-start p-8'>
//             <div className='flex flex-col'>
//             <h2 className='text-3xl font-extrabold text-gray-900'>Página de administración de Ventas</h2>
//             <button 
//                 onClick={() => {
//                     setMostrarTabla(!mostrarTabla)
//                     }} 
//                     className={`text-white bg-${colorBoton}-700 p-5 rounded-full`}
//                 >
//                     {textoBoton}                       
//             </button>
//             </div>
            
//             {mostrarTabla ? (
//             <TablaVentas listaVentas={ventas} /> 
//             ): (
//             <FormularioCreacionVentas
//             setMostrarTabla={setMostrarTabla}
//             listaVentas={ventas} 
//             setVentas={setVentas}/>
//             )}  
//             <ToastContainer position='bottom-center' autoClose={5000}/> 
//         </div>
//     )
// }

// const TablaVentas = ({listaVentas})=>{
//     useEffect(()=>{
//         console.log('este es el listado de ventas en el componente tabla', listaVentas)
//     },[listaVentas])
    
//     return (
//         <div className='flex flex-col items-center justify-center w-full'>
//             <h2 className='text-2xl font font-extrabold text-gray-800'>Todas las Ventas</h2>
//             <table className='tabla'>
//             <thead>
//                 <tr>    
//                 <th>Identificador único</th>
//                 <th>Valor Total de la Venta</th>
//                 {/* <th>Identificador</th> */}
//                 <th>Cantidad</th>
//                 <th>Valor Unitario</th>
//                 <th>Fecha de Venta</th>
//                 <th>Documento de Identificación</th>
//                 <th>Nombre del Cliente</th>
//                 <th>Vendedor</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {listaVentas.map((ventas)=>{
//                     return (
//                         <tr>
//                             <td>{ventas._id}</td>
//                             <td>{ventas.valorTotal}</td>
//                             <td>{ventas.cantidad}</td>
//                             <td>{ventas.valorUnitario}</td>
//                             <td>{ventas.fechaVenta}</td>
//                             <td>{ventas.documentoIdentidad}</td>
//                             <td>{ventas.cliente}</td>
//                             <td>{ventas.vendedor}</td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>
//         </div>
        
//     )
    
// }
// const FormularioCreacionVentas = ({setMostrarTabla,listaVentas,setVentas})=>{
//     const form= useRef(null)
        

//     const submitForm= async (e)=>{
//         e.preventDefault()
//         const fd = new FormData(form.current)

//         const nuevoVenta= {}    
//         fd.forEach((value, key) => {
//             nuevoVenta[key]=value
//         })

//         const options = {
//             method: 'POST',
//             url: 'http://localhost:5000/ventas/nuevo',
//             headers: {'Content-Type': 'application/json'},
//             data: {id: nuevoVenta.id, valorTotal: nuevoVenta.valorTotal, cantidad: nuevoVenta.cantidad, valorUnitario: nuevoVenta.valorUnitario, fechaVenta: nuevoVenta.fechaVenta,documentoIdentidad: nuevoVenta.documentoIdentidad,cliente: nuevoVenta.cliente,vendedor: nuevoVenta.vendedor}
//           };

//         await axios
//             .request(options)
//             .then(function (response) {
//             console.log(response.data);
//             toast.success('venta registrada con éxito')
//           })
//             .catch(function (error) {
//                 console.error(error);
//                 toast.error('Error registrando una venta')
//           });


//         setMostrarTabla(true)
//     }
//         //identificar el caso de exito y mostrar un toast de exito
//         //identificar el caso de error y mostrar un toast de error
//     return (
//     <div className='flex flex-col items-center justify-center'>
//         <h2 className='text-2xl font font-extrabold text-gray-800'>REGISTRAR NUEVA VENTA</h2>
//         <form ref={form} onSubmit={submitForm} className='flex flex-col'>
//             <label  className='flex flex-col' htmlFor='id'>
//                 Identificador Unico
//                 <input 
//                 name='id'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='text' 
//                 placeholder='Id automatico'
                
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='valorTotal'>
//                 Valor Total de la Venta
//                 <input 
//                 name='valorTotal'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='number ' 
//                 placeholder='valor total de la venta'
//                 required
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='cantidad'>
//                 Cantidad
//                 <input 
//                 name='cantidad'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='number' 
//                 placeholder='cantidad'
//                 required
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='valorUnitario'>
//                 Valor Unitario
//                 <input 
//                 name='valorUnitario'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='number' 
//                 placeholder='valor unitario'
//                 required
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='fechaVenta'>
//                 Fecha de Venta
//                 <input 
//                 name='fechaVenta'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='number' 
//                 placeholder='fecha de la venta'
//                 required
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='documentoIdentidad'>
//                 Documento de Identificación
//                 <input 
//                 name='documentoIdentidad'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='number' 
//                 placeholder='documento de identidad'
//                 required
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='cliente'>
//                 Nombre del Cliente
//                 <input 
//                 name='cliente'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='text' 
//                 placeholder='cliente'
//                 required
//                 />
//             </label>
//             <label className='flex flex-col' htmlFor='vendedor'>
//                 Vendedor
//                 <input 
//                 name='vendedor'
//                 className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
//                 type='text' 
//                 placeholder='vendedor'
//                 required
//                 />
//             </label>
           
//             <button 
//             type='submit'
//             className='col-span-2 bg-indigo-700 p-2 rounded-full shadow-md text-white'         
//         >                
//             Guardar Venta
//             </button>
//         </form>
//     </div>
//     )
// }
// function ventas() {
//     return (
//         <div>
//             Ventas
//         </div>
//     )
// }

// export default Ventas

const Ventas = () => {
    const form= useRef(null);
    const [vendedores,setVendedores]=useState([]);
    const [productos,setProductos]=useState([]);
    const [productosTabla, setProductosTabla] = useState([]);
   
 

    useEffect(() => {
        
        const fetchVendedores = async () => {
            await obtenerUsuarios(
                (response) => {
                    setVendedores(response.data);
               },
                (error) => {
                    console.error(error);
                }
            );
    };
        const fetchProductos = async () => {
            await obtenerProductos(
            (response) => {
                setProductos(response.data);
           },
            (error) => {
                console.error(error);
            }
            );
        };

    fetchVendedores();
    fetchProductos ();
        
},[]);


const submitForm= async (e)=>{
    e.preventDefault()
    const fd = new FormData(form.current);

    const formData = {}    
    fd.forEach((value, key) => {
        formData[key]=value
    });
console.log("form data",formData);

const listaProductos =Object.keys(formData)
.map((k) => {
    if (k.includes("producto")){
        return productosTabla.filter((v)=> v._id === formData[k])[0];
    }
    return(null);
})
.filter((v) => v);

// console.log("lista antes de cantidad",listaProductos);

// Object.keys(formData).forEach((k) => {
//     if (k.includes("cantidad")){
//         const indice=parseInt(k.split("_")[1]);
//         listaProductos[indice]["cantidad"]=formData[k];
//     }
    
// });

// console.log("lista despues de cantidad",listaProductos);

const datosVenta={
    vendedor:vendedores.filter((v)=> v._id === formData.vendedor)[0],
    cantidad:formData.valor,
    productos:listaProductos,
};
// console.log("lista productos",listaProductos);

await crearVenta(
    datosVenta,
    (response) => {
        console.log(response);
    },
    (error) => {
        console.error(error);
    }  
  );
};

    return(
        <div className="flex h-full w-full overflow-y-scroll items-center justify-center w-full ">
            <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <h1 className='text-3xl font-extrabold text-gray-900  my-4 '>Crear una nueva venta</h1>
                <label className='flex flex-col' htmlFor='vendedor'>
                <span  className="text-2x1 font-gray-900">vendedor</span>
                <select name="vendedor" className="p-2" defaultValue="" required> 
                    <option className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2" disabled value ="">seleccione un vendedor</option>
                    {vendedores.map((el) =>{
                        return <option  key={nanoid()}  value={el._id}> {`${el.name} ${el.lastname}`}</option>
                    })}
                </select>
                </label>
 
<TablaProductos 
productos={productos} 
setProductos={setProductos} 
setProductosTabla={setProductosTabla}
/>

                <label className='flex flex-col'>              
                <span  className="text-2x1 font-gray-900">valor Total Venta</span>
                <input 
                className='bg-gray-50 border-gray-600 p-2 rounded-lg m-2' 
                type="number" 
                name="valor" 
                required
                />
            </label>
            <button 
            type="submit" 
            className='col-span-2 bg-indigo-700 p-2 rounded-full shadow-md text-white'
            >
            crear venta
            </button>
        </form>
    </div>
   );
};

    // const DropDownProductos=({productos,nombre}) => {
    //     return (
    //         <label className='flex flex-col' htmlFor='producto'>
    //         <span  className="text-2x1 font-gray-900">producto</span>
    //         <select name={nombre} className="p-2" defaultValue={-1}>
    //             <option disabled value ={-1}>seleccione un producto</option>
    //             {productos.map((el) =>{
    //                 return <option  key={nanoid()}  value={el._id}>{`${el.valorUnitario}${el.estado}`}</option>
    //             })}
    //         </select>
    //         </label>

    //     );
       
    // };


    const TablaProductos = ({productos,setProductos,setProductosTabla }) => {
        const [productoAAgregar,setProductoAAgregar]=useState({});
        const [filasTabla,setFilasTabla]=useState([]);

        useEffect(() => {
            console.log(productoAAgregar);
        },[productoAAgregar]);
    
        useEffect(() => {
            setProductosTabla(filasTabla);
          }, [filasTabla, setProductosTabla]);

    

    const agregarNuevoProducto = () => {
        setFilasTabla([...filasTabla, productoAAgregar]);
        setProductos(productos.filter((v) => v._id!== productoAAgregar._id));
        setProductoAAgregar({});
    };

    const eliminarProducto=(productoAEliminar) => {
        setFilasTabla(filasTabla.filter((v)=> v._id!== productoAEliminar._id));
        setProductos([...productos,productoAEliminar]);
    };

    const modificarProducto = (producto,cantidad) => {
        setFilasTabla(
            filasTabla.map((ft) => {
                if (ft._id === producto.id){
                    ft.cantidad =cantidad ;
                    ft.total = producto.valor * cantidad;
                }
                return ft;
            })
        );
    };

    return (
    <div>
    <div className="flex ">
    <label className='flex flex-col' htmlFor='producto'>
    <select name="producto" className="p-2" 
    value={productoAAgregar._id ?? ""} 
    onChange={(e) => 
        setProductoAAgregar(productos.filter((v) => v._id===e.target.value)[0])
    }
    >
        <option className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2" disabled value ="">
            seleccione un producto</option>
        {productos.map((el) =>{
            return (
            <option  
            key={nanoid()}
            value={el._id}
            >{`${el.descripcion} ${el.valorUnitario} ${el.estado}`}</option>
            );
        
    })}
    </select>
</label>
    
<button
type="button"
onClick={() => agregarNuevoProducto()} 
className="col-span-2 bg-indigo-700 p-2 rounded-full shadow-md text-white"
>
    agregar un producto
    </button>   
</div>
<table className="tabla">
        <thead> 
        <tr>    
            <th>Id</th>
            <th>Descripción</th>
            <th>Valor Unitario</th>
            <th>Estado</th>
            <th>Cantidad</th>
            <th>Eliminar</th>
            <th className='hidden'>Input</th>
          </tr>
        </thead>
        <tbody>
        {filasTabla.map((el, index) => {
            return (
              <FilaProducto
                key={el._id}
                veh={el}
                index={index}
                eliminarProducto={eliminarProducto}
                modificarProducto={modificarProducto}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

const FilaProducto = ({veh,index,eliminarProducto,modificarProducto}) => {
    const [producto, setProducto]= useState(veh);
    useEffect(() => {
        console.log("veh",producto);
    },[producto]);
    return (
        <tr>
            <td>{producto._id}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.valorUnitario}</td>
            <td>{producto.estado}</td>
            <td>
                <label htmlFor={`valor_${index}`}>
                    <input
                      type="number"
                      name={`cantidad_${index}`}
                      value={producto.cantidad}
                      onChange={(e) => {
                          modificarProducto(producto,e.target.value === " " ? "0" : e.target.value);
                          setProducto({
                              ...producto,
                              cantidad: e.target.value === " " ? "0" : e.target.value,
                              total:
                                 parseFloat(producto.valor) *
                                 parseFloat(e.target.value === " " ? "0" : e.target.value),
                       });     
                    }}
                  />
                </label>
              </td>          
            <td>{producto.valor}</td>
            <td>{parseFloat(producto.total ?? 0)}</td>
            <td>
                <i
                onClick={() => eliminarProducto(producto)}
                className ="fas fa-minus text-red-500 cursor-pointer"
                />
            </td>
            <td className="hidden">
                <input hidden defaultValue={producto._id} name={`producto_${index}`}/>
            </td>
        </tr>
    );
};

export default Ventas;
