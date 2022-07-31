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

    for (let i=0; i<parallaxItems.length; i++) {
        parallaxItems[i].style.transform = 'translate3d(0px,'+window.scrollY*parallaxItems[i].dataset.rate+'px, 0px)'
    }

    const landingPage = document.getElementById('landing-page')
    landingPage.style.backgroundPositionY = (window.scrollY*0.7)-150 + "px"
})

function cardHoverOne() {
    document.getElementById("project-card-one-desc").style = `display: flex;`
}

function cardHoverOneOut() {
    document.getElementById("project-card-one-desc").style = `display: none;`
}

function cardHoverTwo() {
    document.getElementById("project-card-two-desc").style = `display: flex;`
}

function cardHoverTwoOut() {
    document.getElementById("project-card-two-desc").style = `display: none;`
}

function cardHoverThree() {
    document.getElementById("project-card-three-desc").style = `display: flex;`
}

function cardHoverThreeOut() {
    document.getElementById("project-card-three-desc").style = `display: none;`
}

function cardHoverFour() {
    document.getElementById("project-card-four-desc").style = `display: flex;`
}

function cardHoverFourOut() {
    document.getElementById("project-card-four-desc").style = `display: none;`
}

function cardHoverFive() {
    document.getElementById("project-card-five-desc").style = `display: flex;`
}

function cardHoverFiveOut() {
    document.getElementById("project-card-five-desc").style = `display: none;`
}

function cardHoverSix() {
    document.getElementById("project-card-six-desc").style = `display: flex;`
}

function cardHoverSixOut() {
    document.getElementById("project-card-six-desc").style = `display: none;`
}

// loader animations
const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
window.addEventListener("load", function() {
    timeline.to("#loader", {y: "-100vh", duration: .5})
    timeline.from("#landing-heading", {y: 200, duration: .7, opacity: 0})
    timeline.fromTo("#landing-subheading", {y: 200, opacity: 0}, {y: 0, opacity: 100, duration: .7, delay: -.5})
    console.log("loaded")
})

