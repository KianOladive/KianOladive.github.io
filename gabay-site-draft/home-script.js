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

const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

window.addEventListener("load", function() {
    timeline.to("#loader", {y: "-100vh", duration: .5})
    timeline.from("#landing-heading", {y: 200, duration: .7, opacity: 0})
    timeline.fromTo("#landing-subheading", {y: 200, opacity: 0}, {y: 0, opacity: 100, duration: .7, delay: -.5})
    console.log("loaded")
})

