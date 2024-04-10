const bucketPopup = document.querySelector('.nav-bucket');
const btnBucket = document.querySelector('.nav-box__item-bucket');
const heartPopup = document.querySelector('.nav-heart');
const btnHeart = document.querySelector('.nav-box__item-heart');
const popupsBtns = document.querySelectorAll('.popup');
const popups = document.querySelectorAll('.popup-box');
const delItems = document.querySelectorAll('.nav-heart__box-img');
const heartItem = document.querySelectorAll('.heart-box');
const popupsBox = document.querySelectorAll('.popup-box');
const notification = document.querySelector('.notification__text');
const elements = [
	'Rzecz 1',
	'Przeglądaj nasze najnowsze wyprzedaże, przeceny aż do 30%!',
]; // Tablica z elementami do wypisania
let currentIndex = 0; // Zmienna śledząca bieżący indeks

const deleteItems = (e) => {
	e.target.closest('.nav-heart__box').remove();
};

btnHeart.addEventListener('click', () => {
	heartPopup.classList.toggle('active');
});
btnBucket.addEventListener('click', () => {
	bucketPopup.classList.toggle('active');
});

delItems.forEach((item) => {
	item.addEventListener('click', deleteItems);
});

const printElement = () => {
	notification.textContent = elements[currentIndex]; // Wypisz aktualny element
	currentIndex = (currentIndex + 1) % elements.length; // Zaktualizuj indeks, aby przewinąć się po tablicy
};

setInterval(printElement, 6000);
