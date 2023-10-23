//Implemente su propia funcion find

//buscar articulo con mayor csntidad de stock

let m =new Map([[2, "Camperas"], [3, "Pantalones"], [8, "Remeras"]]);

for (let [key, value] of m) 
{
    return a = Math.max(key);
}
console.log(a);

const f = m.find((key, value) => Math.max(key));

console.log(f);

