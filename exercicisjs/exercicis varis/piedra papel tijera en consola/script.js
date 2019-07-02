
//Pequeño ejercicio de Piedra papel tijeras lagarto y spock.

// Ejercicio realizado por Javier Muñiz via Youtube: https://www.youtube.com/watch?v=BjDZFfBWQ-0&t=57s

/* 
    1. Para que os hagais una idea de como funciona, lo primero que hacemos para iniciar toda la parafernalia es poner un indicador o un "sensor" como diria en scratch.

    2. En este caso, el sensor se coloca en el HTML, siendo este un boton, tambien se puede hacer directamente a traves del archivo de JS haciendo un "prompt" que es una ventana PopUp con una pregunta y una caja de texto para recojida de datos, y añadirlos posteriormente a una variable.

    3. Aqui lo hacemos via botones y mediante el "onclick", que en Javascript se traduce a 'cuando se clica...', entonces le añadimos al boton un valor, sea cual sea, este se quedara como "variable" guardada para posteriores operaciones. 

    4. En la funcion realizamos 3 variables mas con diferentes opciones dentro, que dependeran de los resultados. Var resultado con empate, pierdes y ganas. Var con los nombres, piedra, papel, tijeras, lagarto y spock. Y por ultimo, darle logica con Var jugada.

    5. Aplicamos a Var jugada, un calculo o codificacion via tabla, es decir:
      
       0| 1| 2| 3| 4
      __|__|__|__|__
    0| 0  1  2  2  1
    1| 2  0  1  1  2
    2| 1  2  0  2  1
    3| 1  2  1  0  2
    4| 2  1  2  1  0

    Numeros de fuera de la tabla:

    0 = Piedra
    1 = Papel
    2 = Tijeras
    3 = Lagarto
    4 = Spock

    Numeros dentro de la tabla: 

    0 = Empate
    1 = Ganas
    2 = Pierdes

    6. Creamos una variable "cpu" para que la maquina juege y eliga un numero aleatorio entre 0 y 4, en JavaScript el 0 es un numero elegible asi que se hara a partir de 5 numeros aleatorios.

    7.
*/ 


function opcion(humano){

    var resultado_texto = ["empate!", "ganas!", "pierdes!"];
    var nombre = ["Piedra", "Papel", "Tijeras", "Lagarto", "Spock"];
    var jugada =[
                [0,1,2,2,1],
                [2,0,1,1,2],
                [1,2,0,2,1],
                [1,2,1,0,2],
                [2,1,2,1,0],
                ];

    desc_jugada = [
                  ['Iguales', 'Papel tapa a piedra', 'Piedra rompe tijeras', 'Piedra aplasta lagarto', 'Spock vaporiza piedra'],
                  ['Papel tapa a piedra','Iguales', 'Tijeras cortan papel', 'Lagarto devora papel', 'Papel desautoriza a Spock'],
                  ['Piedra rompe tijeras', 'Tijeras cortan papel','Iguales', 'Tijeras decapitan lagarto', 'Spock rompe tijeras'],
                  ['Piedra aplasta lagarto', 'Lagarto devora papel', 'Tijeras decapitan lagarto', 'Iguales', 'Lagarto envenena a Spock'],
                  ['Spock vaporiza piedra', 'Papel desautoriza a Spock', 'Spock rompe tijeras', 'Lagarto envenena a Spock', 'Iguales']
                  ]
    var cpu = Math.floor((Math.random() * 5));

    var resultado = jugada [cpu][humano];
    
    console.log("HUMANO: " + nombre[humano]);
    console.log("CPU: " + nombre[cpu]);
    console.log(desc_jugada[cpu][humano]);
    console.log(resultado_texto[resultado]);
}