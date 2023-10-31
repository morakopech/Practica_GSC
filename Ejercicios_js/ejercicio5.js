/*
Realizar calculos usando funciones y obtener los resultados.
Requerimientos:
 - Debe haber una función para cada número del 0 (”cero”) al 9 (”nueve”)
 - Debe haber una función para cada una de las siguientes operaciones 
matemáticas: suma, resta, multiplicación y división 
 - Cada cálculo consta exactamente de una operación y dos argumentos (números)
 - La función externa representa el operando izquierdo, la función interna representa el
operando derecho
 - La división debe ser una división entera. Por ejemplo, el resultado debería 
ser 2 y no 2.666666...

seven(times(five())); // debe devolver 35
four(plus(nine())); // debe devolver 13
eight(minus(three())); // debe devolver 5
six(dividedBy(two())); // debe devolver 3
*/

zero = (f) => {return f ? f(0) : 0;}

one = (f) => {return f ? f(1) : 1;}

two = (f) => {return f ? f(2) : 2;}

three = (f) => {return f ? f(3) : 3;}

four = (f) => {return f ? f(4) : 4;}

five = (f) => {return f ? f(5) : 5;}

six = (f) => {return f ? f(6) : 6;}

seven = (f) => {return f ? f(7) : 7;}

eight = (f) => {return f ? f(8) : 8;}

nine = (f) => {return f ? f(9) : 9;}


function plus(b) 
{
    return function (a) { return a + b; };
}

function minus(b) 
{
    return function (a) { return a - b; };
}

function times(b) 
{
    return function (a) { return a * b; };
}

function dividedBy(b) 
{
    return function (a) { return b === 0 ? "ERROR: No se puede dividir por cero" : (a / b); };
}

console.log(seven(times(five())));
console.log(eight(dividedBy(zero())));
console.log(five(plus(nine())));
console.log(two(minus(three())));

