// force to top of page on refresh
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};


window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const animatBg = document.getElementById("animate-bg");
    const footerBgAnimate = document.getElementById("footer-bg-animate");
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollHeightBeforeFooterAnimate = scrollableHeight - 250;
    

    header.classList.toggle('header-scrolled', window.scrollY > 10);

    if (window.scrollY < 30) {
        animatBg.style = `height: 100px; width: 100px;`;
    }

    if (window.scrollY > 100 && window.scrollY < 150) {
        animatBg.style = `animation: enlarge 1s ease-in forwards;`
    }

    if (window.scrollY > 150 && window.scrollY < scrollHeightBeforeFooterAnimate - window.innerHeight) {
        footerBgAnimate.style = `height: 100px; width: 100px; transform: translateY(50%)`
    }

    if (window.scrollY >= scrollableHeight - window.innerHeight) {
        footerBgAnimate.style = `animation: footer-enlarge 2s ease-in-out forwards;`
    }


    header.classList.toggle('header-scrolled-to-end', window.scrollY >= scrollHeightBeforeFooterAnimate);
})


const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

timeline.to(".text", {y: "0", duration: 1, stagger: "0.25", delay:0.2})
timeline.to("#real-intro", {y: "-100%", duration: 1, delay: 1})
timeline.to("#slider", {y: "-100%", duration: 1}, "-=0.8")
// timeline.from("#first-pic", {x: -100, duration: 1, opacity: 0, ease: Back.easeOut.config(1.7)}, "-=.5")
timeline.from("#hi", {x: -200, duration: 1, opacity: 0})
timeline.from("#button-container", {x: -200, duration: 0.5, opacity: 0, ease: Back.easeOut.config(1.7)}, "-=.5")
timeline.to("#type-animation", {x: "100%", duration: 1, ease: SteppedEase.config(12), delay: 0.5})

