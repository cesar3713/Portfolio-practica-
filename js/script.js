
import hamburgerMenu from "./hamburger-menu.js";
import contactFormValidations from "./validaciones-formulario.js";


const d = document;

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
















