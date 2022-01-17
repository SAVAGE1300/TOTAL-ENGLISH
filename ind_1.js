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

// SHRiNK























// MODAL

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// MODAL
















// SCROLL

window.onscroll = function() {scrollFunction1()};
let position  = document.getElementById("myTopnav").style.background = "#333333"
function scrollFunction1() {
    if (document.body.scrollTop  > 150 || document.documentElement.scrollTop > 150){
        document.getElementById("myTopnav").style.backgroundColor = "rgba(255, 255, 255, 0.93)"
    }
    else  {
        document.getElementById("myTopnav").style.backgroundColor = "#333333"
    }
}

// SCROLL









// (function($){
//     'use strict';
//     $(window).on('load', function () {
//         if ($(".pre-loader").length > 0)
//         {
//             $(".pre-loader").fadeOut("slow");
//         }
//     });
// })(jQuery)























// Go to top
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}
// Go to top






