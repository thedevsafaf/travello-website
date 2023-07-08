// navbar and menu actions

let  menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');


}

// search form

let search = document.querySelector('#search-icon');
let search_form = document.querySelector('#search-form');
let search_close = document.querySelector('#close');

search.onclick = () => {
    search_form.classList.toggle('active');
}

search_close.onclick = () => {
    search_form.classList.remove('active');
}

// auto slider feature page script

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}