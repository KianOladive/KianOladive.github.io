const aosAnimation = document.querySelectorAll('[data-aos]');
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('aos-animate');
    } else {
      entry.target.classList.remove('aos-animate');
    }
  });
});
aosAnimation.forEach(aosObject => {
  observer.observe(aosObject);
});

console.log('askdfj')