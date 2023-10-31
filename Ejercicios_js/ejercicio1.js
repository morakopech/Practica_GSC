//Implemente su propia funcion map

// Devolver los numeros al cuadrado

var ar1 = [1,2,3,4,5];
var ar2 = [1,2,3,4,5];

for (let i = 0; i < ar1.length; i++) 
{
    ar1[i] = ar1[i]**2;
}
console.log(ar1);

let modificoAr2 = ar2.map(function(element) 
{
    return element**2;
});
console.log(modificoAr2);