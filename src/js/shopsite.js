const rangeInput = document.querySelectorAll('.shopsite__price-range input'),
	priceInput = document.querySelectorAll('.shopsite__price-box--item'),
	progress = document.querySelector('.shopsite__price-slider--item');

let priceGap = 1000;

priceInput.forEach((input) => {
	input.addEventListener('input', (e) => {
		let minVal = parseInt(priceInput[0].value),
			maxVal = parseInt(priceInput[1].value);

		if((maxVal - minVal >= priceGap) && maxVal <= 10000) {
			if (e.target.classList.contains('min-input')) {
				rangeInput[0].value = minVal;
				progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
			} else {
				rangeInput[1].value = maxVal;
				progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
			}
		}
	});
});


rangeInput.forEach((input) => {
	input.addEventListener('input', (e) => {
		let minVal = parseInt(rangeInput[0].value),
			maxVal = parseInt(rangeInput[1].value);

		if (maxVal - minVal < priceGap) {
			if (e.target.className === 'shopsite__price-range--min') {
				rangeInput[0].value = maxVal - priceGap;
			} else {
				rangeInput[1].value = minVal + priceGap;
			}
		} else {
			priceInput[0].value = minVal;
			priceInput[1].value = maxVal;
			progress.style.left = (minVal / rangeInput[0].max) * 100 + '%';
			progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + '%';
		}
	});
});
