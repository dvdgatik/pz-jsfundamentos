var frutas = ["Manzana", "Plátano", "Cereza", "Fresas"];

//el array siempre se inicia en cero

console.log(frutas);

console.log(frutas.length); // lingitud o numero de elementos
console.log(frutas[0]); // acceder al elemento por medio de index

//Mutar o alterar Array
var masFrutas = frutas.push("Uvas") //añadir elementos al final del array
var ultimo = frutas.pop()//Eliminar el último elemento del Array
var nuevaLongitud = frutas.unshift("Uvas");//añadir elemento al inicio del array
var borrarFruta = frutas.shift("Uvas");//Borrar elemento al inicio
var posicion = frutas.indexOf("Cereza");//Devuelve el index o posicion del elemento```
