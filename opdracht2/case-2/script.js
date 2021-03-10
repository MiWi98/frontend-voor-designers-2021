//var counter = 1;
//setInterval(function(){
//    document.getElementById('radio' + counter).checked = true;
//    counter++;
//    if (counter > 4){
//        counter = 1;
//    }
//}, 5000);


// key codes, maar moet nog in de slider gezet worden.
window.addEventListener("keydown", checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "39"){ //arrow right key code
        alert(" the 'arrowright' symbol key has been pressed!");
    }
}

window.addEventListener("keydown", checkKeyPress2, false);
function checkKeyPress2(key){
    if (key.keyCode == "37"){ //arrow left key code
        alert(" the 'arrowleft' symbol key has been pressed!");
    }
}

const arrowKeys = () => {
    window.addEventListener("onkeydown", e => {
        if (e.key === 37) {
            prevControl.click();
            return false
        } else if (e.key === 39) {
            nextControl.click();
            return false
        }
    });
};

if (keyboard === "true") {
   arrowKeys();
}