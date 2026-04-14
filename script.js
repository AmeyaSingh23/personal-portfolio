window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar");

    if (window.scrollY > 670) {
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
    })
})