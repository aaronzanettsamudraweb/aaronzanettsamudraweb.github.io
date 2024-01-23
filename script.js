// toggle class active
const navbar = document.querySelector(".navbar");
// ketika menu di klik
document.querySelector("#menu").onclick = () => {
    navbar.classList.toggle("active");
};

// klik selain sidebar untuk tutup
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
    }
});

// navbar berubah ketika scroll
var nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});

// count up project
// let valueDisplays = document.querySelectorAll(".number");
// let interval = 3000;

// valueDisplays.forEach((valueDisplay) => {
//     let startValue = 0;
//     let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//     let duration = Math.floor(interval / endValue);
//     let counter = setInterval(function () {
//         startValue += 1;
//         valueDisplay.textContent = startValue;
//         if (startValue == endValue) {
//             clearInterval(counter);
//         }
//     }, duration);
// });
