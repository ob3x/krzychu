const logginPopup = document.querySelector('.nav-loggin');
const btnLoggin = document.querySelector('.nav-box__item-account');
const bucketPopup = document.querySelector('.nav-bucket');
const btnBucket = document.querySelector('.nav-box__item-bucket');
const heartPopup = document.querySelector('.nav-heart');
const btnHeart = document.querySelector('.nav-box__item-heart');
const popupsBtns = document.querySelectorAll('.popup');
const popups = document.querySelectorAll('.popup-box');
const delItems = document.querySelectorAll('.nav-heart__box-img');

const firstForm = document.querySelector('.form-box');
const secoundForm = document.querySelectorAll('.secound-formBox');

const returnForm = document.querySelector('.returnForm-box');
const reclamationForm = document.querySelector('.reclamationForm-box');
const trackForm = document.querySelector('.trackForm-box');
const contactForm = document.querySelector('.contactForm-box');
const sendForm = document.querySelector('.send-box');
const sentTitle = document.querySelector('.sent-form');

const firstFormBtn = document.querySelector('.form__btn');

const firstEl = document.querySelector('.first-form');
const secoundEl = document.querySelector('.secound-form');
const thirdEl = document.querySelector('.third-form');

const nameInput = document.querySelector('.nameInput');
const emailInput = document.querySelector('.emailInput');
const select = document.querySelector('.selectChose');

const numberInput = document.querySelector('.numberInput');
const dataInput = document.querySelector('.dataInput');
const productInput = document.querySelector('.productInput');
const accoutInput = document.querySelector('.accountInput');
const selectReclamation = document.querySelector('.selectReclamation');

const formError = document.querySelector('.form-error');

const deleteItems = (e) => {
	e.target.closest('.nav-heart__box').remove();
};

const checkError = () => {
	if (
		nameInput.value !== '' &&
		emailInput.value !== '' &&
		select.value !== '0'
	) {
		firstEl.classList.add('form-steps__item-count--current');
		firstForm.classList.add('active');
		checkForm();
	} else {
		formError.classList.remove('active');
	}
};

const checkForm = () => {
	const selectVl = select.value;
	formError.classList.add('active');

	if (selectVl == 1) {
		returnForm.classList.remove('active');
		firstFormBtn.addEventListener('click', () => {
			if (
				numberInput.value !== '' &&
				dataInput.value !== '' &&
				productInput.value !== '' &&
				accoutInput.value !== '' &&
				selectReclamation.value !== '0'
			) {
				changeEl();
			} else {
				formError.classList.remove('active');
			}
		});
	} else if (selectVl == 2) {
		reclamationForm.classList.remove('active');
	} else if (selectVl == 3) {
		trackForm.classList.remove('active');
	} else if (selectVl == 4) {
		contactForm.classList.remove('active');
	}
	// firstFormBtn.addEventListener('click', changeEl);
};

const changeEl = () => {
	secoundEl.classList.add('form-steps__item-count--current');
	formError.classList.add('active');
	secoundForm.forEach((form) => {
		form.classList.add('active');
	});
	sendForm.classList.remove('active');
	firstFormBtn.textContent = 'Wyslij';

	firstFormBtn.addEventListener('click', closeForm);
};

const closeForm = () => {
	thirdEl.classList.add('form-steps__item-count--current');
	sendForm.classList.add('active');
	firstFormBtn.classList.add('active');
	sentTitle.classList.remove('active');
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

firstFormBtn.addEventListener('click', checkError);
