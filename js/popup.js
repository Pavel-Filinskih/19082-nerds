var link = document.querySelector(".login");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = document.querySelector(".modal-f");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var usname = popup.querySelector("[name=Name]");
var email = popup.querySelector("[name=Email]");
var textplace = popup.querySelector("[name=textare]");
var storage = localStorage.getItem("login");

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-content-show");
	
	if (storage) {
		usname.value = storage;
		email.focus();
	}
	
	else {
		usname.focus();
	}

});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	usname.setAttribute("placeholder", "ПРЕДСТАВЬТЕСЬ, ПОЖАЛУЙСТА");
	email.setAttribute("placeholder", "ДЛЯ ОТПРАВКИ ОТВЕТА");
	textplace.setAttribute("placeholder", "В СВОБОДНОЙ ФОРМЕ");
});

form.addEventListener("submit", function(event) {
	if (!usname.value || !email.value || !textplace.value) {
		event.preventDefault();
		
		if(!usname.value){
			usname.classList.add("redbord");
			usname.setAttribute("placeholder", "ОБЯЗАТЕЛЬНОЕ ПОЛЕ!");
		
		}
		if(!email.value){
			email.classList.add("redbord");
			email.setAttribute("placeholder", "ОБЯЗАТЕЛЬНОЕ ПОЛЕ!");
		}
		if(!textplace.value){
			textplace.classList.add("redbord");
			textplace.setAttribute("placeholder", "ОБЯЗАТЕЛЬНОЕ ПОЛЕ!");
		}
		alert("Нужно заполнить все поля");
}
});

window.addEventListener("keydown", function(event){
	if (event.keyCode === 27) {
		if (popup.classList.contains("modal-content-show")){
		popup.ClassList.remove("modal-content-show");
		}
	}
});