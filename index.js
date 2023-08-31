document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});



$(".bbtmm").on("click", function () {
    window.location.href = "contme.html";
});





$(document).ready(function() {
    $(window).resize(function() {
      var windowWidth = $(window).width();
  
      if (windowWidth > 580) {
        $("#web-face").fadeOut(function() {
            $("#web-face-large").fadeIn();
        });
        $("#head-1").fadeOut(function() {
            $("#head-2").fadeIn();
        });
    } else {
        $("#web-face-large").fadeOut(function() {
            $("#web-face").fadeIn();
        });
        $("#head-2").fadeOut(function() {
            $("#head-1").fadeIn();
        });
    }    
    });
  
    // Trigger the resize event once on page load
    $(window).trigger('resize');
});

