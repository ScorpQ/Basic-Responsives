// JS TO CONFIGURE HAMBURGER
const primaryNav = document.querySelector('header');
const navToggle = document.querySelector('.hamburger');
console.log(primaryNav);
navToggle.addEventListener("click", () => { 
    if(primaryNav.getAttribute("data-visible") === "false"){
        primaryNav.setAttribute("data-visible","true");
    }
    else{
        primaryNav.setAttribute("data-visible","false");
    }   
})


// submit button css
const navTosdfggle = document.querySelector('.hamburger');


