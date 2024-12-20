// SWIPER
import Swiper from 'swiper';
import {Navigation, Pagination, Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// TYPEWRITER
import Typewriter from 'typewriter-effect/dist/core';
function typed() {
	var textString = document.querySelector('.swiper-slide-active .hidden').innerHTML;
	let title = new Typewriter('.swiper-slide-active .main-slider__title', {
  strings: textString,
  autoStart: true,
	loop: true
});
}

// function write() {
// 	var text = document.querySelector('.swiper-slide-active .hidden').innerHTML;
// 	var delay = 100;
// 	var elem = document.querySelector('.swiper-slide-active .main-slider__title');
// 	var print_text = function(text, elem, delay) {
// 		if(text.length > 0) {
// 			elem.innerHTML += text[0];
// 			setTimeout(
// 				function() {
// 					print_text(text.slice(1), elem, delay);  
// 				}, elem
// 			);
// 		}
// 	}
// print_text(text, elem, delay);
// }

// function erase() {
// 	const printedText = document.querySelectorAll('.main-slider__title');
// 	printedText.forEach(text=>{
// 		text.innerHTML = "";
// 	});
// }

// PHONE MASK
import IMask from 'imask';

// SWIPER
const mainSwiper = new Swiper('.main-slider__wrapper', {
	modules: [Navigation, Pagination, Mousewheel],
	slidesPerView: 1,
	direction: 'vertical',
	speed: 1,
	// pagination: {
	// 	el: '.swiper-pagination',
	// 	dynamicBullets: true,
	// 	clickable: true
	// },
	mousewheel: true,
	loop: true,
	preventInteractionOnTransition: true
	// effect: 'fade'
});

// СОБЫТИЯ SWIPER
mainSwiper.on('transitionEnd', function() {
	// setTimeout(write, 1000);
	typed();
});
mainSwiper.on('beforeTransitionStart', function() {
	// erase();
});
// write();
typed();
// popup

// ECS
// window.onkeydown = function( event ) {
// 	if ( event.keyCode == 27 ) {
// 		closePopup();
// 	}
// };

// function closePopupByClickOutside(e) {
// 	let clikOn = e.target;
// 	let blackArea = document.querySelector('.popup.active');
// 	if(clikOn == blackArea) {
// 	closePopup();
// 	}
// }

// lock scroll
const disableScrollBody = () => {
	document.body.dataset.scrollY = window.scrollY;
	document.body.style.cssText = `
		position:fixed;
		top:-${window.scrollY}px;
		left:0;
		width:100%;
		overflow:hidden;
		height:100vh;
		padding-right: ${scrollbar}px;
	`
	}
	const enableScrollBody = () => {
	document.body.style.cssText = ``;
	window.scroll({
		top: document.body.dataset.scrollY
	});
	}


// FORM
// document.addEventListener("DOMContentLoaded", () => {
// 	// QUIZ SEND
// 	const ajaxSendQuiz = async (formData) => {
// 		const response = await fetch("zayavka.php", {
// 		method: "POST",
// 		body: formData
// 		});
// 		if (!response.ok) {
// 		throw new Error(`Ошибка по адресу, статус ошибки ${response.status}`);
// 		}
// 	};
// 	// REQUEST SEND
// 	const ajaxSendRequest = async (formData) => {
// 		const response = await fetch("request.php", {
// 		method: "POST",
// 		body: formData
// 		});
// 		if (!response.ok) {
// 		throw new Error(`Ошибка по адресу, статус ошибки ${response.status}`);
// 		}
// 	};


	// function validationRequest() {
	// 	const emailFieldRequest = document.querySelector('.input--email-request');
	// 	if(emailFieldRequest.value === '') {
	// 		// alert('НЕТ email – OK!');
	// 		return false //Нет ошибок формы
	// 	}
	// 	else {return true} //Есть ошибка формы}
	// }
	// const formQuiz = document.querySelector("#form-quiz");
	// const formRequest = document.querySelector("#example-request");
	// formQuiz.addEventListener("submit", sendQuiz); 
	// formRequest.addEventListener("submit", sendRequest); 


	// async function sendRequest(e) {
	// 	e.preventDefault();
	// 	let error = validationRequest();
	// 	console.log('ошибка – ' + error);
	// 	if (error == true) {
	// 		console.log('НЕ УШЁЛ ЗАПРОС!');
	// 	}
	// 	else {
	// 		console.log('УШЁЛ ЗАПРОС!');
	// 		const formData = new FormData(this);
	// 		ajaxSendRequest(formData)
	// 		.then((response) => {
	// 			console.log(response);
	// 			formRequest.reset();
	// 			thanks();
	// 		})
	// 		.catch((err) => console.error(err))
	// 	}
	// }

	// const thanks = () => {
	// 	document.querySelector('#example-request').style.display = 'none';
	// 	document.querySelector('.form-example-request .form__title').innerHTML = "Спасибо! Ваш запрос отправлен!";
	// 	setTimeout(function(){closePopup()}, 5000);
	// }



/// FORM

// PHONE-MASK
// const phoneQuiz = document.querySelector('.input--phone-quiz');
// const phoneRequest = document.querySelector('.input--phone-request');

// 	const maskOptions = {
// 		mask: '+0 (000) 000-00-00'
// 	};
	
// const maskQuiz = IMask(phoneQuiz, maskOptions);
// maskQuiz.on('complete', () => {
// 		document.querySelector('.submit-quiz-form').classList.remove('disabled');
// 		});
// const maskRequest = IMask(phoneRequest, maskOptions);
// maskRequest.on('complete', () => {
// 		document.querySelector('.submit-request-form').classList.remove('disabled');
// 		});