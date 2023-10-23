//Find 

let m = [1, 2, 5, 99, 8, 74];

let element = Math.min(...m);
console.log(element);

const f = m.find(e => e === element);
console.log(f);