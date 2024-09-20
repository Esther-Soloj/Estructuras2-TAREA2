/**
 * Nombre: Maria Esther Tiguila Soloj
 * Carnet: 1627021
 * Fecha: 19/2/2024
 */


// Clase Nodo para la lista doblemente enlazada
class Nodo {
    valor: number;
    siguiente: Nodo | null;
    anterior: Nodo | null;

    constructor() {
        // Genera un número aleatorio entre 1 y 9
        this.valor = Math.floor(Math.random() * 9) + 1;
        this.siguiente = null;
        this.anterior = null;
    }
}

// Clase ListaDoblementeEnlazada
class ListaDoblementeEnlazada {
    private cabeza: Nodo | null;
    private cola: Nodo | null;

    constructor() {
        this.cabeza = null;
        this.cola = null;
    }

    // Método para insertar un nuevo nodo al final de la lista
    insertarAlFinal(): void {
        const nuevoNodo = new Nodo();

        if (!this.cabeza) {
            // Si la lista está vacía, el nuevo nodo es tanto la cabeza como la cola
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo;
        } else {
            // Si la lista no está vacía, añadimos el nuevo nodo al final
            nuevoNodo.anterior = this.cola;
            this.cola!.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }
    }
 // Método para imprimir los números pares de la lista
 imprimirPares(): void {
    // Inicializamos una variable para recorrer la lista, empezando por la cabeza
    let actual = this.cabeza;

    // Imprimimos un mensaje indicando que se mostrarán los números pares
    console.log("Números pares en la lista:");

    // Bucle que recorre la lista mientras no lleguemos al final (null)
    while (actual !== null) {
        // Comprobamos si el valor del nodo actual es par
        if (actual.valor % 2 === 0) {
            // Si es par, lo imprimimos en la consola
            console.log(actual.valor);
        }

        // Avanzamos al siguiente nodo de la lista
        actual = actual.siguiente;
    }
    // El bucle termina cuando llegamos al final de la lista (actual === null)
}
}

// Programa principal
const lista = new ListaDoblementeEnlazada();

// Insertar 5 nodos
for (let i = 0; i < 5; i++) {
    lista.insertarAlFinal();
}

// Imprimir los números pares
lista.imprimirPares();

console.log("\nPrograma realizado por MARIA ESTHER TIGUILA SOLOJ - 1627021:");