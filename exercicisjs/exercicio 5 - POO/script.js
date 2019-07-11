
// Programacion Orientada a Objetos:

// Math

// Raiz cuadrada (sqrt)
/*
var numero = prompt('Dame un numero'), arrel = Math.sqrt(numero);

document.write('La raiz cuadrada de ' + numero + ' es ' + arrel);

// Math.max()

var num1 = parseInt(prompt("Dime un numero:"));
var num2 = parseInt(prompt("Dime un segundo numero:"));
var num3 = parseInt(prompt("Dime un tercer numero:"));

resultado = Math.max(num1,num2,num3)

document.write('Los numeros son los siguientes ' + num1 + num2 + num3 + ' y el mayor es ' + resultado);


// Math.random()

//formula -> Math.round(math.random()*rango+valorinicial);

function numAleatorio(num1,num2){
    return Math.round(Math.random()*12+8);
}

var resultado = numAleatorio(8,20);

alert('Valor aleatorio es: ' + Math.round(resultado));

//Floor te redondea por la parte baja, el Rount te redondea por la parte mas alta.

// Ejercicio: Calcular num aleatorio, entre 0 10, rango de 10, y el usuario debe dar un numero, y debe adivinar cual ha calculado la maquina.

var aleatorio = 0;
var eleccion = prompt('En que numero estas pensando?');

function numAleatorio(num1,num2){
    return Math.round((Math.random()*num1)+num2);
}

aleatorio = numAleatorio(10,0);

console.log(aleatorio);

document.getElementById("mensaje").innerHTML = aleatorio;

/*
if(eleccion == aleatorio){
    //document.getElementById('mensaje1').innerHTML=aleatorio;
    document.write('Has acertado! El numero era: ' + aleatorio);
} else {
    //document.getElementById('mensaje2').innerHTML=aleatorio;
    alert('Lo siento, era el ' + aleatorio);
}


// -------- Object Date ----------*/

// Exercici Fechas 1:

//var miFecha = new Date();

var d = new Date();
var m = new Date();
var any = new Date();

var semana = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Disabte'];
var mesNum = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Septembre', 'Octubre', 'Novembre', 'Desembre'];

var dia = semana[d.getDay()];
var mes = mesNum[m.getMonth()];

document.getElementById('dia').innerHTML=dia + ' ' + d.getDay();
document.getElementById('mes').innerHTML=mes;
document.getElementById('any').innerHTML=any.getFullYear();



// Exercici Fechas 2: crear 2 dades, compararles y saber quina es mes antiga i quina mes gran.

var semana = ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Disabte'];
var mesNum = ['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Septembre', 'Octubre', 'Novembre', 'Desembre'];

// Declaramos fechas, una diferente.

var fecha1 = new Date(2019,7,4);
var fecha2 = new Date(2019,7,4,2);

//Para configurar las horas:

fecha2.setHours(0,0,0,0);
fecha1.setHours(0,0,0,0);

// Compara los valores de dentro de los objetos, y al ser iguales, saltara. Con .getTime(). 

if(fecha1.getTime() == fecha2.getTime()){
    document.getElementById('fechas').innerHTML= 'Son identicas';
} else {
    document.getElementById('fechas').innerHTML= 'Son fechas diferentes';
}


// Exercici Fechas 3: Cojer la fecha actual y limpiarla, que quede solo dia mes y año.

// Version 1:

var fecha = new Date();

document.getElementById('fechas').innerHTML=fecha.toLocaleDateString();

// Version 2:

document.getElementById('fechas').innerHTML=fecha.getDate() + '/' + (fecha.getMonth()+1) + '/'+ fecha.getFullYear();


// Exercici 4: Fecha de nacimiento, fecha actual, y diferencia en dias.

//Version 1:

var fecha1 = new Date(1991,7,23);
var fecha2 = new Date(2018,6,4);

document.write((fecha1.getTime() - fecha2.getTime())/86400000 + " dias");

//Version 2:

var milisegundos = 1000 * 60 * 60 * 24;

function diferencia(a, b) {
  
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / milisegundos );
}

a = new Date("1991-07-23"),
b = new Date("2018-06-04"),
alert( difference = diferencia(a, b));


// Exercici Celsius a Farenheit.

var celsius = prompt('Que temperatura hace?')

function conversion(temp){
    return (temp*1.8)+32;
}

document.getElementById('temperatura').innerHTML='La temperatura de hoy es ' + conversion(celsius) + ' en grados farenheit y ' + celsius + ' en celsius.'; 
// Otros

function miFuncion(){
    var miNombre = 'Alex';
    document.getElementById('fechas').innerHTML= typeof miNombre;
}

miFuncion();
document.getElementById('temperatura').innerHTML=typeof miNombre;

// Sin el var, dentro de una funcion, fuerzas a que sea global, si no, es local dentro de la funcion.
