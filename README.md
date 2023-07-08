# pz-jsfundamentos
Fundamentos de JavaScript

## ¿Qué es JavaScript?


Size Limit is a performance budget tool for JavaScript. It checks every commit
on CI, calculates the real cost of your JS for end-users and throws an error
if the cost exceeds the limit.

* JavaScript es un Lenguaje Interpretado Orientado a Objetos
* Debilmente tipado
* Dinamico



Nace para dar dinamismo a la web para hacer las paginas estáticas mas dinámicas orientado a trabajar 100% web

Es un lenguaje interpretado, orientado a objetos, débilmente tirado y dinámico.

Orientado a objetos: permite generar objetos globales que son conjuntos de características para agrupar distintos elementos de nuestro sistema que a la vez forman parte de una base de datos y todos estos elementos pueden ser ocupados para mostrar información individual.

Débilmente tipado: los tipos de datos no están bien definidos en el leguaje y permite por ejemplo operaciones entre numerosos y letras porque el lenguaje asume tipos de datos que no necesariamente son los que se quiere representar.

++Dinámico: ++ el lenguaje corre directamente en el runtime(tiempo de ejecución).

Realmente es un lenguaje interpretado?
Interpretado quiere decir que el leguaje va a ir leyendo el código linea por linea en el tiempo de ejecución y probando que todo funcione en el proceso con la interacción con el programa y si encuentra un error en ese momento lo marca.

Una vez que el navegador obtiene el código js el motor de js lo procesa convirtiéndolo a binario para que sea entendido por la maquina por lo que javascript es un leguaje compilado.

Backwards & Forwards

Forwards: Ser compatible con versiones futuras quiere decir que al implementar funcionalidades nuevas del leguaje no daña nuestro código y se puede usan en versiones anteriores del motor de compilación.

Backwards: Todas las funciones nuevas del lenguaje no rompen el entorno de trabajo actual pero no las puedes usar inmediatamente hasta que no se estandaricen .

Para hacer este cross versión del lenguaje se utilizan compiladores como BABEL que permite utilizar nuevas funcionalidades del lenguaje javascript dentro de nuestro entorno actual de trabajo traduciendo las nuevas versiones de javascript a versiones anteriores standard que el navegador entiende para que puedan ser utilizadas.




Porque Aprender JavaScript 

JavaScript tiene una comunidad enorme de desarrolladores que te pueden ir ayudando a generar diferentes cosas.

    Si solo estuvieras interesado en trabajar aplicaciones web tienes muchos frameworks y librerías construidas en JavaScript que te van a ayudar a hacer proyectos de forma mucho mas rápida, eficiente y robusta (Angular, View, React,entre otros)

    Si no quieres trabajar solo en aplicaciones Web puedes utilizar JavaScript con un framework que se llama React Native para poder construir aplicaciones nativas como Android y IOS.

    Puedes construir aplicaciones de escritorio con JavaScript, usando un framework llamado Electron, pueden correr en Mac o Windows.

    También puedes trabajar en la parte del Back-end o **IOT **(Internet Od Things) es un concepto que se refiere a una interconexion digital de objetos cotidianos con Internet. Esto con un Framework llamado NodeJS, el cual es un entorno de ejecución de JavaScript que corre directamente en el Back-end.






Variables 
Dentro de JavaScript tenemos tres formas de declarar una variable las cuales son: var, const y let.

    Var: Era la forma en que se declaraban las variables hasta ECMAScript 5. Casi ya no se usa porque es de forma global y tiene las siguientes características:

    o Se puede reinicializar: osea todas las variables se inicializan, por ejemplo:
    Var pokemonType = ‘electric’ entonces reinicializar es:
    Var pokemonType = ‘grass’ osea la misma variable con diferentes datos el último dato predomina.
    o Se puede reasignar: osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: Var pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’ ya no va var
    o Su alcance es función global: osea inicializamos la variable, pero la podemos llamar desde cualquier bloque (una llave abierta y una cerrada {}) pero hay que tener mucho cuidado con ello ya que puede haber peligro, no es recomendable usar VAR.

    const y let es la forma en que se declaran las variables a partir de ECMAScript 6,

    const: sirve para declarar variables que nunca van a ser modificadas:
    o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. const pokemonType = ‘electric’ no puede haber:
    const pokemonType = ‘grass’
    o No se pude re asignar: una vez que la hayamos inicializado no la podemos reasignar solo con su nombre: const pokemonType = ‘electric’ no puede ejecutarse:
    pokemonType = ‘grass’
    o No es inmutable: osea no puede cambiar con objetos:

    Let: Son variables que pueden ser modificadas, se pueden cambiar:
    o No se puede reinicilizar: es una const única no puede haber otra inicializada con el mismo nombre. let pokemonType = ‘electric’ no puede haber:
    let pokemonType = ‘grass’
    o Se puede reasignar: Osea la variable ya inicializada le reasignamos otro valor por ejemplo: inicializamos la variable: let pokemonType = ‘electric’ ahora la reasignamos pokemonType = ‘grass’
    o Su contexto de es bloque: Solo funciona dentro de un bloque {}, fuera de ello no.




    Las funciones son las tareas que va a llevar a cabo el navegador. Existen 2 tipos de funciones
