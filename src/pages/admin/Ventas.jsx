//import React from 'react'
import React, { useEffect, useState, useRef } from 'react';
import { crearVenta } from 'utils/api';
import { obtenerUsuarios } from 'utils/api';
import { obtenerProductos } from 'utils/api';
import { nanoid } from 'nanoid';

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



const datosVenta={
    vendedor:vendedores.filter((v)=> v._id === formData.vendedor)[0],
    cantidad:formData.valor,
    productos:listaProductos,
};


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
        <div className='flex h-full w-full items-center justify-center'>
            <form ref={form} onSubmit={submitForm} className='flex flex-col h-full'>
            <h1 className='text-3xl font-extrabold text-gray-900  my-4 '>Crear una nueva venta</h1>
                <label className='flex flex-col' htmlFor='vendedor'>
                <span  className="text-2x1 font-gray-900">Vendedor</span>
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
                <span  className="text-2x1 font-gray-900">Valor Total Venta</span>
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




    const TablaProductos = ({productos,setProductos,setProductosTabla }) => {
        const [productoAAgregar,setProductoAAgregar]=useState({});
        const [filasTabla,setFilasTabla]=useState([]);
        const [totalVentas,setTotalVentas]= useState(0)
    
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
                if (ft._id === producto._id){
                    ft.cantidad =cantidad ;
                    ft.total = producto.valor * cantidad;
                }
                return ft;
            })
        );
    };

    useEffect(() => {
        let total =0
        filasTabla.forEach((p)=>{
            total = total + p.total
        })
        setTotalVentas(total)
    }, [filasTabla])

    return (
        <div>
            <div className="flex ">
                <label className='flex flex-col' htmlFor='producto'>
                    <select
                        className="p-2"
                        value={productoAAgregar._id ?? ""}
                        onChange={(e) =>
                            setProductoAAgregar(productos.filter((v) => v._id === e.target.value)[0])
                        }
                    >
                        <option className="bg-gray-50 border-gray-600 p-2 rounded-lg m-2" disabled value="">
                            seleccione un producto
                            </option>
                        {productos.map((el) => {
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
    Agregar un Producto
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
            <th>Total</th>
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
      <span>Total de la venta: {totalVentas}</span>
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
                <label htmlFor={`valorUnitario_${index}`}>
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
                              parseFloat(producto.valorUnitario) *
                              parseFloat(e.target.value === '' ? '0' : e.target.value),
                       });     
                    }}
                  />
                </label>
              </td>          
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
