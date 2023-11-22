class Figuras {
    constructor(name : string) {}
    getArea() : any {return 0};
    getPerimetro() : any {return 0};
}

class Cuadrado extends Figuras{
    constructor(public lado : number){
        super("Cuadrado");
    }
    getArea() {
        return this.lado * this.lado;
    }
    getPerimetro() {
        return this.lado * 4;
    }
}

class Circulo extends Figuras{
    constructor(public radio : number){
        super("Circulo");
    }
    getArea(){
        return (Math.PI * Math.pow(this.radio, 2)).toFixed(3);
    }
    getPerimetro(){
        return (2 * Math.PI * this.radio).toFixed(3);
    }
}
const cua = new Cuadrado(7);
const cir = new Circulo(3);

console.log("El area del Cuadrado es de " + cua.getArea()," metros cuadrados");
console.log("El perimetro del Cuadrado es de " + cua.getPerimetro()," metros");
console.log("El area del Circulo es de " + cir.getArea()," metros cuadrados");
console.log("La circunferencia del Circulo es de " + cir.getPerimetro()," metros");