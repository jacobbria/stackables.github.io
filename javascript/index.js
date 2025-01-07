// Control menu visibility while scrolling
let lastScrollTop = 0;
const navbar = document.getElementById("gorrdyNavbar");
const bottomNavbar = document.getElementById("stackablesNavbar");

// debug code
if (navbar != null && bottomNavbar != null){
    console.log("Found gorrdy navbar!");
} else {
    console.log("Did not find gorrdy navbar!")
}

// event listner for scroll event to trigger menu
window.addEventListener("scroll", function () {
    let currentScroll = window.scrollY || this.document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        navbar.style.top = "-90px";
        bottomNavbar.style.top = "0";

    } else {
        navbar.style.top = "0";
        bottomNavbar.style.top = "90px";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});