// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", ready);

function ready() {
	
	window.addEventListener('click', (e)=>{
		const target = e.target
		const btnLang = document.querySelector('.actions__language')
		if(e.target.closest('.actions__language')){
			btnLang.classList.toggle('switch-lang')
		};
		// console.log(document.querySelector('.menu__icon'));
		// console.log(e.target);
		if (!e.target.closest('.menu__icon') && !target.closest('.menu__body')) { 
			document.documentElement.classList.remove("menu-open");
			document.documentElement.classList.remove("lock");
		}
	})
	AOS.init({
		// easing: 'ease-out-back',
		duration: 500,
	});
}
