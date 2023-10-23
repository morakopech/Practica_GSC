// Implemente su propia funcion reduce

const num = [1, 2, 3, 4, 5];

const rtado1 = num.reduce((acum, elemento) => {return acum = acum*elemento;});
console.log(rtado1);

var rtado2 = 1;
for (let i=0; i < num.length; i++)
{
    rtado2 = rtado2 * num[i];
}
console.log(rtado2);