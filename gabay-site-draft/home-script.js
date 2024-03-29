// force to top of page on refresh
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

window.addEventListener('scroll', function () {
    // navbar
    const navbar = document.querySelector('.navbar')
    let innerHeight = window.innerHeight
    navbar.classList.toggle('navbar-scrolled', window.scrollY > innerHeight*.8)

    // progress bar
    let pageHeight = document.body.scrollHeight;
    let progress = window.scrollY / (pageHeight-window.innerHeight) * 100 + "%"
    document.getElementById('progress').style.setProperty('--progress', progress)

    // landing parallax
    let parallaxItems = []
    // parallaxItems.push(document.getElementById('landing-heading'))
    // parallaxItems.push(document.getElementById('landing-subheading'))
    // parallaxItems.push(document.getElementById('intro-girl'))

    // for (let i=0; i<parallaxItems.length; i++) {
    //     parallaxItems[i].style.transform = 'translate3d(0px,'+window.scrollY*parallaxItems[i].dataset.rate+'px, 0px)'
    // }

    const landingPage = document.getElementById('landing-page')
    landingPage.style.backgroundPositionY = (window.scrollY*0.7) + "px"
})

function cardHoverOne() {
    document.getElementById("project-card-one-desc").style = `animation: showCard .3s ease-in-out forwards;`
}

function cardHoverOneOut() {
    document.getElementById("project-card-one-desc").style = `animation: hideCard .2s ease-in-out forwards;`
}

function cardHoverTwo() {
    document.getElementById("project-card-two-desc").style = `animation: showCard .3s ease-in-out forwards;`
}

function cardHoverTwoOut() {
    document.getElementById("project-card-two-desc").style = `animation: hideCard .2s ease-in-out forwards;`
}

function cardHoverThree() {
    document.getElementById("project-card-three-desc").style = `animation: showCard .3s ease-in-out forwards;`
}

function cardHoverThreeOut() {
    document.getElementById("project-card-three-desc").style = `animation: hideCard .2s ease-in-out forwards;`
}

function cardHoverFour() {
    document.getElementById("project-card-four-desc").style = `animation: showCard .3s ease-in-out forwards;`
}

function cardHoverFourOut() {
    document.getElementById("project-card-four-desc").style = `animation: hideCard .2s ease-in-out forwards;`
}

function cardHoverFive() {
    document.getElementById("project-card-five-desc").style = `animation: showCard .3s ease-in-out forwards;`
}

function cardHoverFiveOut() {
    document.getElementById("project-card-five-desc").style = `animation: hideCard .2s ease-in-out forwards;`
}

function cardHoverSix() {
    document.getElementById("project-card-six-desc").style = `animation: showCard .3s ease-in-out forwards;`
}

function cardHoverSixOut() {
    document.getElementById("project-card-six-desc").style = `animation: hideCard .2s ease-in-out forwards;`
}

// loader animations
const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
window.addEventListener("load", function() {
    timeline.to("#loader", {y: "-100vh", duration: .5})
    timeline.from('#landing-page', {scale: 1.4, duration: .8})
    timeline.from("#landing-heading", {y: 200, duration: .7, opacity: 0})
    timeline.fromTo("#landing-subheading", {y: 200, opacity: 0}, {y: 0, opacity: 100, duration: .7, delay: -.5})
    console.log("loaded")
})

// footer email button
function sendEmail() {
    document.getElementById('email-button').click()
}

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
