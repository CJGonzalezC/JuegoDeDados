var puntos0=0;
var puntos1=0;
var puntoTemp = 0;
NewGame()
document.querySelector(".btn-new").addEventListener("click", NewGame)
document.querySelector(".btn-roll").addEventListener("click", Roll)
document.querySelector(".btn-hold").addEventListener("click", Hold)

var activo = (document.getElementsByClassName("player-0-panel")[0].classList.contains('active'))? 0 : 1;

function NewGame() {
    
    document.getElementsByClassName("dice")[0].style.display = "block";
    document.getElementsByClassName("player-0-panel")[0].classList.remove('winner');
    document.getElementsByClassName("player-1-panel")[0].classList.remove('winner');
    puntoTemp = 0;
    puntos1 = 0
    puntos0 =0;
    document.getElementById("current-0").innerHTML = puntoTemp;
    document.getElementById("current-1").innerHTML = puntoTemp;
    document.getElementById("score-0").innerHTML = puntoTemp;
    document.getElementById("score-1").innerHTML = puntoTemp;
}

function terminar(){
    if(puntos0 > puntos1){
            document.getElementsByClassName("player-0-panel")[0].classList.add('winner');
        }
        else{
            document.getElementsByClassName("player-1-panel")[0].classList.add('winner');
        }
    
//    document.querySelector(".btn-hold").removeEventListener("click", Hold)
//    document.querySelector(".btn-roll").removeEventListener("click", Roll)
    
    document.getElementsByClassName("dice")[0].style.display = "none";
}

function Roll() {
    var rand = Random();
    document.getElementsByClassName("dice")[0].src = "dice-" + rand + ".png";
    puntoTemp = puntoTemp + rand;

    if (activo) {
//if (document.getElementsByClassName("player-0-panel")[0].classList.contains('active')) {
        document.getElementById("current-0").innerHTML = puntoTemp;
    } else {
        document.getElementById("current-1").innerHTML = puntoTemp;
    }

    if (rand == 1) {
        puntoTemp = 0;
        cambiarFondo();
    }
    
}

function Hold() {
    if (document.getElementsByClassName("player-0-panel")[0].classList.contains('active')) {
        puntos0 = puntos0 +puntoTemp;
        document.getElementById("score-0").innerHTML = puntos0;
    } else {
        puntos1 = puntos1 +puntoTemp;
        document.getElementById("score-1").innerHTML = puntos1;
    }
    
    puntoTemp=0;
    cambiarFondo();
    
    //validar para finalizar
    if(puntos0 >= 30 || puntos1 >= 30){
        terminar()
    }
}


function Random() {
    return Math.floor(Math.random() * 6) + 1;
}

function Cambiar(){
  activo = document.getElementsByClassName("player-0-panel")[0].classList.contains('active') ? 0:1  
}


function cambiarFondo() {    
    if (activo == 0) {
    //if (document.getElementsByClassName("player-0-panel")[0].classList.contains('active')) {
        //reiniciar
        document.getElementById("current-0").innerHTML = puntoTemp;

        document.getElementsByClassName("player-0-panel")[0].classList.remove('active');
        document.getElementsByClassName("player-1-panel")[0].classList.add('active');

    } else {
        //reiniciar
        document.getElementById("current-1").innerHTML = puntoTemp;

        document.getElementsByClassName("player-0-panel")[0].classList.add('active');
        document.getElementsByClassName("player-1-panel")[0].classList.remove('active');
    }
}