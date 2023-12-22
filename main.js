const menu = document.querySelector(".menu");
const mobile = document.querySelector(".mobile");
var inicio = document.querySelector(".inicio");
var especialidades = document.querySelector(".especialidades");
var servicios = document.querySelector(".servicios");
var especialista = document.querySelector(".especialista");
var contacto = document.querySelector(".contacto");

menu.addEventListener('click',toggleMenuNav);
inicio.addEventListener('click',addMenuNav);
especialidades.addEventListener('click',addMenuNav);
servicios.addEventListener('click',addMenuNav);
especialista.addEventListener('click',addMenuNav);
contacto.addEventListener('click',addMenuNav);

function toggleMenuNav(){
    mobile.classList.toggle('inactive');
}

function addMenuNav(){
    console.log("ex");
    mobile.classList.add('inactive');
}

document.addEventListener("DOMContentLoaded", function () {
    // Función para verificar si un elemento está en el área visible
    function estaEnElArea(elemento) {
        var rect = elemento.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función para manejar el evento de scroll
    function manejarScroll() {
        var Inicio = document.getElementById("Inicio");
        var Especialidades = document.getElementById("Especialidades");
        var Servicios = document.getElementById("Servicios");
        var Especialista = document.getElementById("Especialista");
        var Contacto = document.getElementById("Contacto");
        // var miSeccion = document.querySelector(".title");

        if (estaEnElArea(Inicio)) {
            Inicio.classList.add("on");
        }
        if (estaEnElArea(Especialidades)) {
            Inicio.classList.remove("on");
        }
        if (estaEnElArea(Servicios)) {
            Inicio.classList.remove("on");
        }
        if (estaEnElArea(Especialista)) {
            Inicio.classList.remove("on");
        }
        if (estaEnElArea(Contacto)) {
            Inicio.classList.remove("on");
        }
    }

    // Agregar un listener para el evento de scroll
    window.addEventListener("scroll", manejarScroll);

    // Ejecutar la función una vez para verificar el estado inicial
    manejarScroll();
});
