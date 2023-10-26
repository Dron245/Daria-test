// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

document.addEventListener("DOMContentLoaded", ready);

function ready() {
	
	document.addEventListener('click', actions)
	function actions (e) {
		
		function sw() {
			console.log(e.target.innerText);
		const target= e.target
		if(e.target.closest('.actions__language' && target.innerText === 'EN')){
					e.target.innerText = "RU";
					
					console.log(e.target.innerText); 
				}
		if(e.target.closest('.actions__language') && target.innerText === 'RU'){
			console.log('123');
			e.target.innerText = "EN";
			
		};
		}
		sw()
		
	}
		
}
