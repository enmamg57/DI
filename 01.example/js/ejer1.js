//declaracion de variables
let nombre="Enma";
console.log(nombre);

//const PI=3.1415;
//console.log(PI)
let edad;
edad=19;
console.log(edad);


//tipos de datos
let ciudad="Sotrondio";
let totalAlumnos=20;
let sabeNadar=true;
let profesor=null;
let apellido;
console.log(typeof ciudad, totalAlumnos, sabeNadar, profesor, apellido);

//convertir numero a string
let edadTexto=String(edad);
console.log(edadTexto);
//convertir cade a numero con string 
let edadNumero=Number(edadTexto);
console.log(edadNumero);

//objetos
let persona={
    nombre1:"Enma",
    edad1:19,
    ciudad1:"Sotrondio"
}

console.log(persona.nombre1);
console.log(persona["edad1"]);

//añade una nueva propiedad, profesion
persona.profesion="Estudiante";
console.log(persona.profesion);

//desestructuracion para extraer nombre y edad
let { nombre1, edad1 }= persona;
console.log(nombre1);
console.log(edad1);

//funciones
function saludar(nombre){
    return "Hola "+nombre;
}
console.log(saludar("Enma"));

function sumar(a,b){
    return a+b;
}
console.log(sumar(2,6));

const multiplicar=(c,d)=> c*d;
console.log(multiplicar(3,2));

function esMayorEdad(edad){
    if(edad>=18){
        return "Es mayor de edad"
    }else{
        return "Es menor de edad"
    }
    
}
console.log(esMayorEdad(34));