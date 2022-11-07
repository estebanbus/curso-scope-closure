// var 
var a; // declarando
var b = 'b'; // declaramos / asignamos

b = 'bb'; // reasignar un valor 

var a = 'aa' // redeclaracion

// Global Scope: Cualquier variable que se encuentre en el documento pasan hacer variables globales

var fruit = 'Apple' // global
console.log(fruit)
function bestFruit () {
    console.log(fruit);
}

bestFruit ()

function countries() {
    country = 'Colombia'; 
    console.log(country)
}

countries();
console.log(country)