1) Declarativas
2) De expresión
Ambas pueden llevar parámetros, que son los datos que necesitan para ejecutarse.
Cada parámetro va separado por una coma.
Cada instrucción que tenga la función debe terminar con ; .
Si queremos que una función nos dé un numero o dato tenemos que usar la siguiente sintaxis:

return El dato que queremos que nos dé;



Hositing es cuando las variables y funciones se declaran antes de que se procese cualquier tipo de codigo

El hoisting solo pasa con versiones pasadas de JavaScript 5 hacia abajo

de Ecmacript 6 en adelante:

Las nuevas versiones de  ECMASCRIPT presentaron dos nuevas palabras reservadas para variables
const y let 

con const y con let ya no se genera un hoisting


¿Qué es Hoisting?
En JavaScript, las declaraciones (por ejemplo, de variables o funciones) se mueven al principio de su scope o ámbito. Este comportamiento se conoce como hoisting y es muy importante tenerlo en cuenta a la hora de programar para prevenir posibles errores.

    Las funciones siempre se mueven arriba del scope. Por lo tanto, podemos elegir donde declararlas y usarlas.
    La declaración de las variables se mueven arriba del scope, pero no la asignación. Antes de usar una variable, habrá que crearla y asignarla


Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor


ParseInt vs Number

ParseInt: Analiza la cadena desde el primer dígito, hasta que encuentre algo que no sea dígito y devuelve lo que haya analizado.
Ejemplo:
parseInt(“123hui”) //123
Number: Busca convertir toda la cadena en un número, por lo que al encontrarse con un elemento que no sea diginto nos dara como resultado NAN.
Ejemplo:
Number(“123hui”) //NaN

hay que tener cuidado con la coercion implicita porque el navegador no siempre devuelve el dato que queremos

Thruty and Falsy


//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también




Un Array es un tipo de estructura de datos, objeto. Puede guardar datos distintos dentro, guarda los datos en forma de lista.
.lenght devuelve la longitud del array.
.push() agrega elementos al final de array.
.pop() elimina un elemento del array.
.unshift() agrega un elemento al array, pero lo agrega en primer lugar.
**.shift() **elimina el elemento que está en el inicio del array.
**.indexOf ** devuelve la posición de un elemento del array.



Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

    for - recorre un bloque de código varias veces

    for/in - recorre las propiedades de un objeto

    for/of - recorre los valores de un objeto iterable

    while - recorre un bloque de código mientras se cumple una condición específica

    do/while - también recorre un bloque de código mientras se cumple una condición específica





    Recoridos de Arrays


    Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

Utilizaremos el siguiente array de objetos para los ejemplos de los método


Cómo utilizar el método filter

El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

El método filter recibe dos argumentos:

    La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.


var otherArray = array.filter(function(), thisArg)


La función, que recibe como argumento el método filter, utiliza tres parámetros:

    El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    El array que está iterando.


const other = array.filter(function(element, index, array))


Cómo utilizar el método map

El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

El método map recibe dos argumentos:

    La función que itera y transforma cada elemento del array (obligatorio).
    Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.



    var otherArray = array.map(function(), thisArg)

La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

    El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
    El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
    El array que está iterando.


var otherArray = array.map(function(element, index, array))





¿Qué hace el método `map()`?
Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
2.
¿Qué hace el método `forEach()`?
Ejecuta la función indicada una vez por cada elemento del array.
3.
¿Qué hace el método `filter()`?
Crea un nuevo array con los elementos del array que se pasó como parámetro y que cumplan con la condición definida.
4.
¿Qué método debo utilizar para eliminar el último elemento de un array?
.pop()
5.
¿Qué hace el método `find()`?
Retorna el primer elemento de un array que cumple con una condición definida en un nuevo array.






¿Qué es un array?
Es una estructura de datos de tipo objeto.
2.

¿Qué resultado podría esperar de ésta validación?

4 == “4”

TRUE
3.

¿Es correcta la siguiente sentencia ?

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}

No
4.
¿Cuáles son los tipos de scope tenemos?
Scope global y Scope local.
5.

¿Qué resultado podría esperar de ésta validación?

1 = “1”

Syntax Error
6.
¿Qué es una variable?
Es la representación de un espacio en memoria.
7.

¿Qué podemos esperar al llamar al método .pop(); ?
Borrar el último elemento de mi array.
8.

¿Qué resultado podría esperar de ésta validación?

6 === “6”

FALSE
9.

¿Qué método llamaríamos para saber el index de un elemento de mi array?
indexOf()
10.

¿Cómo se le conoce a la siguiente sentencia?

var nombre;

Declarar una variable.
11.
¿Por qué decimos que JavaScript es un lenguaje dinámico?
Porque es un lenguaje que corre en tiempo de ejecución.
12.

¿Cómo se le llama al siguiente ejemplo de funciones?

function myfunction() { 
	...
}

Función declarativa.
13.
¿Cómo podemos crear notas o comentarios en nuestro JavaScript?

// …
14.

¿Cómo se llama al siguiente ejemplo de funciones?

var myFunction = function() { 
	...
}

Función expresiva.
15.

¿Cómo se le conoce a la siguiente sentencia?

nombre = “Diego”

Inicializar una variable.
16.
¿Qué significa Coerción en JS?
Es el proceso de convertir el valor de un tipo a otro.
17.
¿Qué es el hoisting en Javascript?
Es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código.