var win = false

var jugadas = 0;
var msg = document.getElementById("msg")
var casillas = document.querySelectorAll(".casilla");
function marcarCasilla(n) {

    // es para controlar turno y repeticiones
    var seleccionada = document.getElementById(n.id);
    if (seleccionada.innerHTML == "" && win==false) {

        if (jugadas % 2 == 0) {
            seleccionada.innerHTML = "X";
            msg.innerHTML = 'TURNO DE: "O"'
        }
        else {
            seleccionada.innerHTML = "O";
            msg.innerHTML = 'TURNO DE: "X"'
        }

        jugadas++
        comprobar()

    }
    /*
    else {
        alert("ESTA CASILLA YA ESTA SELECCIONADA, ELIGE OTRA")
    }
    */


}

var pWin = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function comprobar() {

    for (var j = 0; j < pWin.length; j++) {
        if (
            casillas[pWin[j][0]].innerHTML == "X" &&
            casillas[pWin[j][1]].innerHTML == "X" &&
            casillas[pWin[j][2]].innerHTML == "X"
        ) {
            msg.innerHTML = '"X" Gana';
            win = true

        } else if (
            casillas[pWin[j][0]].innerHTML == "O" &&
            casillas[pWin[j][1]].innerHTML == "O" &&
            casillas[pWin[j][2]].innerHTML == "O"
        ) {
            msg.innerHTML = '"O" Gana';
            win = true
        }
    }
    if (
        win==false &&
        casillas[0].innerHTML != "" &&
        casillas[1].innerHTML != "" &&
        casillas[2].innerHTML != "" &&
        casillas[3].innerHTML != "" &&
        casillas[4].innerHTML != "" &&
        casillas[5].innerHTML != "" &&
        casillas[6].innerHTML != "" &&
        casillas[7].innerHTML != "" &&
        casillas[8].innerHTML != ""
    ) {
        msg.innerHTML = "Empate";
    }
}

function resetGame(){
    for (let i = 0; i < casillas.length; i++) {
        casillas[i].innerHTML="";
        jugadas = 0;
        win = false;
        msg.innerHTML = 'TURNO DE: "X"'

    }
}