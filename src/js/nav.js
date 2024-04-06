const logginPopup = document.querySelector('.nav-loggin');
const btnLoggin = document.querySelector('.nav-box__item-account');
const bucketPopup = document.querySelector('.nav-bucket');
const btnBucket = document.querySelector('.nav-box__item-bucket');
const heartPopup = document.querySelector('.nav-heart');
const btnHeart = document.querySelector('.nav-box__item-heart');
const popupsBtns = document.querySelectorAll('.popup');
const popups = document.querySelectorAll('.popup-box');
const delItems = document.querySelectorAll('.nav-heart__box-img');
const heartItem = document.querySelectorAll('.heart-box');

const deleteItems = (e) => {
	e.target.closest('.nav-heart__box').remove();
};

btnHeart.addEventListener('click', () => {
	heartPopup.classList.toggle('active');
});
btnLoggin.addEventListener('click', () => {
	logginPopup.classList.toggle('active');
});
btnBucket.addEventListener('click', () => {
	bucketPopup.classList.toggle('active');
});

delItems.forEach((item) => {
	item.addEventListener('click', deleteItems);
});
