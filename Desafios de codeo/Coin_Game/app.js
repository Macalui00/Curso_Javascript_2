function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const extraerPosicion =  (posicion) => {
	if(!posicion) return 0; //para asegurarse de que siempre retorne un valor
	return parseInt(posicion.slice(0,-2));
}
const avatar = document.querySelector("#player");
window.addEventListener("keyup", function(e){
	// avatar.style.top = "200";
	console.log(e);
	if (e.key === "ArrowDown" || e.key === "Down"){
	const posAct = extraerPosicion(avatar.style.top); //En el comienzo avatar.style.top es un empty string.
	avatar.style.top = `${posAct + 50} px`;
}
});

