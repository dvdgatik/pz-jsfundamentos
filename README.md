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
