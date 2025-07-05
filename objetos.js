// objeto: no es nada más que un elemento de nuestro entorno
// por ejemplo si quisiera definir como objeto un carro 
// objeto: un carro
// key: value
// marca: kia
// puertas: 4
// color: azul

// declaramos un objeto

let carro = { 
    marca: "kia",
    color: "azul",
    electrico: true,
    costo: 32.000
};

console.log(carro);

// crear 3 objetos 1 persona, 1 electrodomestico con 5 propiedades como minimo cada uno

let guilmoncha = { 
    raza: "chusca",
    color: "blanco",
    cariñosa: true,
    costo: 0,
    mordelona: true
};

let mostacha = { 
    raza: "persa",
    color: "ploma",
    cariñosa: true,
    costo: 1000,
    mordelona: false
};

let captain = { 
    raza: "medio fino",
    color: "gringo",
    cariñoso: true,
    costo: 500,
    mordelon: true
};

let Carlitos = { 
    carrera: "Fisico Nuclear",
    pelo: "escazo",
    estudioso: false,
    sueldo: 1200,
    trabajador: true
};

let Refrigeradora = { 
    marca: "LG",
    color: "plomo",
    grande: false,
    precio: 2500,
    resistente: true
};

let celular = {
    marca: "Xiaomi",
    color: "negro",
    precio: 1000,
    pequeno: false,
    resistente: true
};

let celular2 = {
    marca: "Xiaomi",
    color: "verde",
    precio: 300,
    resistente: false,
    bonito: false,
};

let televisor = {
    marca: "LG",
    grande: true,
    precio: 1000,
    resistente: false,
    pantalla: "LED"
};

let carro1 = {
    marca: "Mustang",
    azul: true,
    electrico: false,
    costo: 32.000
};

console.log(carro1.marca);

//como modifico un valor en un object

carro1.marca="Ferrari";

console.log(carro1.marca);


// eliminar una propiedad y valor en un object

delete carro1.marca;

console.log(carro1);

const usuarios = [
    {nombre: "Carlitos", edad: 35, sexo: "male"},
    {nombre: "Guillermo", edad: 25, sexo: "male"},
    {nombre: "Christian", edad: 45, sexo: "male"},
    {nombre: "Joao", edad: 35, sexo: "male"}
];

console.table(usuarios);

// añadir un nuevo object al array de usuarios

usuarios[4] = {nombre: "Ronaldo", edad: 55, sexo: "male"};

console.log(usuarios);

usuarios.push({nombre: "Robertino", edad: 45, sexo: "male"});

console.log(usuarios);

usuarios.splice(6, 0, {nombre: "Carolus", edad: 65, sexo: "male"});

console.log(usuarios);