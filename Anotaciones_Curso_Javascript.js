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
const results = books.filter(book => {
    const title = book.title.toLowerCase();
    return title.includes(query.toLowerCase())
});

console.log(results);

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