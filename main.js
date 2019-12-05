const KONAMI = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiCodeIndex = 0;

document.addEventListener("keydown", function (event) {
    if (event.keyCode == KONAMI[konamiCodeIndex]) {
        konamiCodeIndex = konamiCodeIndex + 1;
    }
    else {
        konamiCodeIndex = 0;
    }
    if (konamiCodeIndex == KONAMI.length) {
        alert("Vous aussi vous aimez les jeux rétros ? ;)");
        konamiCodeIndex = 0;
    }
});