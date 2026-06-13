window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 70) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

const pills = document.querySelectorAll(".pill");
const contents = document.querySelectorAll(".pill-content");

pills.forEach(pill => {
    pill.addEventListener("click", () => {
        pills.forEach(p => p.classList.remove("active"));
        pill.classList.add("active");

        contents.forEach(content => content.classList.remove("active"));
        const target = pill.getAttribute("data-target");
        document.getElementById(target).classList.add("active");
    });
});

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});

// Scroll spy
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - (window.innerHeight / 2);
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });

    navAnchors.forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === '#' + currentSection) {
            a.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink(); // run once on load so Home is active immediately

const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollBtn.classList.add("visible");
    } else {
        scrollBtn.classList.remove("visible");
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});