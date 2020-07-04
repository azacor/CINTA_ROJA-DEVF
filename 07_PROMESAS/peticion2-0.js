const axios = require('axios');
//endpoint: Ruta de acceso a alguna acción del servidor. es un canal de comunicación con el servidor.

// Make a request for a user with a given ID
axios.get('/https://rickandmortyapi.com/api/location/')
//Destructuramos porque es un objeto y queremos acceder a los datos
  .then(function ({data, status}) {
    // handle success
    // trae la cantidad de elementos que hay con data .info
if (status === 200){
    console.log(data.info);
    }
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  }); 
