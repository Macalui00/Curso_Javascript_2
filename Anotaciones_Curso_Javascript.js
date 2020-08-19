//Para correr codigo una vez que el boton es cliqueado, primeri tenemos que empezar por seleccionarlo:
const btn = document.querySelector('button');
//Le pasa el string button que seleccionará el boton por mi. 

function grumpus(){
    alert("GAAH GO AWAY!");
}

//Ahora la manera en la que corro codigo cuando cliqueamos botones es llamando al metodo addEventListener()
//btn.addEventListener('click', grumpus);

//Pero tambien puedo utilizar una funcion anonima:
btn.addEventListener('click', function(){
    alert("WHY DID YOU CLICK ME!!!??")
});

/*------------------------------------------------------------*/

const nums = [9,8,7,6,5,4,3,2,1];

//Usando una funcion anonima:
nums.forEach(function (n){ //n representa el elemento del array
    console.log(n*n) //Muestra cada elemento del array
});

nums.forEach(function (el){//el representa el elemento del array
    if (el % 2 === 0) { //Muestra solo los elementos pares
        console.log(el)
    }
});

function printTriple(n){
    console.log(n*3);
}

//Usando una funcion predefinida:
nums.forEach(printTriple);

//Usando el index:
nums.forEach(function (num, idx) {
    console.log(idx, num);
  });

//realizando un caso más complejo donde utilizamos un array de objetos:
const books = [{
    title: 'Good Omens',
    authors: ['Terry Pratchett', 'Neil Gaiman'],
    rating: 4.25,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'Changing My Mind',
    authors: ['Zadie Smith'],
    rating: 3.83,
    genres: ['nonfiction', 'essays']
  },
  {
    title: 'Bone: The Complete Edition',
    authors: ['Jeff Smith'],
    rating: 4.42,
    genres: ['fiction', 'graphic novel', 'fantasy']
  },
  {
    title: 'American Gods',
    authors: ['Neil Gaiman'],
    rating: 4.11,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'A Gentleman in Moscow',
    authors: ['Amor Towles'],
    rating: 4.36,
    genres: ['fiction', 'historical fiction']
  },
  {
    title: 'The Name of the Wind',
    authors: ['Patrick Rothfuss'],
    rating: 4.54,
    genres: ['fiction', 'fantasy']
  },
  {
    title: 'The Overstory',
    authors: ['Richard Powers'],
    rating: 4.19,
    genres: ['fiction', 'short stories']
  },
  {
    title: 'The Way of Kings',
    authors: ['Brandon Sanderson'],
    rating: 4.65,
    genres: ['fantasy', 'epic']
  },
  {
    title: 'Lord of the flies',
    authors: ['William Golding'],
    rating: 3.67,
    genres: ['fiction']
  }
]

//Supongamos que quiero imprimir el titulo de cada libro:
books.forEach(function(book){
    console.log(book.title.toUpperCase());
});

//Puedo hacer exactamente lo mismo con un for:
for(let book of books){
    console.log(book.title.toUpperCase());
}

//Son diferentes mas alla de su sintaxis, porque el primero tiene una funcion y el segundo es simplemente un bloque. 

//un for loop regular:
for(let i = 0; i < books.length; i++){
    console.log(books[i].title.toUpperCase());
}

//Pero obviamente la mejor manera es la del forEach, ya que me olvido de los index.
const numbers = [20,21,22,23,24,25,26,27];
//Hay otra cosa más que hay que saber del forEach. Tambien podemos agregar un segundo parametro a nuestro callback
//si queremos usar el index.
numbers.forEach(function(num, idx){
    console.log(idx, num);
});

/*------------------------------------------------------------*/

const texts = ['guau', 'mmm', 'ooh', 'grr'];
const caps = texts.map(function(t){
    return t.toUpperCase();
});
texts;
caps;

//const numbers = [20,21,22,23,24,25,26,27];
const words = ['asap', 'byob', 'rsvp', 'diy'];

const doubles = numbers.map(function(num){
    return num * 2;
});

//Si a la funcion le quito el return:
//const doubles = numbers.map(function(num){
//    num * 2; //Hay 8 elementos en el array y cada iteracion nada es retornado, y cuando una funcion no retorna nada:
//});          //el valor que obtenes es undefined

//Por lo que crea un array de 8 undefined.
//Por lo que si es sumamente necesario el return dentro de la funcion anonima. 

const numDetail = numbers.map(function(n){
    return {
        value: n,
        isEven: n % 2 === 0 //Si es par retorna true, caso contrario false.
    }
});

console.log(numDetail);
//Para el caso de la lista de palabras, lo que quiero es que me retorne todas las letras en mayuscula separadas por puntos. 

//Supongamos que queremos hacer estas cosas pero no con maps sino manualmente con un loop for:
const doubles2 = []; //array de resultados
for(let num of numbers){
    doubles2.push(num * 2)
}

const abbrevs = words.map(function(word){
    //Para poder obtener las palabras en mayusculas y puntos:
    //usamos el uppercase, y para los puntos usamos el split para separar las letras dentro de un array
    //El join une los elementos de un array en este caso con un . entre medio:
    return word.toUpperCase().split('').join('.');
});

console.log(abbrevs)

//Recordar que el foreach es similar pero no vamos a crear un array con esos valores
//For each es como la mitad del map, llama a una funcion en cada elemento pero no los almacena en un array.
//No retorna un nuevo array. En cambio, el map si. 

//utilicemos el array books

const titles = books.map(function(b){
    return b.title;
});

console.log(titles);

/*--------------------------------------------------------- */
//const square = function (x){
//    return x*x;
//}

//const square = (x) =>{
//    return x * x;
//}

const isEven = (num) => {
    return num % 2 === 0;
}

const multiply = (x,y) => {
    return x * y;
}

