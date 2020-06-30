//Lo vamos a exportar para poderlos usar en index

const {Largometraje} = require('./largometraje');
  
// super va a equivaler a una instancia del objeto de la clase que 
    //heredamos que se une con los nuevos atributos y métodos de la nueva clase.
    // const super = new Animal();
    // super.respirar();
class Documental extends Largometraje{
    constructor(duracion, genero, horario, presupuesto, subcategoria) {
        super(duracion, genero, horario);
        this.presupuesto = presupuesto;
        this.subcategoria = subcategoria;
    }
    mensaje () {
        'Mantenga la distancia de seguridad';
        //super.respirar();
    }
}



module.exports = {
    Documental

}