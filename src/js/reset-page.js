const loginBtn = document.querySelector('.loginBtn');
const loginError = document.querySelector('.loginError');
const firstEye = document.querySelector('.firstEye');
const secoundEye = document.querySelector('.secoundEye');
const registerPassword = document.querySelector('.rightPassword');
const registerSecoundPassword = document.querySelector('.rightSecoundPassword');

const checkInputs = () => {
	if (registerPassword.value !== '' && registerSecoundPassword.value !== '') {
		console.log('jest ok');
		loginError.classList.add('active');
	} else {
		loginError.classList.remove('active');
	}
};

const changeEye = () => {
	if (registerPassword.type == 'text') {
		registerPassword.type = 'password';
		firstEye.classList.remove('active-after');
	} else {
		registerPassword.type = 'text';
		firstEye.classList.add('active-after');
	}
};

const changeSecoundEye = () => {
	if (registerSecoundPassword.type == 'text') {
		registerSecoundPassword.type = 'password';
		secoundEye.classList.remove('active-after');
	} else {
		registerSecoundPassword.type = 'text';
		secoundEye.classList.add('active-after');
	}
};

firstEye.addEventListener('click', changeEye);
secoundEye.addEventListener('click', changeSecoundEye);
loginBtn.addEventListener('click', checkInputs);