/*------------------------------------------------------ */
//esta funcion consiste en una simple expresion que estamos retornando
/*No estamos haciendo ninguna otra logica primero que el retorno, no estamos creando una variables
No estamos agregando un condicional, Simplemente retornando una expresion
EN ESCENARIOS DONDE TENEMOS SOLO UNA EXPRESION QUE RETORNAR PODEMOS REESCRIBIR LA ARROW FUNCTION USANDO PARENTESIS EN VEZ DE LLAVES {}
Y SI HACES ESO, PUEDES DEJAR AFUERA LA PALABRA CLAVE RETURN
*/

//const square = n => {
//    return n * n;
//}

//REESCRIBIMOS SQUARE:
//const square = n => (
//    n*n
//)

//Puedo hacer esto incluso mas corto, lo podemos poner en una sola linea. 
//Podemos hacerlo en escenarios donde esto encaje y tenga sentido ponerlo todo en una linea. +
//Le quitamos los parentesis:

const square = n => n * n;

//Esto no significa que podamos meter todo en una linea... Si es super
//largo, si es dificil de leer, ponele los parentesis y en una nueva linea escribis la sentencia. 

//Ejemplos de donde pueden ser muy utiles es para todas esas funciones de callback que utilzamos para
//metodos de los arrays, for each, maps.

const nums2 = [1,2,3,4,5,6,7,8];

//supongamos que quiero duplicar cada numero y ponerlo en un nuevo array, utilizando map

const dobles1 = nums2.map(function (n){
    return n * 2;
})

//Usando arrow functions

const dobles2 = nums2.map(n => {return n *2})

//Se puede hacer de manera incluso mas simple:

const dobles3 = nums2.map (n => n *2)

console.log(dobles1)
console.log(dobles2)
console.log(dobles3)

//Parity es el termino utilizado para referirse si un numero es even o odd (par o impar)

//const parityList = nums2.map(function (n){
//    if (n % 2  === 0) return "even";
//        return "odd";
//});

//Reescribamos esto con un arrow function

//const parityList = nums2.map((n)=>{
//    if (n % 2  === 0) return "even";
//        return "odd";
//});

//Pero si quisiera hacer un retorno implicito no podria, al menos no con esta version. 
//Aqui tenemos multiples expresiones. 

//Podriamos reescribirlo de la siguiente manera

//const parityList = nums2.map((n)=>(
//    n % 2 === 0 ? "even" : "odd"
//));

//e incluso con esta forma podemos escribirlo en una linea:

const parityList = nums2.map((n)=> n % 2 === 0 ? "even" : "odd");
console.log(parityList)

//Aunque es un poco larga. 

/*--------------------------------------------------------------------------------------*/

let movies = [
    "The Fantastic Four",
    "The Avengers",
    "Dr. Strange",
    "Captain America"
];

let movie = movies.find(movie => {
    return movie.includes("Dr.")
});
console.log(movie);

let movie2 = movies.find(m => m.indexOf("The") === 0);
console.log(movie2);

//VOLVAMOS A USAR EL ARRAY DE LIBROS. 
const buenLibro = books.find(b => b.rating >= 4.3);
console.log(buenLibro);

const libroNeil = books.find(b => b.authors.includes("Neil Gaiman"));
console.log(libroNeil);

/*-------------------------------------------------------------------------------*/

const nums3 = [9,8,7,6,5,4,3,2,1];

const odds = nums3.filter(n => {
    return n % 2 === 1; //Nuestra funcion callback retorna verdadero o falso 
});

const smallNums = nums3.filter(n => n < 5);

console.log(odds, smallNums);

const buenosLibros = books.filter(b => b.rating > 4.3)
console.log(buenosLibros);

const librosFantasticos = books.filter(book =>( 
    book.genres.includes("fantasy")
));

const shortForm = books.filter( book => (
    book.genres.includes("short stories") ||
    book.genres.includes("essays")
));

console.log(librosFantasticos, shortForm);

const query = 'The';
const results1 = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
});

console.log(results1);

/*-----------------------------------------------------------------------------------------------------*/

const palabras = ["dog", "pig", "log", "bag", "wag"];

const palab3Let = palabras.every(word =>{
    return word.length === 3; //Si todas las palabras tienen 3 letras: true
})

const empConD = palabras.every(word => word[0] === 'd'); //Si cada palabra empieza con una "d": retorna false

const termConG = palabras.every(w => {
    let last_letter = w[w.length - 1]; 
    return last_letter === "g"; //Si cada palabra termina con una "g": true
});

console.log(palab3Let, empConD, termConG);


const palabras2 = ["dog", "jello", "log", "cupcake", "bag", "wag"];
            
const tamañoMayor4 = palabras2.some(word => {
    return word.length > 4;
})

const empConZ = palabras2.some(word => word[0] === "Z");

const incluyCake = palabras2.some(w => w.includes("cake"));

console.log(tamañoMayor4, empConZ, incluyCake);

/*------------------------------------------------------------------------------- */
//para corregir el problema es que restamos dos elementos del array y dependiendo de si el resultado es:
//Positivo o negativo o 0 decidimos que se hace:
const precios = [500.00, 450.50, 34.00, 12.99, 55.90];
const ordAscen = precios.slice().sort((a,b) => a - b);
const ordDesc = precios.slice().sort((a,b) => b - a);

console.log(ordAscen, ordDesc, precios);

/*-------------------------------------------------------------------------------------- */

const numeros = [3,4,5,6,7];
nums.reduce((total, currentVal) => {
    return total * currentVal;
})

console.log(numeros);

const grados = [87,64,97,92,74,65,90,89,88];

//const maxGrado = grados.reduce((max, currentValue) => {
//    if (currentValue > max) return currentValue;
//    return max;
//});

//Hay otras maneras de hacer lo mismo que hicimos arriba:

//utilizando Math.max()
const maxGrado = grados.reduce((max, currentValue) => {
    return Math.max(max, currentValue);
});

console.log(maxGrado);

const minGrado = grados.reduce((min, currentValue) => {
    return Math.min(min, currentValue);
});

console.log(minGrado);

