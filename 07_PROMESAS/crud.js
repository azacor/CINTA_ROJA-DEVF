//CREATE CREAR post
//READ LEER get
//UPDATE ACTUALIZAR patch
//DELETE BORRAR 
//SUBSTITUTE susbtituir put

const axios = require ('axios');

const author = { 

    "name":"Aza",
    "last_name": "Cortes",
    "nacionalidad": "MX",
    "biography": "Soy Aza Cortés, me gusta programar",
    "gender": "F",
    "age": 29

   };


axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', author)
   .then (({data,status, statusText}) => {
    if(status === 201){
        console.log(`Creaste un nuevo usuario ${data.id}`);

    } else {
        console.log (data)



    }
console.log (statusText);
 

   })
.catch ((error) => {

console.log(error.response.data);
console.log(error.response.status);
console.log(error.response.headers);
}
)

/*    const pasarMisdatosPorELCRUSD(){
//va a tener un objeto que va a crearse con los parametros de arriba, 

   }  // patch, put y delete */