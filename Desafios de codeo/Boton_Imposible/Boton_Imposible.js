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

// var username = prompt("Ingrese nombre de usuario.");
// var password = prompt("Ingrese contraseña.");
// var respuesta = esContraseñaValida(password,username);
// if (respuesta){
//     console.log("Contraseña válida.");
// } else {
//     while (respuesta === false){
//         console.log("La contraseña ingresada es inválida")
//         username = prompt("Ingrese nombre de usuario.");
//         password = prompt("Ingrese contraseña.");
//         respuesta = esContraseñaValida(password,username);
//     }
//     console.log("Contraseña válida.");
// }

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

//obtenerCartaRandom();

/*---------------------------------------------------------------------------------------------*/

//Obtener "mazo de cartas". Una funcion que me devuelve un conjunto de cartas al azar.
//Ejemplo:
/*
makeDeck(){
    [
        {value: 5, suit: "hearts"}
    ]
}

Tambien quiero que tenga diferente funcionalidad para mi mazo,
¿Que pasa si quiero sacar una sola carta a la vez?
¿O quizas quiero una pila de descarte?
¿una vez que saco una carta podemos ponerla en el discard pile(pila de descarte)?
Entonces nuestro mazo se iria achicando mientras que la pila de descarte tendra todas las cartas que previamente descarte.
O puedo implementar una mezcla, de manera que pueda mezclar el mazo.
O puedo querer rellenar el mazo, empezar desde el principio.
*/
var pilaDescarte = [];
var manoDeCartas = [];

function hacerMazo(palos, valores){
    let mazo = [];
    for (let i = 0; i< palos.length; i++){
        for(let j = 0; j < valores.length; j++) {
            let carta = new Carta(valores[j], palos[i]);
            mazo.push(carta);
        }
    }
    return mazo;
}

let mazo = hacerMazo(palos,valores);
console.log('Mazo sin mezclar: ');
console.log(mazo);

function sacarCartaMazoAlAzar(mazo, mano){
    const idxRandom = Math.floor(Math.random() * mazo.length);
    let cartaRandom = mazo[idxRandom];
    mano.push(cartaRandom);
    mazo.splice(idxRandom, 1);
    return cartaRandom;
}

function sacarCartaMazo(mazo,mano){
    const idx = mazo.length-1;
    let carta = mazo[idx];
    mano.push(carta);
    mazo.splice(idx, 1);
    return carta;
}

function sacarMultiplesCartas(numero, mazo, mano){
    let cartas = [];
    while(numero !== 0){
        cartas.push(sacarCartaMazo(mazo, mano));
    }
    return cartas;
}

function descartarUltCarta(mano, pilaDescarte){
    let carta = mano.pop()
    pilaDescarte.push(carta);
}
//FALTARIA descartar carta determinada. IMPORTANTE

function mezclarMazo(mazo) {
    var indexActual = mazo.length, valorTemp, randomIndex;
  
    // Mientras queden cartas para mezclar:
    while (0 !== indexActual) {
  
      //Selecciona una carta al azar sin mezclar:
      randomIndex = Math.floor(Math.random() * indexActual);
      indexActual -= 1;
  
      //Se intercambia la carta random con el elemento actual:
      valorTemp = mazo[indexActual];
      mazo[indexActual] = mazo[randomIndex];
      mazo[randomIndex] = valorTemp;
    }
  
    return mazo;
}


function rellenarMazo2(mazo, pilaDescarte){ 
    let indx = pilaDescarte.length;
    while (indx !== 0){
        mazo.push(pilaDescarte[indx-1]);
        pilaDescarte.pop();
        indx--;
    }
    return mazo
}

function vaciarPilaDesc(pilaDescarte){
    pilaDescarte = [];
    return pilaDescarte;
}

/*--------------------------------------------------------------*/
const btn = document.querySelector("button");

// btn.addEventListener("mouseover", function(){
//     console.log("El mouse ha pasado por arriba mio");
//     //El tema con definir los valores asi de manera azaroza es que esto puede variar dependiendo de la cantidad de pixeles del usuario
//     btn.style.left="200px";
//     btn.style.top="100px";
//     //Hay miles de maneras de acceder al tamaño de la pantalla que pueden variar dependiendo del tipo y version del browser. 
// });

//Si yo hago lo siguiente:
//console.log(window.screen);
//veremos que en screen hay dos atributos: avaiHeight y avaiWidth, que son las dimensiones maximas de mi pantalla actual. 
//Pero no son las dimensones de mi browser window y el problema es que puede que tenga la ventana completa, pero tambien puede tener la ventana
//mas chica y quiero que funcione igual, por lo que existe otra manera:
console.log(window.innerHeight);
console.log(window.innerWidth);
//Entonces utilizaremos estos para calcular a donde moveremos el boton.

btn.addEventListener("mouseover", function(){
    console.log("El mouse ha pasado por arriba mio");
    const height = Math.floor(Math.random()*window.innerHeight);
    const width = Math.floor(Math.random()*window.innerWidth);
    btn.style.left=`${width}px`;
    btn.style.top=`${height}px`;
});

btn.addEventListener("click", function(){
    btn.innerText = "Me has atrapado!";
    document.body.style.backgroundColor = "green";
})