const sumaRes = [10,20,30,40,50].reduce((sum,currentVal)=>{
    return sum + currentVal;
});
console.log(sumaRes);

const sumaRes2 = [10,20,30,40,50].reduce((sum,currentVal)=>{
    return sum + currentVal;
},100);
console.log(sumaRes2);

const votos = ["y", "n","y","y","n","y","n","n","n","y","n"];

//Vamos a usar reduce para obtener un objeto con la cantidad de yes y la cantidad de no

//const resulVot = votos.reduce((tally, val) =>{
//    if (tally[val]){ //si tally of val existe
//       tally[val]++ //acumulo
//    } else { //caso contrario
//        tally[val] = 1; //le asigno el valor 1 
//    }
//    return tally
//}, {})

//otra manera de escribir lo mismo:

const resulVot = votos.reduce((tally, val) =>{
    tally[val] = (tally[val] || 0) + 1;
    return tally;
}, {});

console.log(resulVot);

/*----------------------------------------------------------- */

const greet = (person, greeting = "hi") => {
    console.log(greeting + ", " + person + "!");
}

const blah = (x,y = [1,2,3] )=>{
    console.log(x,y);
};

const greet2 = (person, greeting = 'hi', punctuation = '!') =>{
    console.log(`${greeting}, ${person}${punctuation}`);
}

//Esto funcionara si pongo los tres parametros pero no funcionara si pongo por ejemplo:
//greet2("maria", "?")

/*-------------------------------------------------------------------------------*/

//En el ejemplo pasamos
const numsEj = [9,3,2,8];
Math.max(numsEj); //NaN, no funciona con un array. 

//usando spread:
Math.max(...numsEj); //9
//Seria lo mismo que llamar:
//Math.max(9,3,2,8)

function giveMeFour(a,b,c,d){
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    console.log("d",d);
}

//Si yo pongo en consola lo siguiente:
//giveMeFour(2,3,4,5)

//Y luego pongo lo siguiente:
const colors = ["red", "yellow", "blue", "green"];
//giveMeFour(colors)
//Me asignara todo el array al a. 

//Para que me asigne cada color a una variable diferente:
//giveMeFour(...colors)

//Esto no es solo aplicable a arrays, tambien pueden ser strings

/*----------------------------------------------------------------------------------------------------*/

function sumAll(){
    let total = 0;
    for (let i = 0; i < arguments.lenght; i++){
        total += arguments[i];
    }
    return total;
}

//console.log(sumAll(8,4,3,2)); //17
//console.log(sumAll(2,3)); //5


//function sum(){
//    const argsArr = [...arguments] //recordar que arguments no es un array, para que sea un array y poder usar reduce, lo convierto. 
//    return argsArr.reduce((total, currVal)=>{
//        return total + currVal;
//    })
//}

//Puedo ver los argumentos en funciones:
function sumar(){
    console.log(arguments)
}

sumar();

//function fullName(first, last){
//    console.log(arguments);
//    console.log(first);
//}

//Esto lo puedo hacer y me retorna por consola los argumentos y el nombre:
fullName("Julia", "Gimenez", "La más grosa");

//Pero con arrow functions no puedo ver los argumentos:
//const multiplicar = () =>{
//    console.log(arguments); //Arguments is not defined
//}

//Arguments contiene o colecta todos los argumentos que uno le pasa a la funcion

/*-----------------------------------------------------------------------------------------------*/

//Funcion suma pero con REST:

function sum(...nums){
    return nums.reduce((total, currVal) => {
        return total + currVal
    })
}

//No solo podemos usarlo de esta manera, podemos usarlo para recolectar los argumentos restantes, los que no han matcheado con el parametro:

function fullName(first, last, ...titles){
    console.log("first", first);
    console.log("last", last);
    console.log("titles", titles);
}

//El orden en el que ponemos los parametros importa, no podemos poner la lista de argumentos antes de algun argumento esperado, ni podemos poner dos listas de argumentos rest

//La otra cosa es que podemos usarlo en un arrow function

const multiplicar = (...nums) =>(
    nums.reduce((total, currVal) => (//Primer retorno implicito
        total * currVal //Segundo retorno implicito
    )) 
)

/*---------------------------------------------------------------------------------------------------------------------------*/

//Si quisiera crear variables para los primeros tres elementos de la siguiente lista de puestos de una carrera:

const raceResults = [
    "Elena Rey",
    "Esmeralda Solis",
    "Susana Aguirre",
    "Osvaldo Gutierrez",
    "Juan Jose Campanela",
    "Florencia Otero"
]

//Y quiero armar una variable llamada gold... 
//const gold = raceResults[0]
//const silver = raceResults[1]
//const bronce = raceResults[2]

//esa fue una manera pero hay otra mejor:
//pongo los nombres de las variables en un array
const [gold, silver, bronze] = raceResults;

//Supongamos que quiero solamente el primer y el cuarto puesto:
const[first, , , fourth] = raceResults; //agrego comas en el medio para indicarle que elemento del array quiero. 

//Podemos usar el rest para colectar el resto de los elementos dentro de una nueva variable array
const [winner, ...others] = raceResults;

//Destructuring objets:

const runner = {
    first: "Sara",
    last: "Parker",
    country: "Argentina",
    title: "El salto a la victoria"
}

//supongamos que queremos crear variables para el nombre y apellido:
//declaro las variables entre {} como si fuera un objeto y le pongo el nombre de los atributos que deseo obtener:
//const {first,last} = runner; //con esto almacenamos los atributos en variables del mismo nombre
//
//console.log(first, last);

//si le agrego una variable que no esta dentro del objeto, se creara como undefined:
//const {first, last, time} = runner; //time undefined

//Para almacenar atributos en variables de distinto nombre:
const {country: nation, title: honorific} = runner;

console.log(nation, honorific);

//podemos usar el operador REST: puedo obtener una o varias variable y el resto almacenarlas dentro de una nueva variable:
const {nombre, apellido, ...other} = runner;
console.log(other);

