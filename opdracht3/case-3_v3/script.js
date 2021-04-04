var slideContainer = document.querySelector('#slides-container');
var nextSlide = document.querySelector(".right-slide");
var prevSlide = document.querySelector(".left-slide");
var index = 0;

nextSlide.onclick = function () {
  next("next"); // volgende slide
}
prevSlide.onclick = function () {
  next("prev"); // vorige slide
}

function next(direction) {
  var slides = document.querySelector('.slider-items').children;
  var totalSlides = slides.length;

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

function imageNode (imageData, isActive = false) {
  let div = document.createElement("div"); // ik creëer een element doormiddel van de css naam+styling opvragen 
  div.className = 'item';
  if (isActive) {
    div.className += ' active';
  }

  let image = document.createElement("img"); // ik creëer een element doormiddel van de css naam+styling opvragen 
  image.src = imageData.urls.regular; //hiermee vertel ik dat de afbeelding data wil laten zien 

  let text = document.createElement("div"); // ik creëer een element doormiddel van de css naam+styling opvragen 
  text.className = 'caption'; // dit is het tekst element wat ik wil laten zien(css)
  text.innerHTML = imageData.alt_description; // hiermee laat ik de titel van de afbeeldingen tevoorschijn komen.

  let author = document.createElement("div"); // ik creëer een element doormiddel van de css naam+styling opvragen 
  author.className = 'author'; // dit is het tekst element wat ik wil laten zien(css)
  author.innerHTML = imageData.user.name; // hiermee laat ik de auteur van de afbeeldingen tevoorschijn komen.

  div.appendChild(image);
  div.appendChild(text);
  div.appendChild(author);


  return div;
}

function setImages (images) {
  images.forEach((image, index) => {
    console.log(image);
    const newImage = imageNode(image, index === 0);
    slideContainer.appendChild(newImage);
  })
}

//get random unsplash image
async function getUnsplashImages() {
  const url = 'https://api.unsplash.com/photos/random?client_id=rn5xvE-J4lz9sdBdvxMXC1Tj5ryMbWE5RU-btNhFKwk&count=4&orientation=squarish' // doormiddel van deze key/client id kan ik mijn images en json data laden.
  const images = await fetch(url).then((response) => response.json()); //hiermee roep ik de images op en stuurt het het naar de pagina

  setImages(images);
}

getUnsplashImages();
