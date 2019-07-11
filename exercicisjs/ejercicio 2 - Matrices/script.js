
// Matrices

// Array + Lenght + Push (Cadena, Longitud y Añadir)

var alumnes = ["Xavi", "Debi", "Laura", "Marc"];

alert(alumnes[2]);

alert("A la aula hi han " + alumnes.length + " alumnes");

// Push (añade contenido a la string)


alumnes.push("Alex");

alert(alumnes);

alert("A la aula hi han " + alumnes.length + " alumnes");


//Ejercicio push + [x] 


var compra1 = prompt("Que compraras primero?"), compra2 = prompt("segundo?"), compra3 = prompt("tercero?"), compra4 = prompt("y por ultimo?");

var compras = [compra1, compra2, compra3, compra4];

alert("Vas a comprar " + compras.length + " productos y estos son " + compras);

var compra5 = prompt("Quieres añadir algo mas?");

compras.push(compra5);

alert("Al final te quedas con todo esto: " + compras);
alert("La cajera dice que no tienen " + compras[0] + " ni tampoco " + compras[3] + " y les queda poco " + compras[compras.length-1] +".");

// Sort (Combina aleatoriamente los elementos de la string)

var aula = ["Victor", "Aivan", "Ruso", "Tulipán"];
alert(alumno);
var notas = [8,6,9,10];
aula.sort();

// Ordenacion numerica

//notas.sort(function(a,b){return a-b});

alert(aula);
alert(notas);

// Pop (Elimina el ultimo elemento)

var aula = ["Victor", "Aivan", "Ruso", "Tulipán"];
var alumno =aula.pop();


// Shift (Elimina el primer elemento); unshift (añade)

var aula = ["Victor", "Aivan", "Ruso", "Tulipán"];
var alumno =aula.shift();


// Eliminar elementos: Shift y Pop
// Añadir elementos: Unshift y Push

// Se pueden añadir elementos en el array en sitios concretos:

aula[2] = "Xavi";

// Se pueden borrar elementos en el array en sitios concretos

//delete aula[2];

// Splice (posicion, eliminacion, elementos siguientes)

aula.splice(2,0,"Xavi", "Marc", "Debi");
          // posicion 2, no eliminar nada, añade Xavi, Marc y Debi

aula.splice(2,1,"Xavi", "Marc", "Debi");

// Concat (Union de dos arrays)

var aulaChicos = ["Victor", "Aivan", "Ruso", "Tulipán"];
var aulaChicas = ["Debi", "Helena", "Laura", "Estela"];
var aulaTotal = aulaChicos.concat(aulaChicas);

// Slice (extrae elementos de la matriz pero sin modificar la misma matriz, se utiliza para consultar los datos para luego modificarlos y ponerlos otra vez.)

var nuevaAula = aulaTotal.slice(1);

alert("En la aula estan: " + aulaTotal);
alert("y ahora: " + nuevaAula)


// Ejercicio niños:

var enanos = ["Steve Jobs", "SVG", "Tincunapregunta", "Billy Puertas","Placento"];
var enano1 = prompt("Oye, este es tu enano no? como se llama?");
var enano2 = prompt("Vale, y este crio?");

enanos.push(enano1, enano2);

alert("Vale, creo que estamos todos, veamos: " + enanos);

enanos.sort(function(a,b){a-b});

alert("Malditos enanos! Estaos quietos, ahora tendre que volver a contar,a ver: "+ enanos);

var nuevosEnanos = enanos.slice(2,4);

alert("Jolines! Me giro y ya hay dos que se han pirao...veamos: " + nuevosEnanos + "... DONDE ESTAIS!!??");