const results = [{
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: 'Feyisa',
    last: 'Lilesa',
    country: 'Ethiopia'
  },
  {
    first: 'Galen',
    last: 'Rupp',
    country: 'United States'
  }
];

//const [,{country}] = results;

//const [{first: goldWinner},{country}] = results;

//esto es un ejemplo de como combinar las cosas con nested pero no es muy recomendable. 

//seria mejor:
const [,silverMedal] = results;
const {country: pais} = silverMedal;
//esto es claramente mejor para leer. 

//Params destructuring

// function print(person){
//     const {first,last,title} = person; //Desestructuro el objeto aca
//     console.log(`${first} ${last}, ${title}`)    
// }

//puedo hacerlo de otra manera

function print({first,last, title}){ //lo desestructuro directamente en los parametros. 
    console.log(`${first} ${last}, ${title}`)    
}
//esto es para los objetos pero podemos hacer lo mismo para los arrays.. 

const response = [
    "HTTP/1.1",
    "200 OK",
    "aplication/json"
]

function parseResponse([protocol, statusCode, contentType]){
    console.log(`Status: ${statusCode}`)
}

/*-----------------------------------------------------------------------*/

// const getStats = (arr) => { //Paso un array y calculo: 
//     const max = Math.max(...arr); //el maximo del array
//     const min = Math.min(...arr); //el minimo del array
//     const sum = arr.reduce((sum, r) => sum + r); //La suma del array
//     const avg = sum / arr.length; //el promedio del array

//     //Lo que quiero hacer es retornar un objeto que contenga todsas estas variables:

//     return {
//         max: max,
//         min: min,
//         sum: sum,
//         avg: avg
//     }
// }

//Pero con el shortand sintax lo que vamos hacer es lo siguiente:


const getStats = (arr) => { //Paso un array y calculo: 
    const max = Math.max(...arr); //el maximo del array
    const min = Math.min(...arr); //el minimo del array
    const sum = arr.reduce((sum, r) => sum + r); //La suma del array
    const avg = sum / arr.length; //el promedio del array

    //Lo que quiero hacer es retornar un objeto que contenga todsas estas variables:

    return { //Esto crea el key name y el valor para cada uno
        max,
        min,
        sum,
        avg
    }
}

const reviews = [4.5,5.0, 3.44,2.8, 3.5, 4.0,3.5];

const stats = getStats(reviews);

/*-----------------------------------------------------------------------------------------*/

const role = "host";
const person = "Julia Ermidez";

//Por ejemplo, quiero un objeto que tenga una clave seteada con el nombre role y que el valor de la misma sea el de persona. 

//Si hago mi objeto:
// const team = {
//     role: person //No es lo que queremos porque role se convierte en una cadena y no se verifica si corresponde a una variable 
// }

//Lo que hicimos anteriormente, para poder hacer que esto funcione si queremos un valor dinamico para esta variable:
//const team = {}
//Antes de inicializar el objeto:
// team[role] = person;
//Ahora si miramos en la consola tendremos Host seteada con el nombre de la persona. 

//Y digamos que tenemos un concepto mas de role
const role2 = "Director";
const person2 = "James Cameron";

// team[role2] = person2;

//ahora tenemos dos propiedades con claves dinamicas y tenemos que usar el [] como hemos visto. 
//Si intentas utilizar el dot notation team.role = person; solo estas añadiendo la clave de role

//Pero ahora con esta nueva sintaxis de computed properties podemos hacer todo de una. 

const team = {
    [role] : person,
    [role2]: person2,
    [1+6+9]: "sixteen"
}

//Creemos una funcion que acepte un objeto y retorne una copia de este objeto con una nueva propiedad adquirida
// function addProp(obj, k, v){
//     const copy = {
//         ...obj
//     };
//     copy[k] = v;
//     return copy;
// }

// const res = addProp(team, "happy", ":)")

//Podemos hacer la misma funcion con un arrow function:

// const addProp = (obj, k, v) => {
//     return {
//         ...obj,
//         [k] : v
//     }
// }

//A modo de bonus, intentando hacer la arrow function en una linea
//const addProp = (obj, k, v) => { ...obj, [k]: v } //El problema con esto es que si lo dejamos asi
//Javascrip confunde las {} del objeto con las {} que se usan para las funciones, por ende, hay que ponerle () fuera

const addProp = (obj, k, v) => ({ ...obj, [k]: v })

const res = addProp(team, "happy", ":)")
/*--------------------------------------------------------------------------------------------- */

//Puedo hacer cosas como esto:

// const multiply = function (x,y) {
//     return x*y;
// }

// const math = {
//     multiply //coloco solo la palabra multiply
// }

//Si pongo en consola el objeto veremos que señala que tiene como propiedad esta funcion

//Y si la quiero llamar, solo tengo que usar el dot notation:
//math.multiply(3,2);

//Es la misma funcion pero accediendo de manera diferente
//Esto es muy poco comun a la hora de definir metodos. 

const math = {
    multiply: function (x,y) {
        return x*y;
    },
    divide: function(x,y) {
        return x / y;
    },
    square: function(x){
        return x*x;
    }
}

/*-----------------------------------------------------------------------*/
const auth = {
    username: "TommyBot",
    login: () =>{ //SI hacemos un arrow functio tenemos que realizarla de esta manera
        console.log("Hola");
    },
    // login(){  //Cuando con funciones normales podemos hacer esto. 
    //     console.log("Logged you in!");
    // },
    logout(){
        console.log("Goodbye!");
    }
}

/*------------------------------------------------------------------------------- */

//El objeto al que señala puede variar, hay que tener en cuenta esto

function sayHi(){
    console.log("HI");
    console.log(this); //This es un objeto y se refiere al corriente ambiente de ejecucion (current execution scope)
    //Refiere a window (global scope object en el browser). 
}

sayHi(); //Objeto llamado window

