// push, como su mismo nombre dice es como si empujara algo
// agrega uno o mas elementos al final de un array, ya no se coloca su posicion

// ejem datos[5] = ""Guillermo

let fruta = ["manzana", "fresa", "banana", "pera"]
fruta.push("durazno", "sandia")

// pop a diferencia del metodo push es todo lo contrario, pop elimina el ultimo elemento
fruta.pop()

console.log("Estas son las frutas que me gustan: ", fruta)


// shift, elimina el primer elemento de un array y cambia la posición que tenia

let fruta1 = ["manzana", "fresa", "banana", "pera"]

fruta1.shift()

console.log("Estas son las frutas que me gustan: ", fruta1)

// unshift agrega uno o mas elementos al inicio del array 

let fruta2 = ["manzana", "fresa", "banana", "pera"]

fruta2.unshift("toronja")

console.log("Estas son las frutas que me gustan: ", fruta2)

// splice añade, elimina o reemplaza elementos en el array a partir de su indice
// el primer dato que coloque lo puse en el indice 1, el segundo indica el numero de elementos que añaden, eliminan o reemplazan
// finalmente el elemento que se se coloca es el que ira 


let fruta3 = ["manzana", "fresa", "banana", "pera"]

fruta3.splice(1, 1, "naranja")

console.log("Estas son las frutas que me gustan: ", fruta3)