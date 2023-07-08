
//Hoisting con las Variables
// cuando las variables y funciones se procesan antes de generar cualquier tipo de codigo

var niNombre;
niNombre = "David";


//Con Hoisting lo que sucede en ocaciones mandamos a llamar variables sin delararlas 
console.log(miNombre1)
var niNombre1 = "David"; //undefined 




//HOisting con las Funciones


hey();

function hey() {
    console.log('HOla ', miNombre2);
}

var miNombre2 = "Diego"
//