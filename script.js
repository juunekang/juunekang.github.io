"use strict";

    var i = 0;
    var txt = "Hello world. I'm June! Check out my projects below.";
    var speed = 76;


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
            document.getElementById("projectsOp").style.display = "flex";
    }
