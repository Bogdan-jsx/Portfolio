AOS.init()

let navList = document.querySelector("nav ul");

console.log(navList)

setTimeout(() => {
    console.log(123)
    navList.style.display = "flex";
}, 6000)