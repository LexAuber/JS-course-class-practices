/*
/* document.write 

document.write("Hello World!");

/* alert 

alert("Hello world!");

/* console.log

console.log("Hello World!");

var age = 27;//prompt("Cuantos años tienes?");

var mensaje1 = "Eres mayor que 0!";
var mensaje2 = "Eres menor que 0!";

if(age >= 0){
    alert(mensaje1);
} else {
    document.write(mensaje2)
}


/* Strings  var and text's


var miNumero = 10, nuevojs = "JawaScript!", sonido = "kuchini!", vader = false;

document.write("Mi numero 1 guardado es: " + miNumero + "<br/>El nuevo lenguaje de programacion es: " + nuevojs + "<br/>Y el nuevo sistema de adicion de variables se llamara: " + sonido + "<br/>Vader tiene algo que ver con esto? " + vader);

//alert("kuchiniii!");

document.write("El nuevo lenguaje de programacion es: " + nuevojs)

/* Basic operators 

var cantitat = 50, preu = 4;

var total = cantitat * preu;

document.write("El preu total es: " + total + "€" + "<br/>Kuchiniii!!!");

/* Simple substitution of var's 

// Ejemplo de sustitucion de un valor a texto, via console.log

var num1 = 10, num2 = 28;

num1 = "num2";

console.log(num1);

/* Decimal numbers 

var a = 10.65;
var b = 19;
document.write(a+b);

/* Bars inside strings \" something \" 

var nom1 = "john";
var nom2 = 'My name is\"Something\" John Smith';
document.write(nom1+nom2);

/* Boolean 

var nom1 = true;
var nom2 = true;
document.write(nom1+nom2);

/* Increment ++ 


var a = 10;
var b = a + 10 + 25 + 44;
//var a = ++b
document.write("El valor de a: " + a);
document.write("<br/>");
document.write("El valor de b: " + b);


/* Eval() 


var a = "10";
var b = eval("10 + 25 + 44");
var a = ++b
document.write("El valor de a: " + a);
document.write("<br/>");
document.write("El valor de b: " + b);


/* Prompt 

var nom = prompt("Quin es el teu nom?");
var cognom = prompt("Quin es el teu cognom?");

document.write("<p>");
document.write("Hola! " + nom + " " + cognom);
document.write("</p>");

var ptos;

/* Ejercicio Nombre, Apellido e Hijos

var nom = prompt("Tu nombre?");
var cognom = prompt("Tu apellido?");
var eleccion = prompt("Quieres tener mas hijos?");
var hijos;

if (eleccion == "si") {
    var hijos = prompt("Cuantos quieres?");
    document.write("Tu nombre y apellido son: " + nom + " " + cognom);
    document.write("<br/>");
    document.write("Elige tener hijos? "+ eleccion);
    document.write("<br/>");
    document.write("Cantidad de hijos elegida: "+ hijos);
} else {
    document.write("Te lo preguntare mas tarde ¬¬");
}

*/

// Ejecicio Prompt y calculos 

var nombre = prompt("Tu nombre?");
var apellido = prompt("Tu apellido?");
var edad = prompt("Cuantos años tienes?");
var quitar = prompt("y cuantos te quieres quitar? ^^");

// Resta

//alert("Estas muy bien con " + eval(edad+quitar));

// Suma 

alert("Estas muy bien con " + parseInt(quitar) + parseInt(edad));