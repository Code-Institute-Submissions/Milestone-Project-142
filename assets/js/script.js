/*--------------------------------Fade animation on content when scrolling through page */
const appearOptions = {
    threshold: 0.4,
    rootMargin: "0px 0px 0px 0px"
};
const faders = document.querySelectorAll('.fade-in');

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    },
    appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
})


/*---------------------------------Back to top button */
backToTopButton = document.querySelector('#back-to-top-btn');


backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*---------------------------------Navbar hide on click */

$(function() {
    var navMain = $(".navbar-collapse"); // avoid dependency on #id
    // "a:not([data-toggle])" - to avoid issues caused
    // when you have dropdown inside navbar
    navMain.on("click", "a:not([data-toggle])", null, function() {
        navMain.collapse('hide');
    });
});


/*----------------------------------Read more function*/
function readMore(city) {
    let dots = document.querySelector(`.card[id="${city}"] .dots`);
    let moreText = document.querySelector(`.card[id="${city}"] .more`);
    let btnText = document.querySelector(`.card[id="${city}"] .myBtn`);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.textContent = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.textContent = "Read less";
        moreText.style.display = "inline";
    }
}
