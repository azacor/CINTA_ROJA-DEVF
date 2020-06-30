// Clase Padre, la vamos a exportar y la vamos a usar en película y documental
//propiedad necesaria para reproducirse 
class Largometraje {
    constructor(duracion, genero, horario) {
        this.duracion = duracion;
        this.genero = genero;
        this.horario = horario;
    }
    /*respirar() {
        console.log('snif');
    }*/
}


module.exports = {
    Largometraje,

}