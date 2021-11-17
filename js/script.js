
import hamburgerMenu from "./hamburger-menu.js";
import contactFormValidations from "./validaciones-formulario.js";


const d = document;

function isTouchDevice() {
	return (('ontouchstart' in window) ||
			  (navigator.maxTouchPoints > 0) ||
			  (navigator.msMaxTouchPoints > 0));
}

const isTouch = isTouchDevice();

if (!isTouch){
const cursor1 = document.querySelector(".cursorCirculo");
const cursorSeOculta = document.querySelector(".oculto");
document.addEventListener("mousemove", e =>{
	cursor1.style.left = e.clientX + "px";
	cursor1.style.top = e.clientY + "px";
})

const mouseDentro = () => {
	cursor1.classList.remove("oculto");
}
const mouseFuera = () => {
	cursor1.classList.add("oculto");
}

document.addEventListener("mouseenter",mouseDentro);
document.addEventListener("mouseleave",mouseFuera);
}

let sobremi =document.querySelectorAll(".todosLosEnlaces");

const listaEn =Array.from(sobremi);

let afectado = document.querySelector(".cursorCirculo");

for(let i = 0 ; i<listaEn.length ; i++ ){

	listaEn[i].addEventListener("mouseover", () => {

	afectado.style.width = 7.265521796565389+"vh"
	afectado.style.height = 7.265521796565389+"vh"
	afectado.style.backgroundColor = "rgb(255, 255, 255,.1)"
	afectado.style.borderTop = "0.13210039630118892vh solid black"
	afectado.style.borderBottom = "0.13210039630118892vh solid #358cd8c5"
	afectado.style.borderLeft = "0.13210039630118892vh solid white"
	afectado.style.borderRight = "0.13210039630118892vh solid white"

	
}, false)

	listaEn[i].addEventListener("mouseout", () => {

	afectado.style.width = 0.5284015852047557+"vh"
	afectado.style.height = 0.5284015852047557+"vh"
	afectado.style.backgroundColor = "black"
	afectado.style.border = "none"

}, false)
}


d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn",".nav","ul li a");
    contactFormValidations();
    
    let a = function(){

		$("#name").val("");

		$("#name").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("focus-label-name");
			}else{
				$(this).removeClass("focus-label-name");
			}
		})
	};

    a();

    let b = function(){

		$("#email").val("");

		$("#email").focusout(function(){
			if($(this).val() != ""){
				$(this).addClass("focus-label-email");
			}else{
				$(this).removeClass("focus-label-email");
			}
		})
	};

    b();

})
















