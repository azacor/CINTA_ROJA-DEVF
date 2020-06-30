//agregar 1 método y 2 características extras diferentes de las del largometraje y documental. Lo vamos a exportar para poderlos usar en index

const {Largometraje} = require('./largometraje');

class Pelicula extends Largometraje{
    // super va a equivaler a una instancia del objeto de la clase que 
    //heredamos que se une con los nuevos atributos y métodos de la nueva clase.
    // const super = new Animal();
    // super.respirar();
    constructor(duracion, genero, horario, autor, anio) {
        super(duracion, genero, horario);
        this.autor = autor;
        this.anio = anio;
    }
    trailer() {
        'A continuación trailer Origen';
        //super.respirar();
    }
}



module.exports = {
    Pelicula,

}