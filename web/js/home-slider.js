const options = {
	wrapAround: true,
	autoPlay: 5000,
	accessibility: false,
	pageDots: false,
	setGallerySize: false,
	prevNextButtons: false,
	draggable: false,
	pauseAutoPlayOnHover: false
}

const carousel = document.querySelector('[data-carousel]')
const slides = document.getElementsByClassName('carousel-cell')
const flikity = new Flickity(carousel, options)

flikity.on('scroll', function() {
	flikity.slides.forEach(function (slide, index) {
		let image = slides[index]
		let x = (slide.target + flikity.x) * -1/3
		image.style.backgroundPosition = x + 'px center'
	})
})