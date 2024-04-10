const loginBtn = document.querySelector('.loginBtn');
const loginError = document.querySelector('.loginError');
const email = document.querySelector('.email');

const checkInputs = () => {
	if (email.value !== '') {
		console.log('jest ok');
		loginError.classList.add('active');
	} else {
		loginError.classList.remove('active');
	}
};

loginBtn.addEventListener('click', checkInputs);