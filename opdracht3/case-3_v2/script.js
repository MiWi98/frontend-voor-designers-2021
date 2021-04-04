var slides = document.querySelector('.slider-items').children;
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick = function () {
  next("next"); // volgende slide
}
prevSlide.onclick = function () {
  next("prev"); // vorige slide
}

function next(direction) {

  if (direction == "next") {
    index++;
    if (index == totalSlides) {
      index = 0; // slide begint bij 0
    }
  }
  else {
    if (index == 0) {
      index = totalSlides - 1;
    }
    else {
      index--;
    }
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active"); // hiermee verwijder ik de classlist (.slider-item).children 
  }
  slides[index].classList.add("active");  // hiermee add ik de classlist (.slider-item).children    

}

// pijltjes toetsen
function handleKeyboardNav(e) {
  if (!e) e = window.event;
  var kc = e.keyCode;
  if (kc == 37) next("prev"); // naar de previous foto met de keycode 39 | 39= right arrow
  if (kc == 39) next("next"); // naar de next foto met de keycode 37 | 37 = left arrow
}

function bindKeyDownListener() {
  if (document.addEventListener) {
    document.addEventListener("keydown", handleKeyboardNav, false); // hiermee zeg ik wanneer de toets naar beneden drukt dat de foto moet wijzigen
  }
}

//start the binding
bindKeyDownListener();


function setImages (images) {
  
  images.forEach((image) => {
    console.log(image)
  })
}

//get random unsplash image
async function getUnsplashImages() {
  const url = 'https://api.unsplash.com/photos/random?client_id=rn5xvE-J4lz9sdBdvxMXC1Tj5ryMbWE5RU-btNhFKwk&count=4'
  const result = await fetch(url).then((response) => response.json())

  setImages(result)
}

getUnsplashImages()
