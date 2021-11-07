import axios from 'axios';

// CRUD PARA USUARIOS

// export const obtenerUsuarios = async (successCallback, errorCallback) => {
//     const options = {
//       method: 'GET',
//       url: `${baseURL}/usuarios/`,
//       headers: {
//         Authorization: getToken(),
//       },
//     };
//     await axios.request(options).then(successCallback).catch(errorCallback);
//   };
  
//   export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
//     const options = {
//       method: 'GET',
//       url: `${baseURL}/usuarios/self/`,
//       headers: {
//         Authorization: getToken(), // 3. enviarle el token a backend
//       },
//     };
//     await axios.request(options).then(successCallback).catch(errorCallback);
//   };
  
//   export const editarUsuario = async (id, data, successCallback, errorCallback) => {
//     const options = {
//       method: 'PATCH',
//       url: `${baseURL}/usuarios/${id}/`,
//       headers: { 'Content-Type': 'application/json', Authorization: getToken() },
//       data,
//     };
//     await axios.request(options).then(successCallback).catch(errorCallback);
//   };