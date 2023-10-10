const primaryNav = document.querySelector('header');
const navToggle = document.querySelector('.hamburger');

navToggle.addEventListener("click", () => { 
    if(primaryNav.getAttribute("data-visible") === "false"){
        primaryNav.setAttribute("data-visible","true");
    }
    else{
        primaryNav.setAttribute("data-visible","false");
    }   
})
