// Funciones Declarativas, al usar una palabra reservada se esta declarando la funcion

// Una funcion declarativa que inicializara un valor
function miFunction() {
   return 3;
}

miFunction();



// Funciones de Expresion o Anonimas al no tener nombre o estar asignadas dentro de una variable

var miFunction = function(a,b) {
    return a + b;
}

miFunction(1, 2);