let btnOpenPopup = document.getElementById('portfolio__item-viewMore'),
	overlay = document.getElementById('overlay'),
	btnClosePopup = document.getElementById('close-popup'),
	popup = document.getElementById('popup')

btnOpenPopup.addEventListener('click',function() {
	overlay.classList.add('active');
	popup.classList.add('active')
});

btnClosePopup.addEventListener('click',function() {
	overlay.classList.remove('active')
	popup.classList.remove('active')
});