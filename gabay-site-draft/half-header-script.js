// force to top of page on refresh
window.onbeforeunload = function () {
    window.scrollTo(0,0);
};

window.addEventListener('scroll', function () {
    // navbar
    const navbar = document.querySelector('.navbar')
    let innerHeight = window.innerHeight
    navbar.classList.toggle('navbar-scrolled', window.scrollY > innerHeight*.3)

    // progress bar
    let pageHeight = document.body.scrollHeight;
    let progress = window.scrollY / (pageHeight-window.innerHeight) * 100 + "%"
    document.getElementById('progress').style.setProperty('--progress', progress)
})


