// Implemente su propia funcion find

let m = [1, 2, 5, 100, 8, 74];

let element = Math.min(...m);
console.log(element);

const f = m.find(e => e === element);
console.log(f);