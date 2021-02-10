var hearts = document.querySelectorAll("button.heart");

for (h = 0; h < hearts.length; h++) {
  hearts[h].addEventListener("click", favorieten);
  }

/* toevoegen aan favorieten of weghalen */
function favorieten(event) {
  var clickedHeart = event.target;

    /* als het hartje nog niet gefavoriet is */
    if (clickedHeart.innerHTML == "🤍") {
      /* het witte hartje vervangen door het groene hartje */
      clickedHeart.innerHTML = "💚";
    }
    /* als het hartje groene is */
    else {
      /* het groene hartje vervangen door het witte hartje */
      clickedHeart.innerHTML = "🤍";
    }
  }





