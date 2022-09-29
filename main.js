// ¿Cómo sabemos que necesitamos un bucle aquí? Necesitamos un bucle porque se nos puso una condición de que algo se haga repetidamente hasta que suceda determinada cosa y para poder hacerlo es necesario hacer un bucle
// ¿Cuál es el punto de partida del bucle? El punto de partida es 0km ya que al iniciar empieza en esa distancia. 
// ¿Cuándo debe detenerse el bucle? Debe detenerse cuando se cumpla la condición estipulada, dejar de dar camelos en el kilometro 10.
// ¿Cómo sabrá parar? cuando se cumpla la condición.
// ¿Cuál es el incremento para cada iteración del bucle? El incremento es de la distancia.
// ¿Qué variables necesitamos? La variable distancia.

var distancia = 0;
while (distancia <= 10) {
    if (distancia > 2 ){
        console.log ('Tomá un caramelo');
    }
    distancia=distancia + 3;
}

var distancia = 0;
var velocidad = 9;

while (distancia <= 10 && velocidad >= 9); {
    console.log ('Entregar caramelo')
}