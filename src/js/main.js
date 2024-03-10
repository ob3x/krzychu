const logginPopup = document.querySelector('.nav-loggin');
const btnLoggin = document.querySelector('.nav-box__item-account');
const bucketPopup = document.querySelector('.nav-bucket');
const btnBucket = document.querySelector('.nav-box__item-bucket');
const heartPopup = document.querySelector('.nav-heart');
const btnHeart = document.querySelector('.nav-box__item-heart');
const popups = document.querySelectorAll('.popup');
const delItem = document.querySelector('.nav-heart__box-img')

const deleteItems = () => {
	
}



btnLoggin.addEventListener('click', () => {
	logginPopup.classList.toggle('popup-active');
});
btnBucket.addEventListener('click', () => {
	bucketPopup.classList.toggle('popup-active');
});
btnHeart.addEventListener('click', () => {
	heartPopup.classList.toggle('popup-active');
});

delItem.addEventListener('click', delItem)


