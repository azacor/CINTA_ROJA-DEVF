function getUsuarios (callback, exito){
const usuarios = [
{
    name: 'mali'
},
{
    name:'ernesto'
},
{
    name:'jose'
},
]
    //simular consultar API
    setTimeout(() => {
        //status code
        if(exito){ 
    callback(usuarios, '200 todo chido');
} else {
    callback(usuarios, '404 nada chido');

}
    },3000);
    
    )

// va a secibir usuarios y mensaje

getUsuarios((morros, emocionanteMensaje) => {
    console.log (morros, emocionanteMensaje);

});

