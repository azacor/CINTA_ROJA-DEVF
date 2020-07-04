
//Estructuca básica de una promesa
/* new Promise ((resolve, reject)=>{


}); 
resolve: es un método de promeso que se ejecuta cuando yo lo invoco en la 
return: hasta aquí llegué y bye
reject: Es un método que se ejecuta si la promesa se rechaza( lo usamos para indicar que no se hizo lo esperado)

*/


const miPromesa = new Promise ((resolve, reject ) =>{
    setTimeout(() => {
        console.log ('dentro de la promesa')
        if ( 5 > 1){ 
            resolve ([1,'me resolví']);
        } else {
     reject (new error ('algo falló'));
     }
    }, 1000)

});

/* console.log (miPromesa); */
miPromesa
    .then((respuesta) =>{ 
        console.log(`Te entregaron tu orden ${respuesta}`);
 
    })
    .catch ((error) =>{
        console.log(`Hijole señor, ya no le puedo entregar su comida ${error}`);

    })
    .finally (() => {
        console.log ('Ya se tiene que ir del restaurante')

    });




const ordenPersona =(cliente, orden) => {
return new Promise ((resolve,reject) => {
setTimeout (() => {
    if ( 5 > 1){ 
    resolve (`Acá está su ${orden}, ${cliente}`);
    } else {
    reject (new error (`algo falló ${cliente}`));
    }
}, 1000)}
)};

//QUEDA LA SOLUCIÓN

ordenPersona ('carla','papas, mcflurry')
    .then ({mensaje, statusPremio}) => {
        console.log (`te entregaron tu orden ${mensaje}`);
        //return statusPremio;
    }
.then(respuesta => console.log (`te entregaron tu orden${repsuestas}`));
