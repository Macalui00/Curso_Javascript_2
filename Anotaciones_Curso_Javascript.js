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