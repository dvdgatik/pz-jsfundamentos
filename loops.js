var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) {
    console.log(`Hola, ${alumno}`);
}
for(var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

for(i=0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}
/*Hola, Maria
Hola, Sergio
Hola, Rosa
Hola, Daniel*/
