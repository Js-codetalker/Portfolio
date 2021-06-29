let btnOpenPopup = document.getElementById('portfolio__item-viewMore'),
	overlay = document.getElementById('overlay'),
	btnClosePopup = document.getElementById('close-popup'),
	popup = document.getElementById('popup');

btnOpenPopup.addEventListener('click',function() {
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnClosePopup.addEventListener('click',function() {
	overlay.classList.remove('active');
	popup.classList.remove('active');
});

//Responsive menu

function openAndCloseMenu() {
	navSection.classList.toggle("opened")
	navSection.classList.toggle("closed")
}

let responsiveMenuButton = document.getElementById('responsiveMenu__button'),
	navSection = document.getElementById('navSection'),
	link1 = document.getElementById('link1'),
	link2 = document.getElementById('link2'),
	link3 = document.getElementById('link3');

responsiveMenuButton.addEventListener('click',function () {
	openAndCloseMenu();
});
link1.addEventListener('click',function() {
	openAndCloseMenu();
});
link2.addEventListener('click', function(){
	openAndCloseMenu();
});
link3.addEventListener('click', function(){
	openAndCloseMenu();
});
