function funcionCualquiera(callback){
    let texto = 'por primera vez'
    console.log(callback());
    
//lo landa a un tiempo de espera
    setTimeout (function functionSetTimeOut() {
        console.log ('se ejecutó el setTimeOut')
    }, 3000); // el tiempo en que se ejecuta el settimeout

    texto = 'por segunda vez';
    console.log(callback(texto));

};

funcionCualquiera (() => {
    return 'me estoy ejecutando'
});
