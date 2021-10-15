const options = {
	wrapAround: true,
	autoPlay: 5000,
	prevNextButtons: false,
}

const carousel = document.getElementsByClassName('depoimento')
const flickity = new Flickity(carousel, options)