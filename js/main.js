AOS.init()

const navListElem = document.querySelector("nav ul");
const technologiesListElem = document.querySelector(".technologies");
const welcome = document.querySelector(".welcome");
const navBar = document.querySelector("nav")

if (window.scrollY >= 970) {    // If when page loaded user don't see first block, it loads immediately without long animations
    welcome.style.animationName = "none";
    navListElem.style.animationName = "none";
    navBar.style.animationName = "none";

    welcome.style.paddingLeft = "15%";
    welcome.style.width = "80%";

    navBar.style.width = "22%";

    navListElem.style.display = "flex";
    navListElem.style.opacity = "1";
} else {                        // Else it does an animation
    setTimeout(() => {
        navListElem.style.display = "flex";
    }, 6000)
}

if (window.scrollY >= 350 && window.scrollY <= 1850) {     // If user looks at technologies list, it is visible, if he doesn't, it is not
    technologiesListElem.style.display = "block"
} else {
    technologiesListElem.style.display = "none"
}

window.onscroll = () => {
    if (window.scrollY >= 350 && window.scrollY <= 1850) { // If user looks at technologies list, it is visible, if he doesn't, it is not (while scrolling)
        technologiesListElem.style.display = "block"
    } else {
        technologiesListElem.style.display = "none"
    }
}