
const {Largometraje} = require('./largometraje');


//Nos va a servir para reproducir com étodo
class Cine{
    constructor (){

    }
    reproducir(Largometraje){ //con estro reproduce el largometraje
        const {duracion} = Largometraje;
        return `la largometraje dura ${duracion} minutos`
    }
}



module.exports = {
    Cine,

}