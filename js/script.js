
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
const cursor1 = document.querySelector(".cursor");

document.addEventListener("mousemove", e =>{
	cursor1.style.left = e.clientX + "px";
	cursor1.style.top = e.clientY + "px";
})
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
















