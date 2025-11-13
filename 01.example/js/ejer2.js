//array y metodos basicos 
let arrayNombres=["Enma", "Jorge", "Pedro", "Maria", "Sofía"];

arrayNombres.push("Martín");

arrayNombres.shift();

console.log(arrayNombres.includes("Maria"));
console.log(arrayNombres.includes("Enma"));
console.log(arrayNombres);

//parte2
let arrayNombre2=["Luis", "Hugo", "David", "Amelia", "Laura"]
arrayNombre2.push("Marta");
arrayNombres.shift();
console.log(arrayNombre2.includes("Enma"));

let arrayNum=[4,1,9,3,7];
//orden ascendente
arrayNum.sort((a,b)=>a-b);
console.log(arrayNum);
//orden descendente
arrayNum.reverse();
console.log(arrayNum);

//desestructuracion de arrays
let frutas=["manzana", "pera", "platano", "naranja"];
let [fruta1, fruta2] = frutas;
[fruta1, fruta2,...restoFrutas]=frutas;
console.log(fruta1, fruta2, restoFrutas);

//intercambia los valores de dos variables usando desestructuracion
let a=100;
let b=200;
let arrayNum2=[a,b];

//extrae color azul
let colores = ["rojo", ["verde", "azul", "amarillo"]];
let [,[, colorExtraer]]=colores;
console.log(colorExtraer);

//recorrido de arrays con for
let arrayNumeros=[1,2,3,4,5];
//for clasico
for(let i=0;i<arrayNumeros.length;i++){
    console.log(arrayNumeros[i]);
}
//for...of
for (const num of arrayNumeros) {
    console.log(num);
}
//for...in
for (const i in arrayNumeros) {
    console.log(arrayNumeros[i]);
}

let lenguaje=["HTML", "CSS", "JavaScript", "React"];
for (let i = 0; i < lenguaje.length; i++) {
    console.log("Posicion: " +i+": Valor " +lenguaje[i])
    
}
//recorrer al reves
for (let i = lenguaje.length; i >= 0 ; i--) {
    console.log("Posicion: " +i+": Valor " +lenguaje[i])
    
}

//recorridos con forEach, filter, map
let nombres= ["Ana", "Luis", "Marta", "Pedro"];
nombres.forEach(persona => {
    console.log("Hola: " +persona)
});

let numeros=[2,4,6,8];
numeros.forEach(num => {
    console.log(num*2);
});

let numeros1=[5, 12, 8, 130, 44];
let mayores10=numeros1.filter(num=> num>10);
console.log(mayores10);

let nombres2= ["Ana", "Alberto", "Bea", "Carlos"];
let filtroA=nombres2.filter(nombres=>nombres.startsWith("A"));
console.log(filtroA);

let edades=[15, 18, 21, 12, 30];
let filtro18=edades.filter(edad=>edad>=18);
console.log(filtro18);

let arrayNumeros2=[1,2,3,4,5];
let elevador=arrayNumeros2.map(numeros=>numeros**2);
console.log(elevador);

let precios=[10,20,30];
let preciosIva=precios.map(precio=>precio+(precio*0.21))
console.log(preciosIva);

let lenguaje2=["html", "css", "javascript"];
let mayusculas=lenguaje2.map(palabras=>palabras.toUpperCase())
console.log(mayusculas);

let numeros2=[3, 8, 12, 5, 7, 20];
let paresmultiplicados10=numeros.filter(par=>par%2===0).map(num=>num*10);
console.log(paresmultiplicados10);

//array de objetos
let alumnos = [
  { nombre: "Ana", nota: 7 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9 }
];

let aprobados=alumnos.filter(nota=> nota.nota >=5).map(nombre=>nombre.nombre);
aprobados.forEach(nombre=>console.log("Alumno aprobado: " +nombre));


