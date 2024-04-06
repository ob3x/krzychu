const sizesBtn = document.querySelectorAll('.item-right__sizes-item');
const sizesTableBtn = document.querySelector('.item-right__sizesText');
const sizesTableClose = document.querySelector('.popup-item__x');
const table = document.querySelector('.popup-item');
const overlay = document.querySelector('.overlay');
const itemMinus = document.querySelector('.item-minus');
const itemPlus = document.querySelector('.item-plus');
const count = document.querySelector('.item-right__count-value');
const colors = document.querySelectorAll('.item-right__colors-item');
const containerHarmonica = document.querySelectorAll(
	'.item-right__description-container'
);
const containerBtn = document.querySelectorAll(
	'.item-right__description-title'
);
const heartIcon = document.querySelector('.item-right__heart-icon');

let num = 1;

const changeIcon = (e) => {
	sizesBtn.forEach((size) => {
		size.classList.remove('sizes-active');
	});
	e.target.classList.toggle('sizes-active');
};

const changeColor = (e) => {
	colors.forEach((color) => {
		color.classList.remove('color-active');
	});
	e.target.classList.add('color-active');
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
	if (num > 1) {
		num--;
		updateNum();
	}
});

itemPlus.addEventListener('click', () => {
	if (num < 10) {
		num++;
		updateNum();
	}
});

colors.forEach((color) => {
	color.addEventListener('click', changeColor);
});

heartIcon.addEventListener('click', () => {
	heartIcon.classList.toggle('heart-red');
});
