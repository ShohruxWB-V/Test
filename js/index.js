// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.padding = "20px 10px";
    document.getElementById("header").style.transition = "350ms ease";
    document.getElementById("header").style.boxShadow = "0px 4px 20px 1px grey";
    } else {
    document.getElementById("header").style.padding = "0px 0px";
    document.getElementById("header").style.boxShadow = "none";
    }
}
