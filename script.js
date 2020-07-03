"use strict";

    var i = 0;
    var txt = "Hello world. I'm June! Check out my projects below.";
    var speed = 76;
    var done = 0;


window.onload = function() {
    console.log("hello");
    typeWriter();
}

    function typeWriter() {
        if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
        }
        if (i == txt.length) {
            showButton();
        }
    }

function showButton() {
    document.getElementById("projectsOp").className = "fade-in"
    document.getElementById("projectsOp").style.display = "flex";
}
