
// Slider Initialize

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("blogSlides");
  let dots = document.getElementsByClassName("blogSlider__dots--dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// Accordion


(function(){
  let d = document;
  let ul = d.querySelector('.according-list');
  let h4s = d.querySelectorAll('h4');
  ul.addEventListener('click', function(e){
    for (let i = 0; i < h4s.length; i++) {
      h4s[i].classList.remove('actives');
    }

    if (e.target && e.target.nodeName == 'H4') {
      e.target.classList.toggle('actives');
    }
  });
})();
