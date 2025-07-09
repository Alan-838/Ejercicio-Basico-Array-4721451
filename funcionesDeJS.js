// una funcion en JS es un operatoria que esta diseñada para poder resolver, accionar o ejecutar una accion
// Anonimas - Declarativas - Arrow

// Declarativas

function saludar(){
    console.log("Hola grupo 22")
};

saludar();

// Anonimas

const sumar = function(a,b) {
    return a+b
};

console.log("El resultado es: ",sumar(10,20));

// funciones flecha - arrow function

const restar = (a,b) => {
    return a-b;
};

console.log("El resultado de la resta es:",restar(20,10));

// Ejercicio 1

function sumando(a,b){
    return a+b;
};

console.log("El resultado de la suma: ", sumando(50,80));

// Ejercicio 2

const promedio = function(a,b,c,d) {
    return (a+b+c+d) / 4;
};

console.log("El promedio del alumno es: ",promedio(10,10,50,10));

// Ejercicio 3

const areaRectan = (a,b) => {
    return a*b;
};

console.log("El area del rectangulo es: ",areaRectan(50,10));

// Ejercicio 4

function areaTriangu(a,b){
    return (a+b) / 2;
};

console.log("El area del triangulo es: ",areaTriangu(50,10));

// Ejercicio 5

const areaCircun = function(radio) {
    return 3.1416*radio*radio;
};

console.log("El area de la circunferencia es: ",areaCircun(10));

// Ejercicio 6

const sueldoSemanal = (salarioHH,cantidadHT) => {
    return salarioHH*cantidadHT;
};

console.log("El sueldo semanal de Pepito es: ",sueldoSemanal(30,40),"cocorocos");

// Ejercicio 7

function pedidoEnPulg(pedidoEnMetros) {
    return pedidoEnMetros * (1/0.0254);
};

console.log("La cantidad de tela que debe pedir es: ",pedidoEnPulg(1000),"pulgadas");

// Ejercicio 8

const solesADolares = function(soles) {
    return soles * (1/3.54);
};

console.log("La cantidad de dolares que recibiria es: ",solesADolares(1000));

// Ejercicio 9

const edadDePostulantes = (anoDeNacimiento) => {
    return 2025 - anoDeNacimiento;
};

console.log("La edad del postulante es: ",edadDePostulantes(1998));