// NAVBAR

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
// NAVBAR



// PARALLAX

// PARALLAX




// BACKGROUND

// BACKGROUND





// SHRiNK
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.height = "0%";
    }
    else {
        document.getElementById("header").style.height = "100%";
    }
}
// SHRiNK