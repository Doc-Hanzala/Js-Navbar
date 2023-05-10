
// selecting elements
const btn = document.querySelector(".nav-toggle")
const links = document.querySelector(".links")

// functionality

btn.addEventListener("click",()=>{
    links.classList.toggle("show-links")
})