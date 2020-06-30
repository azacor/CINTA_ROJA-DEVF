
// Ejercicio-01

function farenheitToCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }

console.log (farenheitToCelsius)

/*
function farenheitToCelsius(gradosF) {
    const resta = gradosF - 32;
    const fraccion = 5/9;
    const multiplicacion = resta * fraccion;
    return multiplicacion;
}
let grados = 25;

/* Arrow 
const farenheitToCelsius2 = grados => (grados - 32) * (5/9) ;

const resultado = farenheitToCelsius(grados);
const resultado2 = farenheitToCelsius2(grados);
console.log(resultado);
console.log(resultado2);

console.log(farenheitToCelsius(89));
console.log(farenheitToCelsius2(89));

*/

// Ejercicio-02
//Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
//En caso de ser vocal, devolver "Vocal"
//En caso de ser consonante, devolver "Consonante"



const evaluateLetter = (x) => {
    if (x === "a"|| x === "e" || x === "i" || x === "o" || x === "u") {
        return "vocal"
    } else {
        return "Consonante"
    }
}

        console.log (evaluateLetter)


/*Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal y lo convierta en un número binario retornando su resultado. Tiene que salir 101 */
