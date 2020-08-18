/*escribir una funcion esContraseñaValida
Acepta 2 argumentos: password y username
La password debe tener:
    al menos 8 caracteres
    no puede contener espacios
    no puede contener el usuario.
Si todos los requerimientos se cumplen, retorna true sino false.active

*/

function esContraseñaValida (password, username){
    if (password.length >= 8){
        if(password.includes(username)){
            return false;
        } else {
            if(password.includes(' ')){
                return false;
            }else{
                return true;
            }
        }
    }else{
        return false;
    }
};

var username = prompt("Ingrese nombre de usuario.");
var password = prompt("Ingrese contraseña.");
var respuesta = esContraseñaValida(password,username);
if (respuesta){
    console.log("Contraseña válida.");
} else {
    while (respuesta === false){
        console.log("La contraseña ingresada es inválida")
        username = prompt("Ingrese nombre de usuario.");
        password = prompt("Ingrese contraseña.");
        respuesta = esContraseñaValida(password,username);
    }
    console.log("Contraseña válida.");
}

/* Escribir una funcion getard() que retorne una carta de juego random como:
{ valor: K,
  palo: 'picas'
}

palo: picas, corazones, treboles y rombos
valores: A,2,3,4,...,10,J,Q,K
Obtener un valor random y un palo random y colocarlo en un objeto.
*/

var palos = ["Picas", "Corazones", "Treboles", "Rombos"];
var valores = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];

function obtenerPaloRandom(){
    var randomPalo = Math.floor(Math.random() * palos.length);
    return palos[randomPalo];
}

function obtenerValorRandom(){
    var randomValor = Math.floor(Math.random() * valores.length);
    return valores[randomValor];
}

var Carta = function(valor, palo){
    this.valor = valor;
    this.palo = palo;
  }

function obtenerCartaRandom(){
    var paloRandom = obtenerPaloRandom();
    var valorRandom = obtenerValorRandom();
    var cartaRandom = new Carta(valorRandom, paloRandom);
    console.log(cartaRandom);
}

obtenerCartaRandom();

/*---------------------------------------------------------------------------------------------*/

//Obtener "mazo de cartas". Una funcion que me devuelve un conjunto de cartas al azar.
//Ejemplo:
/*
makeDeck(){
    [
        {value: 5, suit: "hearts"}
    ]
}

Tambien quiero que tenga diferente funcionalidad para mi mazo, ¿Que pasa si quiero sacar una sola carta a la vez?
¿O quizas quiero una pila de descarte? ¿una vez que saco una carta podemos ponerla en el discard pile(pila de descarte)?
Entonces nuestro mazo se iria achicando mientras que la pila de descarte tendra todas las cartas que previamente descarte.
O puedo implementar una mezcla, de manera que pueda mezclar el mazo. O puedo querer rellenar el deck, empezar desde el principio.
*/

function hacerMazo(palos, valores){
    let mazo = [];
    for (let i = 0; i< palos.length; i++){
        for(let j = 0; j < valores.length; j++) {
            let carta = new Carta(valores[i], palos[i]);
            mazo.push(carta);
        }
    }
    return mazo;
}

hacerMazo(palos,valores)