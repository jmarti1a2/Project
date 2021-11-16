import axios from 'axios';

//const baseURL = "http://localhost:5000"
const baseURL = "https://tranquil-tor-11324.herokuapp.com"

const getToken = ()=>{
    return `Bearer ${localStorage.getItem('token')}`
}

export const obtenerProductos = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url:`${baseURL}/productos`,
    headers: {
        Authorization: getToken(), 
      }

}
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const crearProducto = async (data, successCallback, errorCallback) => {
    const options = {
        method: 'POST',
        url:`${baseURL}/productos`,
        headers: { 'Content-Type': 'application/json',  Authorization: getToken() },    
        data,      
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const editarProducto = async (id, data, successCallback,errorCallback)=> {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/productos/${id}`,
        headers: { 'Content-Type': 'application/json', Authorization: getToken() },
        data, 
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}


export const eliminarProducto = async (id,successCallback,errorCallback)=> {
    const options = {
        
        method: 'DELETE',
        url: `${baseURL}/productos/${id}`,
        headers: { 'Content-Type': 'application/json' ,  Authorization: getToken()},        
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}


// CRUD para usuarios

export const obtenerUsuarios = async (successCallback,errorCallback)=>{
    const options = {
        method: 'GET', 
        url:`${baseURL}/usuarios`,  
        headers: {
            Authorization: getToken(),
        }
    };   
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const obtenerDatosUsuario = async (successCallback,errorCallback)=>{
    const options = {
        method: 'GET', 
        url:`${baseURL}/usuarios/self`,  
        headers: {
            Authorization: getToken(),
        }
    };   
    await axios.request(options).then(successCallback).catch(errorCallback)
}

// eslint-disable-next-line
export const editarUsuario = async (id, data, successCallback,errorCallback)=> {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/usuarios/${id}`,
        headers: { 'Content-Type': 'application/json', Authorization: getToken() },
        data, 
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}


//CRUD de ventas

export const obtenerVenta = async (successCallback, errorCallback) => {
    const options = { method: 'GET', url:`${baseURL}/ventas`,
    headers: {
        Authorization: getToken(), 
      }
    }}


export const crearVenta = async (data,successCallback,errorCallback)=>{
    const options = {
        
            method: 'POST',
            url:`${baseURL}/ventas`,
            headers: {'Content-Type': 'application/json',  Authorization: getToken()},
            data,     
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const editarVenta = async (id, data, successCallback,errorCallback)=> {
    const options = {
        method: 'PATCH',
        url: `${baseURL}/ventas/${id}`,
        headers: { 'Content-Type': 'application/json', Authorization: getToken() },
        data, 
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}

export const eliminarVenta = async (id,successCallback,errorCallback)=> {
    const options = {
        
        method: 'DELETE',
        url: `${baseURL}/ventas/${id}`,
        headers: { 'Content-Type': 'application/json' ,  Authorization: getToken()},        
    }
    await axios.request(options).then(successCallback).catch(errorCallback)
}




