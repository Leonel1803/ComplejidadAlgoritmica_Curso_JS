/*
    Complejidad Temporal -> O(n + 3) -> O(n)
    Complejidad Espacial -> O(n + 2) -> O(n)
    Espacio Auxiliar -> Complejidad Espacial - Espacio de entrada -> O(1)
*/

function linearSearch(arreglo,clave){ // O(n + 1) Espacial
    for(let indice=0;indice<arreglo.length;indice++){// O(n) Temporal, O(1) Espacial
        if(arreglo[indice]===clave){ // O(1) Temporal
            return indice; // O(1) Temporal
        }
    }

    return-1; // O(1) Temporal
}