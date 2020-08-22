const warriorsGames = [{
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },
    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },
    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },
  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },
    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },
  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },
    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
]


function obtenerPuntajes(locales, invitados){
  let puntajes;
  if (locales.isWinner){ 
    puntajes = `<b>${locales.points}</b>-${invitados.points}`;
  } else {
    puntajes = `${locales.points}-<b>${invitados.points}</b>`;
  }
  return puntajes;
}

function selecClase(locales, equipo){
  let clase;
  if (locales.team === equipo){
    clase = "local";
  } else {
    clase = "invitado";
  }
  return clase;
}

function selecEquipo(eq1,eq2){
  let respuesta = prompt(`Ingrese numero 1 por ${eq1} o 2 por ${eq2}`);
  while (respuesta !== "1" && respuesta !== "2"){
    respuesta = prompt(`Error. Ingrese numero 1 por ${eq1} o 2 por ${eq2}`);
  }
  if (respuesta = "1") {
    return eq1;
  } else{
    return eq2;
  }
}

function empezar(){
  let ul = document.createElement("ul");
  let body = document.querySelector("body");
  body.prepend(ul);

  const eq1 = warriorsGames[0].homeTeam.team;
  const eq2 = warriorsGames[0].awayTeam.team;
  const equipo = selecEquipo(eq1,eq2);

  for (let juego of warriorsGames){
    const locales = juego.homeTeam;
    const invitados = juego.awayTeam;
    let li = document.createElement("li");
    const equipos = `${locales.team} @ ${invitados.team}`;
    const puntajes = obtenerPuntajes(locales,invitados);
    const clase = selecClase(locales,equipo);

    li.classList.add(clase);
    li.innerHTML = `${equipos} ${puntajes}`;
    ul.appendChild(li);
  }
}

//empezar();

//Segunda version: Mostrar 2 perspectivas:
const eq1 = warriorsGames[0].homeTeam.team;
const eq2 = warriorsGames[0].awayTeam.team;

function empezarPerspectiva(equipo){
  let ul = document.createElement("ul");
  let body = document.querySelector("body");
  body.prepend(ul);  
  const h1 = document.createElement("h1");
  h1.innerText = `${equipo}`;
  h1.classList.add("header");
  body.prepend(h1);

  for (let juego of warriorsGames){
    const locales = juego.homeTeam;
    const invitados = juego.awayTeam;
    let li = document.createElement("li");
    const equipos = `${locales.team} @ ${invitados.team}`;
    const puntajes = obtenerPuntajes(locales,invitados);
    const clase = selecClase(locales,equipo);

    li.classList.add(clase);
    li.innerHTML = `${equipos} ${puntajes}`;
    ul.appendChild(li);
  }
}

empezarPerspectiva(eq1);
empezarPerspectiva(eq2);

