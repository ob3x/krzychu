const sizesBtn = document.querySelectorAll('.item-right__sizes-item');
const sizesTableBtn = document.querySelector('.item-right__sizesText');
const sizesTableClose = document.querySelector('.popup-item__x');
const table = document.querySelector('.popup-item');
const overlay = document.querySelector('.overlay');
const itemMinus = document.querySelector('.item-minus');
const itemPlus = document.querySelector('.item-plus');
const count = document.querySelector('.item-right__count-value');

let num = 1;

const changeIcon = (e) => {
	e.target.classList.toggle('sizes-active');
};

const updateNum = () => {
	count.textContent = num;
};

sizesBtn.forEach((btn) => {
	btn.addEventListener('click', changeIcon);
});

sizesTableBtn.addEventListener('click', () => {
	table.classList.remove('active');
	overlay.classList.remove('active');
});

sizesTableClose.addEventListener('click', () => {
	table.classList.add('active');
	overlay.classList.add('active');
});

itemMinus.addEventListener('click', () => {
	if(!num <= 0) {
		num--;
		updateNum();
	}
});

itemPlus.addEventListener('click', () => {
	num++;
	updateNum();
});
