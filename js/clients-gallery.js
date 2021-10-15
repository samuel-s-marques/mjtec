const flkty = new Flickity('.gallery', {
	imagesLoaded: true,
	percentPosition: false
})

const caption = document.querySelector('.caption')

flkty.on('select', function() {
	caption.textContent = flkty.selectedElement.alt;
})