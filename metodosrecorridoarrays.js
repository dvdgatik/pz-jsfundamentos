//Recorridos de arrays


//Array indexado con objetos adentro
var articulos = [
    {nombre : 'Bici', costo: 3000},
    {nombre : 'Tv', cost: 2500},
    {nombre: 'libro', cost: 300},
    {nombre: 'celular', cost: 1000},
    {nombre: 'laptop', cost: 2000},
    {nombre: 'teclado', cost: 500},
];



//Metodos que ayudan a recorrer un Array 

//Filter: filtra validando si algo es cierto o falso y lo crea en un nuevo array sin afectar el original

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.cost <= 500;
});

// Metodo map
// al igual que filter devolvera un nuevo Array

var articulosMapeados = articulos.map(function(articulos){
    return articulo.nombre
});







var articulos = [
	{ nombre: '📱', precio: 1000 },
	{ nombre: '💻', precio: 1500 },
	{ nombre: '🖥', precio: 2000 },
	{ nombre: '⌨️', precio: 100 },
	{ nombre: '🖱', precio: 70 },
	{ nombre: '🚗', precio: 30000 },
];

// Método Filter
var articulosFiltrados = articulos.filter(function(articulo) {
	return articulo.precio <= 500;
});

// Método Map
var nombreArticulos = articulos.map(function(articulo) {
	return articulo.nombre;
});

articulosFiltrados;
// (2) [{…}, {…}]
//   0: {nombre: "⌨️", precio: 100}
//   1: {nombre: "🖱", precio: 70}

nombreArticulos; // (5) ["📱", "💻", "🖥", "⌨️", "🚗"]



// Metodos find  forEach some()

// Metodo Find valida si es verdadero, devuelve un nuevo array y si no no lo devuelve

// Metodo forEach modifica el Array existente

// Metodo Some  devuelve falso o verdadero si la condicion se cumple


// A modo de recopilación:

//     find() : Devuelve el primer elemento del array que cumpla con la condición dada
//     foreach() : Ejecuta lo que le definamos una vez por cada elemento de nuestro array
//     some() : Comprueba si al menos un elemento del array cumple con la condición que le damos
//     filter() : Devuelve todos los elementos del array que cumplan con la condición dada
//     Acá te dejo la documentación de cada uno: find() - foreach() - some() - filter()



// ¿Cual es la diferencia entre find y filter ?

// filter retorna todas las coincidencias y find retorna solo la primer coincidencia

// Aprender a profundidad


// Resumen:

// Agregar al final= .push()
// Eliminar al final= .pop()

// Agregar al inicio= .unshift()
// Eliminar al inicio= .shift()



export function solution(cars) {
    // 👇 Este es el código que no funciona
    return cars.filter(function (car) {
      if (car.licensePlate != null || car.licensePlate != undefined ) {
        return true;
      } else {
        return false;
      }
    });
  }