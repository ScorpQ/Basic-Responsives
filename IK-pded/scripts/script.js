const primaryNav = document.querySelector('nav');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");
    console.log(visibility);
})