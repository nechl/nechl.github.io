const sectionsArray = document.querySelectorAll('section');
const sectionsPos = {};

sectionsArray.forEach((section) => {
	sectionsPos[section.id] = section.offsetTop;
});

window.onscroll = () => {
	var scrollPosition =
		document.documentElement.scrollTop || document.body.scrollTop;
	for (id in sectionsPos) {
		if (sectionsPos[id] <= scrollPosition) {
			document.querySelector('.active').classList.remove('active');
			document.querySelector(`a[href*=${id}]`).classList.add('active');
		}
	}
};
/*
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-slide", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-slide";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
*/