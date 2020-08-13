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
