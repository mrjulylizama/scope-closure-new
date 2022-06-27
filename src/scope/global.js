// variables
var a; // declarando variables
var b = 'b'; // declarando / asignamos
b = 'bb'; // reasignacion
var a = 'aa'; // redeclaracion

// Glabal Scope
var fruit = 'Apple'; // global

function bestFruit(){
    console.log(fruit);
}

bestFruit();

function countries(){
    country = 'El Salvador'; // global
    console.log(country);
}

countries();
console.log(country);