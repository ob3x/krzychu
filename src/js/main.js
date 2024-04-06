const trailerVideo = document.querySelector('.trailer-box__stop');
const heartRed = document.querySelectorAll('.news-item-img__heart');

trailerVideo.addEventListener('click', () => {
	trailerVideo.classList.toggle('play');
});