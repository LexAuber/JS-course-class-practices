
// Funciones:

// Estructura de una funcion, y como llamarla para que funcione:

function saludar(){
    alert('Buenos dias!');
}

saludar();


// Funcion con variacion de parametros:

function saludar(nom){
    alert('Buenos dias ' + nom);
}

var nomUsuario = prompt('Cual es tu nombre?');
saludar(nomUsuario);

// Ejercicio de funciones: 

Declaramos la funcion numeros con 2 parametros, primero y segundo. Hacemos la condicion, si primero es mayor que segundo, primer alert, si no, segundo alert. Finalizamos la funcion, hacemos dos prompt para declarar los valores y la funcion las asignara a los parametros de la funcion y la llamamos al final.


function comparacion(primero,segundo){
    if(primero>segundo){
        alert(primero + ' es mas grande que '+ segundo);
    } else {
        alert(primero + ' es mas pequeño que ' + segundo);
    }
}

valor1 = parseInt(prompt('Dime un numero'));
valor2 = parseInt(prompt('Dime otro numero'));

comparacion(valor1,valor2);

// Funcion con return:

//Esto sirve para que el resultado de la funcion, se pueda utilizar en otras funciones o condiciones, y para ello lo guardamos en una variable.

function producte(param1, param2){
    return param1*param2;
}

var num1 = producte(8,9);
var num2 = producte(6,8);

alert('el valor de la primera multiplicacio es ' + num1 + ' el de la segona es ' + num2);

//Una funcion, puede devolver mas de un return y hacer mas operaciones.


