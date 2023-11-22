/*
Crear una clase que represente una pila (LIFO). Dicha clase debe tener los siguientes métodos:
• Agregar elementos a la pila push
• Sacar elementos de la pila pop
• Consultar la cantidad de elementos size
Además:
1 Diseñar la clase de forma tal que se puedan crear pilas para tipos concretos, ej: boolean,
string, number, o cualquier otro tipo. Pero que solo permita dichos tipos.
2 Crear una nueva clase que no permita el agregado de elementos repetidos.
*/

class Pila<T> {
    pila : T[] = [];

    push(elem : T) {
        this.pila.push(elem);
    }

    pop() : T | undefined {
        return this.pila.pop();
    }

    size() : number {
        return this.pila.length;
    }
}

class PilaSinRepetir<T> extends Pila<T>{
    
    push(elem : T) {
        if(!this.pila.some(item => item === elem)) {
            this.pila.push(elem);
        }
        else {
            console.log(`El elemento ${elem} ya está en la pila`);
        }
    }
}