

// navbar burger menu
const navbarLinks = document.getElementById("navbar-links")
const navbar = document.querySelector('.navbar')
const burgerMenu = document.getElementById('nav-toggle')
document.getElementById("nav-toggle").addEventListener("click", function() {
    navbarLinks.classList.toggle("open-nav")
    navbarLinks.classList.toggle("closed-nav")
    navbar.classList.toggle("open-nav")
    navbar.classList.toggle("closed-nav")
    burgerMenu.classList.toggle("open-nav")
    burgerMenu.classList.toggle("closed-nav")
})