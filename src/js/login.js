const loginEmail = document.querySelector('.email');
const loginPassword = document.querySelector('.password');
const loginError = document.querySelector('.loginError');
const loginBtn = document.querySelector('.loginBtn');

const registerName = document.querySelector('.name');
const registerEmail = document.querySelector('.rightEmail');
const registerPassword = document.querySelector('.rightPassword');
const rightSecoundPassword = document.querySelector('.rightSecoundPassword');
const registerDate = document.querySelector('.rightDate');
const registerGender = document.querySelector('.rightGender');
const registerCheckbox = document.querySelector('.checkbox');
const registerError = document.querySelector('.registerError');
const registerBtn = document.querySelector('.registerBtn');
const firstEye = document.querySelector('.firstEye');
const secoundEye = document.querySelector('.secoundEye');
const thirdEye = document.querySelector('.thirdEye');

const changeEye = () => {
	if (loginPassword.type == 'text') {
		loginPassword.type = 'password';
		firstEye.classList.remove('active-after')
	} else {
		loginPassword.type = 'text';
		firstEye.classList.add('active-after')
	}
};

const changeSecoundEye = () => {
	if (registerPassword.type == 'text') {
		registerPassword.type = 'password';
		secoundEye.classList.remove('active-after')
	} else {
		registerPassword.type = 'text';
		secoundEye.classList.add('active-after')
	}
};

const changeThirdEye = () => {
	if (rightSecoundPassword.type == 'text') {
		rightSecoundPassword.type = 'password';
		thirdEye.classList.remove('active-after')
	} else {
		rightSecoundPassword.type = 'text';
		thirdEye.classList.add('active-after')
	}
};



const checkLoginInputs = () => {
	if (loginEmail.value !== '' && loginPassword.value !== '') {
		console.log('jest ok');
		loginError.classList.add('active');
	} else {
		loginError.classList.remove('active');
	}
};

const checkRegisterInputs = () => {
	if (
		registerName.value !== '' &&
		registerEmail.value !== '' &&
		registerPassword.value !== '' &&
		rightSecoundPassword.value !== '' &&
		registerDate.value !== '' &&
		registerCheckbox.checked &&
		registerGender.value !== 0
	) {
		console.log('jest ok');
		registerError.classList.add('active');
	} else {
		registerError.classList.remove('active');
	}
};


loginBtn.addEventListener('click', checkLoginInputs);
registerBtn.addEventListener('click', checkRegisterInputs);


firstEye.addEventListener('click', changeEye);
secoundEye.addEventListener('click', changeSecoundEye);
thirdEye.addEventListener('click', changeThirdEye);
