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