// Impemente su propia funcion filter

//Filtrar numeros pares

var arr = [1,55,6,3,8,4,636,5,9];
let p = [];
for (let i=0; i < arr.length; i++)
{
    if (arr[i]%2 == 0) { p.push(arr[i]); }
};
console.log(p);

const pares = arr.filter((par) => par%2 == 0);
console.log(pares);