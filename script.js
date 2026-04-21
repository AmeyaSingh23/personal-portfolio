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

const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".project-card");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        button.classList.add("active");
        
        const filter = button.dataset.filter;
        cards.forEach(card => {
            const match = filter === "all" || card.dataset.category === filter;
            card.classList.toggle("hidden", !match);
        });
    });
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

//see more/see less
const BATCH = 3;
const allCards = Array.from(document.querySelectorAll(".project-card"));
const seeMoreBtn = document.getElementById("see-more-btn");
let visibleCount = BATCH;

function updateCards() {
    allCards.forEach((card, i) => {
        card.classList.toggle("collapsed", i >= visibleCount);
    });
    if (visibleCount >= allCards.length) {
        seeMoreBtn.textContent = "See Less";
    } else {
        seeMoreBtn.textContent = "See More";
    }
    //if <= 3 cards, hide btn
    seeMoreBtn.style.display = allCards.length <= BATCH ? "none" : "block";
}

seeMoreBtn.addEventListener("click", () => {
    if (visibleCount >= allCards.length) {
        visibleCount = BATCH;
        //scroll back to top of projects section
        document.getElementById("projects").scrollIntoView({behavior : "smooth"});
    } else {
        visibleCount += BATCH;
    }
    updateCards();
});
updateCards();

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