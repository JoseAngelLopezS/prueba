var arreglo = [1, 2, 3, 4, 5];
var nuevoElemento = 10;
var posicion = 2;
arreglo.splice(posicion, 0, nuevoElemento);

console.log(arreglo);

var arregloOriginal = [1, 2, 3, 4, 5];
var nuevoElemento = 10;
var posicion = 2;
var arregloNuevo = arregloOriginal.slice();

arregloNuevo.splice(posicion, 0, nuevoElemento);

console.log(arregloNuevo);
