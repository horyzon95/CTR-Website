


var slideIndex = [1,1];
showSlides(1, 0);
showSlides(1, 1);

// Next/previous controls
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function currentSlide(n, no) {
 showSlides(slideIndex = n, dot, slider);
}

function showSlides(n, no) {
  var i;
  console.log("mySlider"+no);
  var slides = document.getElementsByClassName("mySlides"+no);
  var dots = document.getElementsByClassName("dot"+no);
  if (n > slides.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
  }
  console.log(slides)
  console.log("SALUT value of slideindex " + slideIndex[no]);
  slides[slideIndex[no]-1].style.display = "block";
  dots[slideIndex[no]-1].className += " active";
}