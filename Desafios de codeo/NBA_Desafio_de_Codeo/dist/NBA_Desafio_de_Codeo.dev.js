"use strict";

var warriorsGames = [{
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}, {
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
}];

function obtenerPuntajes(locales, invitados) {
  var puntajes;

  if (locales.isWinner) {
    puntajes = "<b>".concat(locales.points, "</b>-").concat(invitados.points);
  } else {
    puntajes = "".concat(locales.points, "-<b>").concat(invitados.points, "</b>");
  }

  return puntajes;
}

function selecClase(locales, equipo) {
  var clase;

  if (locales.team === equipo) {
    clase = "local";
  } else {
    clase = "invitado";
  }

  return clase;
}

function selecEquipo(eq1, eq2) {
  var respuesta = prompt("Ingrese numero 1 por ".concat(eq1, " o 2 por ").concat(eq2));

  while (respuesta !== "1" && respuesta !== "2") {
    respuesta = prompt("Error. Ingrese numero 1 por ".concat(eq1, " o 2 por ").concat(eq2));
  }

  if (respuesta = "1") {
    return eq1;
  } else {
    return eq2;
  }
}

function empezar() {
  var ul = document.createElement("ul");
  var body = document.querySelector("body");
  body.prepend(ul);
  var eq1 = warriorsGames[0].homeTeam.team;
  var eq2 = warriorsGames[0].awayTeam.team;
  var equipo = selecEquipo(eq1, eq2);

  for (var _i = 0, _warriorsGames = warriorsGames; _i < _warriorsGames.length; _i++) {
    var juego = _warriorsGames[_i];
    var locales = juego.homeTeam;
    var invitados = juego.awayTeam;
    var li = document.createElement("li");
    var equipos = "".concat(locales.team, " @ ").concat(invitados.team);
    var puntajes = obtenerPuntajes(locales, invitados);
    var clase = selecClase(locales, equipo);
    li.classList.add(clase);
    li.innerHTML = "".concat(equipos, " ").concat(puntajes);
    ul.appendChild(li);
  }
} //empezar();
//Segunda version: Mostrar 2 perspectivas:


var eq1 = warriorsGames[0].homeTeam.team;
var eq2 = warriorsGames[0].awayTeam.team;

function empezarPerspectiva(equipo) {
  var ul = document.createElement("ul");
  var body = document.querySelector("body");
  body.prepend(ul);
  var h1 = document.createElement("h1");
  h1.innerText = "".concat(equipo);
  h1.classList.add("header");
  body.prepend(h1);

  for (var _i2 = 0, _warriorsGames2 = warriorsGames; _i2 < _warriorsGames2.length; _i2++) {
    var juego = _warriorsGames2[_i2];
    var locales = juego.homeTeam;
    var invitados = juego.awayTeam;
    var li = document.createElement("li");
    var equipos = "".concat(locales.team, " @ ").concat(invitados.team);
    var puntajes = obtenerPuntajes(locales, invitados);
    var clase = selecClase(locales, equipo);
    li.classList.add(clase);
    li.innerHTML = "".concat(equipos, " ").concat(puntajes);
    ul.appendChild(li);
  }
}

empezarPerspectiva(eq1);
empezarPerspectiva(eq2);