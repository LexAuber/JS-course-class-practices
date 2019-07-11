/*
    // Manipulacion de Strings

// indexOf -> Indica la posicion de la primera letra.
// lastIndexOf -> Indica la posicion de la letra
// Si le ponemos dentro de indexOf o lastIndexOf un numero, nos mostrara la ultima coincidencia a desde la posicion (numero) que eligamos.
// search -> hace una busqueda mas rapida y mas acotada.

var myString = 'Con esta frase practicare bastante pppppppp bastante, a ver que pasa a a a a';

var pos = myString.lastIndexOf('practicare',30);
var pos1 = myString.indexOf('practicare');

console.log(pos);

document.getElementById('algoooo').innerHTML = pos;
document.getElementById('fechas').innerHTML = pos1;


// slice -> cuenta desde una primera posicion hasta una ultima sin contarla.
// con valores negativos, empieza desde el final

var myString = 'Con esta frase practicare bastante pppppppp bastante, a ver que pasa a a a a';

var pos = myString.slice(7,12);
document.getElementById('algoooo').innerHTML = pos;

var pos = myString.slice(-12, -7);
document.getElementById('temperatura').innerHTML = pos;

var pos = myString.slice(-3);
document.getElementById('fechas').innerHTML = pos;


//Substring -> hace lo mismo que slice, pero sin valores negativos. Nos podemos encontrar con esto, en sitios donde solo caben pocos caracteres.

//substr -> Desde la priemra posicion, coje x caracteres, segun el numero que pongamos nosotros.

//replace -> Substituye partes de la cadena por otras partes que queramos.

//toUpperCase -> Activa el Uppercase en toda la string.

//concat -> concatena o junta dos strings en una y añade lo que queramos.

//trim -> elimina los espacios hechos en cadenas de texto.

var myString = 'Con esta frase practicare bastante pppppppp bastante, a ver que pasa a a a a';

var pos = myString.substring(7,23);
document.getElementById('algoooo').innerHTML = pos;

var pos = myString.substr(1,2);
document.getElementById('fechas').innerHTML = pos;

var pos = myString.replace('bastante','frase');
document.getElementById('temperatura').innerHTML = pos;

var pos = myString.toUpperCase();
document.getElementById('temperatura').innerHTML = pos;

var mySecondString = 'oooh yeah';
var pos = myString.concat(' ',mySecondString);
document.getElementById('temperatura2').innerHTML = pos;

var otraString = '/    oooh yeah    /';
var pos = otraString.trim();
document.getElementById('fechas2').innerHTML = pos;
*/

// charAt -> indica que hay en la posicion (x) en la cadena, si utilizamos los [] hace lo mismo.
//charCodeAt -> indica el codigo UTF-16
// split -> coje, a partir de algo (espacios, comas), el elemento entre [x] y lo en un array ademas de mostrarlo.

var myString = 'Con esta frase practicare bastante pppppppp bastante, a ver que pasa a a a a';

var pos = myString.charAt(0);
document.getElementById('algoooo').innerHTML = pos;

var pos = myString[0];
document.getElementById('temperatura').innerHTML = pos;

var pos = myString.charCodeAt(2);
document.getElementById('fechas').innerHTML = pos;

var string2= 'algo, algo2, algo3, algo4';
var matriu = string2.split(',');
document.getElementById('fechas2').innerHTML=matriu[0];