const persona = {
    first: "Cherilyn",
    last: "Sarkisian",
    nickName: "Cher",
    // fullName (){
    //     console.log(this); //Señala a este mismo objeto. 
    // }

    //Podemos hacer esto tambien:
    // fullName (){
    //     console.log(`${this.first} ${this.last} AKA ${this.nickName}`);
    // }

    //O tambien:
    // fullName (){
    //     const {first,last,nickName} = this;
    //     console.log(`${first} ${last} AKA ${nickName}`);
    // }

    //Otro pequeño ejemplo:
    fullName (){
        const {first,last,nickName} = this;
        return `${first} ${last} AKA ${nickName}`;
    },
    printBio(){
        console.log(this);
        //fullName(); //Asi tal cual no funciona, tengo que usar el this
        const fullName = this.fullName(); //Uso this para referenciar al objeto. 
        console.log(`${fullName} is a person!`)
    }
}

//const printBio = persona.printBio; //si ejeucto printBio veré que esta señalando a window

//Hay que tener en cuenta algo que es una diferencia entre arrow function y funciones normales:
//La funcion arrow independientemente de como se llame, si con persona.arrow() o arrow() su valor no cambiará
//Hará siempre referencia a window
//Esta es una de las razones por las cuales nunca usamos arrow functions como metodos

/*---------------------------------------------------------------------------------------------------*/
//The Annoyomatic Demo: Cada 5 segundo imprima de manera random alguna de estas frases en la pantalla

const annoyer = {
    phrases: ["literally", "cray cray", "I can´t even", "Totes!", "YOLO", "Can´t stop, won´t stop"],
    pickPhrase(){ //Obtengo una frase random
        const {phrases} = this;
        const idx = Math.floor(Math.random() *phrases.length);
        return phrases[idx]
    },
    start(){
        // console.log(this.pickPhrase())
        // setInterval(function(){
        //     console.log(this) //acá habra problemas porque si hacemos referencia a this, hace referencia a otra coa que no es el objeto mismo
        //     console.log(this.pickPhrase())//Pero con arrow functions se puede solucionar. 
        // },3000);

        //Lo que alguna gente hace es que almacena el objeto this en una variable
        // const that = this;
        // setInterval(function(){
        //     console.log(that); //seguiremos teniendo un error por la siguiente linea pero el that ahora si hace referencia al objeto mismo
        //     console.log(this.pickPhrase()); 
        // },3000);

        //SI USO ARROW FUNCTIONS EVADO EL PROBLEMA COMPLETAMENTE: ARROW FUNCTION NO TIENEN SU PROPIO THIS, EL THIS EN UN ARROW FUNCTION NUNCA CAMBIO DESDE EL THIS DE SU PADRE O
        //DE SU CERCANO THIS
        this.timerId = setInterval(() =>{
           console.log(this.pickPhrase()) 
        },3000);
    },
    stop(){
        clearInterval(this.timerId);
        console.log("It´s over!");
    }

}

//Esto demuestra que a veces es mejor utilizar arrow functions porque no queremos un nuevo this. 
/*---------------------------------------------------------------------------------------------------------*/

//Sección DOM Manipulation:

//Document.getElementById() Le paso un id como string
const img = document.getElementById("bear-photo"); //retorna un objeto.
console.dir(img);

/*Una vez que usamos este tipo de getElement, solo si hay un match para ese id, obtenemos un elemento de regreso
como un objeto. La representacion DOM para ese elemento.
Recordar que se supone que tenemos solo un ID en la pagina, osea que todos los id sean diferentes.
Osea que no deberia haber multiples bear-photo, y si las hubiera por alguna razon, seguiriamos obteniendo el primer
elemento que matchea. Entonce solo obtenemos un elemento de vuelta y si pasamos un id invalido o algo que no está
en la pagina, obtenemos nada, un null. */
const p = document.getElementById("main"); //obtenemos un objeto
console.dir(p);

//Abajo de todo en __proto__: dice que tipo de elemento es.

/*----------------------------------------------------------- */
//document.getElementsByTagName(): es Elements, con s porque potencialmente podemos obtener mas de un elemento.
//Esto significa que los elementos obtenidos seran almacenados en una lista.

//Obtengamos todos los inputs:
//const inputs = document.getElementsByTagName("input"); //parece un array pero no lo es.

const paragraphs = document.getElementsByTagName("p");

//Si selecciono algo que no esta en la pagina:
const h3 = document.getElementsByTagName("h3"); //Obtengo una coleccion vacia

//Ahora hablemos de que es esta HTMLCollection? Es un array como objeto que no es un array. Es una coleccion de objetos
//Es un tipo en el DOM. Pero podemos hacer algun array de cosas.

//podemos usar los indices del array en brackets, con la misma sintaxis:
// console.log(inputs[0]);
// console.log(inputs.length);

//Pero si intento usar array methods como .pop, .push, .include, no se puede.
//Entonces lo que podemos hacer es acceder a los elementos con indices e iterar y no mucho mas.

// for(let input of inputs) {console.log(input)}

//como es iterable, tambien podemos utilizar spread: no es un array pero puedo usar spread para colocarlo dentro del array
// const arr = [...inputs];

//Si pongo valores en los elemento del formulario, los podremos ver por consola en el for loop.

/*----------------------------------------------------------- */
//document.getElementsByClassName()

const header = document.getElementsByClassName("header");

const specials = document.getElementsByClassName("special");

//Y si seleccionamos un ClassName que no existe:
const chickens = document.getElementsByClassName("chickensss");
//Obtenemos una coleccion vacia.

//Si tratamos de seleccionar basado en un id: no va a funcionar. No hay nada con el class name de main.
const mains = document.getElementsByClassName("main");

//Podemos iterar, for loop, spread.

//Si quiero buscar por elementos con la clase special..
const ul = document.getElementsByClassName("ul")[0] //esto me retorna una lista pero selecciono el primer elemento de la misma y la almaceno en una variable.

//es un objeto, y tiene su popia copia de getElementsByClassName:
//const sp = ul.getElementsByClassName("special"); //entonces solo obtengo los dos li.

