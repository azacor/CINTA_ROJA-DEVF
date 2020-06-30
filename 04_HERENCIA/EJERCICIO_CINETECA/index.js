const {Cine} = require('./cine');
const {Documental} = require('./documental');
const {Pelicula} = require('./Pelicula');
const {Largometraje} = require ('./Largometraje');

//console.log (Cine);

//reproducir el documental de Cosmos (llamar un método)

//reproducir pelicula favorita
const centroMagno = new Cine('cinepolis guadalajara');


const documental = new Documental(125,'basado en hechos reales', 17, 120000,'politica');
console.log (centroMagno.reproducir(documental));


const pelicula = new Pelicula(120, 'ciencia ficción',20, 'tysson', 2005);
console.log (centroMagno.reproducir(pelicula));

/*
const Largometraje = new Largometraje(30, 'fantasia', 21)
console.log (CentroMagno.reproducir(Largometraje));*/