// Reasignacion y redeclaracion

var firstName; // Undefiend
firstName = 'Esteban'
console.log(firstName); // Return 'Esteban'

var lastName = 'David'; // declarar / asignar
lastName = 'Ana'; // reasignar
console.log(lastName);  // Return 'Ana' 

var secondName = 'David'; // declarando / asignando
var secondName = 'Ana'; // Reasignanado con la variable let no es posible 
console.log(secondName); // return Ana

// Let
let fruit = 'Apple'; // Declaro y asigno
fruit = 'Kiwi'; // Reasignar 
console.log(fruit); // Return kiwi
// let fruit = 'Pera' / no se puede declarar y asignar con let 

// Const 
const animal = 'dog'; // declaro y asigno\
animal = 'cat' // reasignando
console.log(animal); // Error no puedes reasignar una variable const

const vehicles = [];
vehicles.push('🚗');
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

// Con var
var nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
var nombre = "Oscar" // redeclaración y reasignación ✅

// Con let
let nombre // declaración (undefined) ✅
nombre = "Andres" // asignación ✅
nombre = "Valeria" // reasignación ✅
let nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌

// Con const 
const nombre // SyntaxError: Missing initializer in const declaration. ❌
const nombre = "Andres" // declaración y asignación ✅
nombre = "Valeria" // TypeError: Assignment to constant variable. ❌
const nombre = "Oscar" // SyntaxError: Identifier 'nombre' has already been declared. ❌