/*------------------------------*/
//querySelector
const h1 = document.querySelector("h1"); //Recordar que solo retorna el primer match
const inp = document.querySelector("input"); //Retorna el primer match.

//ID
const photo = document.querySelector("#bear-photo");
const centro = document.querySelector("#main");

//Class
const especial = document.querySelector(".special"); //retorna el primer match.

//Supongamos que quiero seleccionar el li que dice peas:
//No va a funcionar solo seleccionando la clase special porque obtenemos el primer special y tampoco el li.special porque esta el li first thing.
//Tengo que ser mas especifico, como se que esta dentro de un section:
//const especial = document.querySelector("section ul li.special"); 

//Puedo ser aun más especifico con:
const special = document.querySelector("body section ul li.special");

//Otra cosa que puedo hacer es seleccionar basados en atributos:
document.querySelector("input"); //Con esto obtengo el primer input de tipo text

//Si quiero el siguiente:
document.querySelector("input[type='password']");

//querySelectorAll: usa la misma sintaxis excepto que retorna un colector.
document.querySelectorAll("input");
document.querySelectorAll(".special");
document.querySelectorAll("li");

//Algo para notar es que nos devuelve un nodelist a diferencia de los que nos devuelve un getElemento.
//Es otro tipo de coleccion.

/*-------------------------------------------------------------------- */

//InnerText:

const head1 = document.querySelector('.header');
console.log(head1.innerText); //Me devuelve el texto que esta entre los tags.

//Pero que pasa si tengo contenido anidado dentro? Voy a seleccionar el ul que esta en el section a ver que me devuelve

//Primer ul que es la lista de primera cosa, segunda cosa,...
const ulSel = document.querySelector("ul");
console.log(ulSel.innerText);
/*Me retorna:
"Primera linea
Segunda linea
Tercera linea"

Esto no esta directamente ubicado en el ul, sino que estan en los hijos.
Por lo que obtenemos todo el texto dentro de el.
Por lo que podemos hacer lo siguiente:*/

//Shortcut document.body
console.log(document.body.innerText);
//Obtengo todo el texto de mi pagina web, no importa que tan anidado este el contenido.
//leer el contenido es interesante a veces, pero tambien podemos cambiar elementos, podemos manipular el texto.

//head1.innerText = "Tengo hambre";

//Pero hacerlo de esta manera es un poco tonto, que acutalice el texto del h1 tan prontro como la pagina cargue
//Porque no solo actualizar el HTML pero es aca donde los eventos aparecen que hacen que pueda actualizarse algo
//Cuando un determinado evento suceda.

//Y si yo hago lo siguiente, cambio el innerText
//ulSel.innerText = "SOY UN GRAN UL!" //todos los elemento desaparecen.

//Cuando hago innerText de algo, no importa si es un il, un h1 o lo que sea, simplemente pone el texto sobre esa linea.
//por lo que no es una gran idea hacer esto si estas tratando de preservar el contenido que tenias antes, pero puedes utilizar esto
//cuando estas tratando de actualizar algo como un header o una captura o si sabemos que no hay ningun contenido dentro que vayamos
//a perder.

/*-------------------------------------------------------------------- */

//TextContent:
//Hay tambien otra propiedad que podemos utilizar para acceder al text content de un elemento.

//Parecen ser identicos, puedo obtener el contenido de la pagina o de un elemento de la pagina.
console.log(head1.textContent);

//head1.textContent = "Tengo hambre";

//Pero ahora vamos a trabajar con el paragraph main:
const parg = document.querySelector("#main");
console.log(parg.innerText);
//Vemos que no tiene ningun formato este texto devuelto.
//pero si ahora lo hago con text content veremos que si se puede ver el formato en el cual esta
//escrito el texto
console.log(parg.textContent);
//Sabe acerca del script text pero entonces no incluye el script tag pero sí el texto dentro del mismo.
//Por lo que probablemente no sea ideal, la mayoria del tiempo al menos.

//Entonces aquí es donde podemos ver la diferencia.

//Tambien, si tuviera algo escondido en este parrafo, ejemplo un bold tag: <b></b> y luego por alguna
//razon decidi colocarle, inline style: display none. Por lo que no veremos esa frase ahi.
console.log(parg.innerText); //acá no aparece
console.log(parg.textContent); //acá sí

//Entonces el innerText es consciente de lo que se mostrará en la webpage, por ejemplo, el console.log,
//Pero al textContent no le importa esto en absoluto.

//el contentText es mas rapido que el inner porque no tiene que hacer estos calculos.

/*-------------------------------------------------------- */
//innerHTML:

const form = document.querySelector("form");
console.log(form.innerHTML);

console.log(ulSel.innerHTML);

//Puedo utilizar innerHTML para actualizar lo que hay dentro de un elemento, cambiar el contenido que esta
//dentro de dos tags.

//form.innerHTML = "Hola soy un formulario" //si voy al html veré que todo lo que estaba dentro del form 
//se fue y ahora esta lo que le coloque ahora.

//Tambien puedo agregar elementos HTML dentro:
//form.innerHTML = "<b> Soy un Bold Tag</b>" //Dentro le coloco lo que quiero agregar
//Esto esta bien para elementos hmtl simples pero si estamos tratando de hacer alo mas complejo
//seria un poco raro estrar escribiendo un enorme string con todo el contenido, y veremos otra manera de añadir
//elementos despues en la misma seccion.

//head1.innerHTML += " is cool"
//console.log(head1);

//Hay una diferencia entre innerHTML y innerText

//innerText no te da los tags a dif del innerHTML
//cuando los seteas pareciera que puedes usarlos si quieres agregar un elmento en algun html tag...en el caso de innerHTML
//En el caso de innertext no es que ignore los tags pero los trata como si fueran texto.
//Con innerHTML podes agregar elementos nuevos, con innerText no.

