var mailButton = document.querySelector(".map-mail-to");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var mailto = popup.querySelector("[name=mail]");
    
mailButton.addEventListener("click", function(event) {
	event.preventDefault();  
	popup.classList.add("modal-show");
	username.focus();
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-show");
});