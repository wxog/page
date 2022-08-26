if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 250);

}

var x = 0;

var titleText = [ "w", "wx", "wx!", "wx! ", "wx! 1", "wx! 18", "wx! 188", "wx! 188 ", "wx! 188 침", "wx! 188 침묵", "wx! 188 침묵", "wx! 188 침", "wx! 188 ", "wx! 188", "wx! 18", "wx! 1", "wx! ", "wx!", "wx", "w", " " ];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
	
}