const inputs = document.querySelectorAll("input");
//Bear-name
console.log(inputs[0].value);
//Password
console.log(inputs[1].value);
//checkbox
console.log(inputs[2].checked);
//Barra
console.log(inputs[3].value);

//metodo placeholder:
console.log(inputs[1].value);
//puedo cambiar el placeholder:
inputs[1].placeholder = "Please enter password!"

const a = document.querySelector("a");

console.log(a.href);
//le cambio el valor:
a.href = "http://www.google.com"

//cambiando la imagen
img.src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGje_zlG3XBIejihXyNAo07GDRd2Lb49f7Uw&usqp=CAU"

/*------------------------------------------------*/
const range = document.querySelector("input[type='range']");

//Supongamos que queramos ver el valor del atributo max, del range:
console.log(range.getAttribute("max"));

//El valor del atributo min del range:
console.log(range.getAttribute("min"));

//caso que quiero obtener el valor de un atributo inexistente, me retorna null:
console.log(range.getAttribute("lolol"))

//para setear el valor de un atributo:
// range.setAttribute("min", "-500")
// console.log(range.getAttribute("min"));
// console.log(range.value);

//podemos cambiar un monton de cosas de los atributos, ejemplo el tipo:
// range.setAttribute("type", "radio");
// si miramos el range en la pagina ha cambiado a otro tipo de formulario

/*------------------------------------------------------------------*/
//ParentElement:
const firstLI = document.querySelector("li");
console.log(firstLI);

//Obtengo el padre: ul
console.log(firstLI.parentElement); 

//Vuelvo a hacer el parentElement y que obtengo? el body:
console.log(firstLI.parentElement.parentElement);

//Y si lo vuelvo a hacer de nuevo? Obtengo HTML
console.log(firstLI.parentElement.parentElement.parentElement);

//Y si lo intentamos una vez más obtenemos null:
console.log(firstLI.parentElement.parentElement.parentElement);


//children:
//Seleccionemos el ul:
const firstUl = document.querySelector("ul");

//acceder a los hijos del Ul:
console.log(firstUl.children); //Este es otro array like object
//array similar a un objeto, y contiene todos los elementos hijos de este ul.

//Los li no tienen hijos pero podemos acceder a uno de ellos.
console.log(firstUl.children[0])
console.log(firstUl.children[0].innerText)

//nextElementSibling and previousElementSibling: Sibling al mismo nivel, comparten un padre.

//nextElementSibling
console.log(firstLI.nextElementSibling);
console.log(firstLI.nextElementSibling.nextElementSibling);

//previousElementSibling
const thirdLi = firstLI.nextElementSibling.nextElementSibling;
console.log(thirdLi.previousElementSibling);

/*-----------------------------------------------------------------------------------------------------*/
//Cambiando multiples elementos.

//En este caso vamos a cambiar el innerText de todos los li de la página
const allLis = document.querySelectorAll("li");

for (let i=0; i < allLis.length; i++){
    console.log(allLis[i].innerText)
}

for (let i=0; i < allLis.length; i++){
    allLis[i].innerText = "We are the champions!"
}

for (let li of allLis){
    li.innerHTML = "We are <b>THE CHAMPIONS</b>"
}

/*----------------------------------------------------------------------*/
//Cambiando el estilo:

console.log(head1.style);
console.log(head1.style.color);

//Podemos utilizar Javascript para cambiar el estilo de un elemento en la pagina
//y seran afectados en la pagina, pero si utilizamos estas propiedades para leer 
//propiedades existentes, no funcinará al menos uq eesten definidos inline, lo cual,
//no es buena idea. Normalmente, no agregamos estilos inline.

//head1.style.color = "orange";
//p.style.color = "pink";
//p.style.backgroundColor = "grey";
//p.style.fontSize = "40px";
//console.log(p.style);

//Si tienes un monton de estilos que quieres agregar, 10 diferentes estilos, de esta manera:
//p.style.propiedad = valor; pierdo un monton haciendolo uno por uno.

//Cuando creamos una pagina web comunmente tenemos grupos de estlo que queremos aplicar a diferentes elementos y que mantenemos cierto tema,
//usualmente usamos una clase y esto es como obtenemos otra alternativa de darle estilo.
const colores = ["red", "orange", "blue", "yellow","green", "purple"];

allLis.forEach((li, i)=>{
    const color = colores[i];
    li.style.color = color;
})

//Es importante tener en cuenta porque esto funciona sobre otros estilos.
//La diferencia entre inline y los class styles es que va a predominar uno sobre otro, es decir, ejemplo:
//ponele que yo tengo un parrafo que tiene asinada una clase special que dice que tiene un color rojo,
//y luego utilizo el .style.color = "blue", va a predominar el .style.color = blue por ser inline style
//por sobre el class style.

/*-------------------------------------------------------------------------------------------------------------*/
//getComputedStyle:

console.log(document.querySelector("li").style.color) //Esto retorna "" porque esta propiedad style solo contiene los estilos inline, no contiene ningun
//style calculado, ningun estilo de la hola de estilos, ninguno de las clases de estilos que es lo que sucede en la pagina.

const style = getComputedStyle(firstLI);
console.log(style);

//Ponele que cambiamos el color
console.log(style.color);
firstLI.style.color = "pink";
console.log(style.color);

//entonces este computedStyle me permitirá tener los valores actuales de los estilos de los elementos.
//computed significa que los stilos a veces vienen de un style sheet pero tambien tienen cosas como hover style.

//Veamos el font-size y el color cuando pasamos el mouse por el header. Es un poco trampoco por que en proposito de correr este codigo desde mi consola tengo que tipear
//mientras muevo mi mouse por el header:

const compStyles = getComputedStyle(head1);

console.log(compStyles.color);
console.log(compStyles.fontSize);

/*-------------------------------------------------------------------------------------------------------------------*/
const todo = document.querySelector("#todos .todo");

//tres propiedades en 3 lineas separadas:
// todo.style.color = "gray";
// todo.style.textDecoration = "line-through";
// todo.style.opacity = "50%";

