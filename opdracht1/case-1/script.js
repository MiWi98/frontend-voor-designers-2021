var hearts = document.querySelector("button.heart");

hearts[0].addEventListener("click","dblclick", favorieten)


/* toevoegn aan favorieten of weghalen */
function favorieten(event) {
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

  

