//var num1 = parseInt(prompt("Dime un numero:"));
//var num2 = parseInt(prompt("Dime un segundo numero:"));

// Ejemplo 1

//Si, num1 y/o num 2 No son Not a Number, es decir, son letras, da un true (if), si no, un false(else). 

//Aritmetica:

//Variab1e num1 pregunta una string y la convierte a numero. Variable num2 pregunta una string y la convierte a numero.

// Si num1 y num2 No son Not a Number (no son letras) es un true.
    // Si num1 mayor que num2
        //Primer alert que num es mayor
    // Si no
        //Segundo alert que num es mayor
// Si no
    // alert escribe numeros

Codigo:

if(num1 && num2 !== isNaN('')){
    if(num1>num2){
        alert("El numero mayor es el: " + num1);
    } else {
        alert("El numero mayor es el: " + num2);
    }
} else {
    alert("Escribe numeros!");
}


// Ejemplo 2

// Si no son un numero num1 y num2, da true y por lo tanto da la alerta. Si da un false, lanza la operacion. 

// Aritmetica:

// Variab1e num1 pregunta una string y la convierte a numero. Variable num2 pregunta una string y la convierte a numero.

// Si num1 y num2 no son numeros
    // da una alerta
// Si lo son
    //Compara ambos numeros, si num1 es mayor que num2
        // da alerta el mayor es num1
    // si no
        // da alerta el mayor es num2

// Codigo: 

if(isNaN(num1 && num2)){
    alert("Escribe numeros!");
} else {
    if(num1>num2){
        alert("El numero mayor es el: " + num1);
    } else {
        alert("El numero mayor es el: " + num2);
    }
}


// Ejercicio Saludos y Horas

// Preguntamos la hora

var hora = prompt("Que hora es?");

// Si la hora es una Nan (letras), lanza true, y lanza el primer alert.
// Si no, pasamos a la siguiente condicion.

if (isNaN(hora)){
    alert("Dime la hora!!");
} else {
    if (hora <= 12){
        // Si la hora es menor o igual a 12, se cumple (true) y da el alert.Si da false, pasa a la siguiente condicion.
        alert('Buenos dias!');
    } else if(hora > 12 && hora <= 18) {
        //Si no, si la hora es mayor de 12 y menor o igual a 18, se cumple (true) y da el alert. Si da false, pasa a la siguiente condicion.
        alert('Buenas tardes!');
    } else {
        // Si no cumple ninguna de las anteriores, se hace por ultimo este alert.
        alert('Buenas noches!');
    }
}

// Switch

var edad = parseInt(prompt('Que edad tienes?'));

//Para que switch funcione, necesita un true en la expresion a evaluar. Cuando lo tiene, es en cuando entra en los case y sus condiciones.

switch(true){
    case (edad>10&&edad<20):
        alert('Tienes una franja entre 10 y 20 años');
        break;
    case 20:
        alert('Tienes mas de 20 años');
        break;
    case (isNaN(edad)):
        alert('Escribe en numeros!');
    default:
        franja = 'Sin franja';
        break;
}