//Imaginemos que queremos aplicar 20 propiedades diferentes...
//la solucion seria definir una clase.

//una vez creada la clase, la tengo que aplicar a los elementos deseados.
console.log(todo.getAttribute("class")); //como la clase es un atributo

//Puedo setear ese atributo:
todo.setAttribute("class", "done");
//pero si vemos ahora la pagina veremos que el primer li ha perdido la clase todo por ende tiene tamaño diferente

//pero lo que puedo hacer para solucionar esto es hacer:
todo.setAttribute("class", "todo done"); //para mantener los dos tipos de clases
//esto funciona pero me requiere un codigo duro en lo que estoy tratando lograr.

//esto no es lo mejor, porque tengo que estar poniendo todas las clases separadas por espacios, por lo que esto
//nos trae a una nueva propiedad... classList:
todo.classList
//Es una representacion de objeto que es llamada DOMTokenList: luce como un array pero no lo es y contiene las clases
//que nosotros tenemos en este elemento y no solo se trata de contener las clases y poder verlas sino tambien provee
//metodos.

//Ejemplo, queremos remover la clase done del objeto todo:
todo.classList.remove("done");
//si vuelvo a intentar remover la clase done:
todo.classList.remove("done"); //no nos genera problemas

//por lo que esta, es una buena manera de implementarlo.

//Puedo hacer lo opuesto:
todo.classList.add("done");

//Pero quizas la mejor parte es la habilidad de alternar una clase:
//si ya esta ahi removerla y si no esta ahí, agregarla:
todo.classList.toggle("done");

//verificar si la clase done esta en el elemento li:
console.log(todo.getAttribute("class").includes("done")); //Como me retorna falso... 

todo.setAttribute("class", todo.getAttribute("class") + " done");
//Esto es un poco loco de hacer. 
console.log(todo.getAttribute("class").includes("done"));

//Hay que notar que por esta razon de que tenes que verificar y luego modificar, es mas facil
//utilizar el toggle que ademas si lo colocas por consola te retorna true or false.

/*------------------------------------------------------------------------------------*/

//Creando elementos:
//Primer paso es crear el elemento para lo cual tenemos un elemento llamado createELement
console.log(document.createElement("h2")); //le paso un string sobre el tipo de elemento que quiero crear

//Pero esto no es enrealidad un h2 sino solamente un representacion de HTML

const newh2 = document.createElement("h2");
//Esta vacio, por lo que debemos introducirle contenido

newh2.innerText = "Me gustan los animales!";
console.log(newh2.innerText);

//ahora le puedo agregar una clase si quiero
newh2.classList.add("special");
console.log(newh2);

//Como hago ahora para insertar este elemento dentro de la pagina.
//Lo que necesiatmos hacer es seleccionar un elemento para agregarlo a el tambien. 
//AppendChild() seria uno, es un metodo que podemos llama a un padre al que le queremos agregar un elemento.

//Que tal si ponemos este newh2 dentro del tag section, seleccionamos al section y despues llamamos appendChild
//en la seccion y le pasamos nuestro nuevo h2

const section = document.querySelector("section");
section.appendChild(newh2); //Cuando colocamos con append un elemento, este se coloca abajo en la lista de hijos, osea que
//ira despues de la lista de verduras.

//Ahora probemos con una imagen:
const newImg = document.createElement("img"); //es un objeto, un HTML image
newImg.src = "https://www.pisosestudiantesbarcelona.com//pics_fotosnoticias/99/mono.jpg";
//Ahora vamos a adjuntar el elemento el algun lado. 
//Si no queremos adjuntarlo debajo de la seccion, puedo hacer appendChild al body o ponerlo dentro del form. 
newImg.style.width = "300px";

document.body.appendChild(newImg);

//Ahora probemos insertando el link de un video de youtube:
//Utilizare el link a un video de luisito comunica:


const newLink = document.createElement("a");
newLink.innerText = "Ver video de Luisito Comunica, click aqui!"
newLink.href = "https://www.youtube.com/watch?v=MJg0B8wKGKs"
p.appendChild(newLink);

/*---------------------------------------------------------------------------------------*/
//Append, Prepend e InsertBefore:

//con appendChild necesito el padre al cual le quiero agregar el elemento hijo:
//Ejemplo agregar un elemento li a la lista:
const parentUL = document.querySelector("ul");
console.log(parentUL);
const newLI = document.createElement("li");
newLI.innerText = "Soy un nuevo li"

//Cuando hago appendChild, se convierte en el ultimo elemento hijo del padre
parentUL.appendChild(newLI);

//Pero que pasa si lo quiero poner al principio, o que pasa si lo quiero poner
//en el medio. Hay un metodo diferente llamado insertBefore:
//Seleccionamos un nodo y llamamos a insertBefore. Supongamos que queremos insertar
//despues del primer il. Tenemos que seguir llamando al padre y seleccionando el elemento despues
//del cual queremos insertar el elemento.
parentUL.insertBefore(newLI,firstLI);

parentUL.insertBefore(newLI, thirdLi);

//Existe otro metodo: insertAdjacentElement() el cual es un poco más complicado, pasamos un
//elemento, tenemos un targetElement, pero tambien pasamos una posicion y es un string que
//que pueden ser 4 opciones: beforebegin, afterbegin, beforeend, afterend. 

//targetElement.insertAdjacentElement(position, element);
//Position:
//beforebegin: antes del targetElement en si mismo.
//afterbegin: justo debajo del targetElement, antes esta el primer hijo. 
//beforeend: justo debajo del tarjetElement, despues esta su ultimo hijo.
//afterend: despues del targetElement en si mismo.

//creemos un elemento bold tag:

const i = document.createElement("i");
i.innerText = "Somos italicass!!"

//Antes que el parrafo empiece:
//p.insertAdjacentElement("beforebegin", i);

//Despued de que el parrafo termine:
p.insertAdjacentElement("afterend", i);