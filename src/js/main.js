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
const countInput = document.querySelector('.accountInput');
const accoutInput = document.querySelector('.accountInput');
const selectReclamation = document.querySelector('.selectReclamation');
const secoundProduckt = document.querySelector('.secoundProduckt');
const orderInput = document.querySelector('.orderInput');
const trackInput = document.querySelector('.trackInput');
const formTextarea = document.querySelector('.contactForm-box__textarea');
const contactNumber = document.querySelector('.contactNumber');

const orderNumber = document.querySelector('.orderNumber');
const termOrder = document.querySelector('.termOrder');
const fixInput = document.querySelector('.fixInput');
const nameProduct = document.querySelector('.nameProduct');
const breakInput = document.querySelector('.breakInput');
const selectBack = document.querySelector('.selectBack');

const formError = document.querySelector('.form-error');
const formTitle = document.querySelector('.form__title');

const deleteItems = (e) => {
	e.target.closest('.nav-heart__box').remove();
};

const checkError = () => {
	if (
		nameInput.value !== '' &&
		emailInput.value !== '' &&
		select.value !== '0'
	) {
		secoundEl.classList.add('form-steps__item-count--current');
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
		formTitle.textContent = 'Formularz zwrotów';
		returnForm.classList.remove('active');
		firstFormBtn.addEventListener('click', () => {
			if (
				numberInput.value !== '' &&
				dataInput.value !== '' &&
				productInput.value !== '' &&
				selectReclamation.value !== '0'
			) {
				changeEl();
			} else {
				formError.classList.remove('active');
			}
		});
	} else if (selectVl == 2) {
		formTitle.textContent = 'Formularz reklamacji';
		reclamationForm.classList.remove('active');
		firstFormBtn.addEventListener('click', () => {
			if (
				orderNumber.value !== '' &&
				termOrder.value !== '' &&
				fixInput.value !== '' &&
				nameProduct.value !== '' &&
				breakInput.value !== '' &&
				selectBack.value !== '0'
			) {
				changeEl();
			} else {
				formError.classList.remove('active');
			}
		});
	} else if (selectVl == 3) {
		formTitle.textContent = 'Formularz linku śledzącego';
		trackForm.classList.remove('active');
		firstFormBtn.addEventListener('click', () => {
			if (orderInput.value !== '' && trackInput.value !== '') {
				changeEl();
			} else {
				formError.classList.remove('active');
			}
		});
	} else if (selectVl == 4) {
		formTitle.textContent = 'Formularz kontaktowy';
		contactForm.classList.remove('active');
		firstFormBtn.addEventListener('click', () => {
			if (contactNumber.value !== '' && formTextarea.value !== '') {
				changeEl();
			} else {
				formError.classList.remove('active');
			}
		});
	}
};

const changeEl = () => {
	thirdEl.classList.add('form-steps__item-count--current');
	firstFormBtn.classList.add('active');
	sentTitle.classList.remove('active');
	secoundForm.forEach((form) => {
		form.classList.add('active');
	});
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

const checkEnter = (e) => {
	if (e.key === 'Enter') {
		secoundProduckt.classList.remove('active');
	}
	if (e.key === 'Backspace') {
		secoundProduckt.classList.add('active');
	}
};

delItems.forEach((item) => {
	item.addEventListener('click', deleteItems);
});

firstFormBtn.addEventListener('click', checkError);

window.addEventListener('keyup', checkEnter);
