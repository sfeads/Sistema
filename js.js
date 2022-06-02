var home = document.getElementById('home');
var menu = document.getElementById('menu');

function activar(){
    menu.classList.add("activo")
}

home.addEventListener("click", activar);