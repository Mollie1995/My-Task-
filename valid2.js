var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  if (n < 0 && slideIndex === 1) {
    return; // Prevent going before first slide
  }
  if (n > 0 && slideIndex === document.getElementsByClassName("mySlides").length) {
    return; // Prevent going after last slide
  }
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

// Automatic slideshow
setInterval(function() {
  plusSlides(1);
}, 3000); // Change image every 3 seconds

// Previous button click event
document.querySelector(".prev").addEventListener("click", function() {
  plusSlides(-1);
});

// Next button click event
document.querySelector(".next").addEventListener("click", function() {
  plusSlides(1);
});


