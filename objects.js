/*Objetos: JS es un lenguaje que está diseñado en un paradigma de objetos.

Ejemplo de Objeto:*/


var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020
}


//Acceder a la propiedad de un objeto


miAuto.marca
miAuto['marca'];
    

var miLaptop = {
    Modelo: "15-dw0004la",
    Procesador: "Intel Core i7",
    MemoriaRAM: "8GB",
    DiscoDuro: "256GB",
    Peso: "1.74 kg",
    caracteristicas: function(){
        console.log(`Mi laptop tiene las siguientes caracteristicas ${this.Modelo} ${this.Procesador} ${this.MemoriaRAM} ${this.DiscoDuro} ${this.Peso}`)
    }
}

miLaptop.caracteristicas()


//this es una palabra clave que hace referencia al objeto padre




// los key values se representan como string para JS esto quiere decir que si colocan una propiedad por ejemplo marca : “toyota” es lo mismo decir “marca” : “toyota”

// Debido a que los key values JS los interpreta como strings significa que tambien pueden acceder a una propiedad usando llaves y dentro especificando el key value
